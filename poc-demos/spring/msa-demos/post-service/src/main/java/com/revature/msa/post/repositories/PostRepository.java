package com.revature.msa.post.repositories;

import com.revature.msa.post.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findPostsByPosterId(int posterId);
    List<Post> findPostsByThreadId(int threadId);
}
