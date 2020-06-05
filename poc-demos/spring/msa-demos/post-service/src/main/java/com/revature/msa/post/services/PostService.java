package com.revature.msa.post.services;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.revature.msa.post.dtos.AppUserDTO;
import com.revature.msa.post.dtos.PostDTO;
import com.revature.msa.post.exceptions.ResourceNotFoundException;
import com.revature.msa.post.intercom.UserClient;
import com.revature.msa.post.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {

    private PostRepository postRepo;
    private UserClient userClient;

    @Autowired
    public PostService(PostRepository repo, UserClient client) {
        this.postRepo = repo;
        this.userClient = client;
    }

    @Transactional(readOnly=true)
    @HystrixCommand(fallbackMethod="userServiceUnavailable")
    public List<PostDTO> getAllPosts() {
        return postRepo.findAll()
                       .stream()
                        .map(post -> {
                            System.out.println(post);
                            PostDTO postDTO = new PostDTO(post);
                            AppUserDTO userDTO = userClient.getUserById(post.getPosterId());
                            System.out.println(userDTO);
                            postDTO.setPoster(userDTO);
                            return postDTO;
                        })
                       .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public List<PostDTO> getPostsByPosterId(int posterId) {
        return postRepo.findPostsByPosterId(posterId)
                       .stream()
                       .map(post -> {
                           PostDTO postDTO = new PostDTO(post);
                           AppUserDTO userDTO = userClient.getUserById(post.getPosterId());
                           postDTO.setPoster(userDTO);
                           return postDTO;
                       })
                       .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public List<PostDTO> getPostsByThreadId(int threadId) {
        return postRepo.findPostsByThreadId(threadId)
                       .stream()
                        .map(post -> {
                            PostDTO postDTO = new PostDTO(post);
                            AppUserDTO userDTO = userClient.getUserById(post.getPosterId());
                            postDTO.setPoster(userDTO);
                            return postDTO;
                        })
                       .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public PostDTO getPostById(int postId) {
        return postRepo.findById(postId)
                        .map(post -> {
                            PostDTO postDTO = new PostDTO(post);
                            AppUserDTO userDTO = userClient.getUserById(post.getPosterId());
                            postDTO.setPoster(userDTO);
                            return postDTO;
                        })
                       .orElseThrow(ResourceNotFoundException::new);
    }

    public List<PostDTO> userServiceUnavailable() {
        System.out.println("The user-service is unavailable at this time. Please try your request again later.");
        return new ArrayList<>();
    }

}
