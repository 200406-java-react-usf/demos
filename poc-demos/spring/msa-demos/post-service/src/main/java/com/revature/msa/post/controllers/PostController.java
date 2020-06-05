package com.revature.msa.post.controllers;

import com.revature.msa.post.dtos.PostDTO;
import com.revature.msa.post.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService service) {
        this.postService = service;
    }

    @GetMapping
    public List<PostDTO> getAllPosts(HttpServletRequest req) {
        System.out.println(req.getAttribute("went-through-gateway") + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        return postService.getAllPosts();
    }

    @GetMapping(value="/id/{id}")
    public PostDTO getPostById(@PathVariable("id") int postId) {
        return postService.getPostById(postId);
    }

    @GetMapping(value="/poster/{id}")
    public List<PostDTO> getPostsByPosterId(@PathVariable("id") int posterId) {
        return postService.getPostsByPosterId(posterId);
    }

    @GetMapping(value="/thread/{id}")
    public List<PostDTO> getPostsByThreadId(@PathVariable("id") int threadId) {
        return postService.getPostsByThreadId(threadId);
    }

}
