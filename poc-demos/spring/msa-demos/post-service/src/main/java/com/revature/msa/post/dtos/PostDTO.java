package com.revature.msa.post.dtos;

import com.revature.msa.post.entities.Post;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Objects;

public class PostDTO {

    private int id;
    private String title;
    private String body;
    private String createdTime;
    private int likes;
    private int threadId;
    private AppUserDTO poster;

    public PostDTO() {
        super();
    }

    public PostDTO(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.body = post.getBody();
        this.createdTime = post.getCreatedTime().toString();
        this.likes = post.getLikes();
        this.threadId = post.getThreadId();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getThreadId() {
        return threadId;
    }

    public void setThreadId(int threadId) {
        this.threadId = threadId;
    }

    public AppUserDTO getPoster() {
        return poster;
    }

    public void setPoster(AppUserDTO poster) {
        this.poster = poster;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostDTO postDTO = (PostDTO) o;
        return id == postDTO.id &&
                likes == postDTO.likes &&
                threadId == postDTO.threadId &&
                Objects.equals(title, postDTO.title) &&
                Objects.equals(body, postDTO.body) &&
                Objects.equals(createdTime, postDTO.createdTime) &&
                Objects.equals(poster, postDTO.poster);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, body, createdTime, likes, threadId, poster);
    }

    @Override
    public String toString() {
        return "PostDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", createdTime='" + createdTime + '\'' +
                ", likes=" + likes +
                ", threadId=" + threadId +
                ", poster=" + poster +
                '}';
    }

}