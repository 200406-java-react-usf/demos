package com.revature.msa.post.entities;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="posts")
public class Post {

    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @NotNull
    @NotBlank
    @Column(nullable=false, length=35)
    private String title;

    @NotNull
    @NotBlank
    @Column(nullable=false, length=2056)
    private String body;

    @PastOrPresent
    @Column(name="created_time", columnDefinition="timestamp default current_timestamp")
    private LocalDateTime createdTime;

    @Min(0)
    @Column(columnDefinition="int default 0")
    private int likes;

    @Min(1)
    @Column(name="thread_id", nullable=false)
    private int threadId;

    @Min(1)
    @Column(name="poster_id", nullable=false)
    private int posterId;

    public Post() {
        super();
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

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
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

    public int getPosterId() {
        return posterId;
    }

    public void setPosterId(int posterId) {
        this.posterId = posterId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return id == post.id &&
                likes == post.likes &&
                threadId == post.threadId &&
                posterId == post.posterId &&
                Objects.equals(title, post.title) &&
                Objects.equals(body, post.body) &&
                Objects.equals(createdTime, post.createdTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, body, createdTime, likes, threadId, posterId);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", createdTime=" + createdTime +
                ", likes=" + likes +
                ", threadId=" + threadId +
                ", posterId=" + posterId +
                '}';
    }
    
}
