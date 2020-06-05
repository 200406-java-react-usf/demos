package com.revature.msa.user.entities;

import com.revature.msa.user.util.RegexUtil;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="app_users")
public class AppUser {

    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @NotNull
    @NotBlank
    @Column(nullable=false, unique=true)
    private String username;

    @NotNull
    @NotBlank
    @Column(nullable=false)
    private String password;

    @NotNull
    @NotBlank
    @Column(name="first_name", nullable=false)
    private String firstName;

    @NotNull
    @NotBlank
    @Column(name="last_name", nullable=false)
    private String lastName;

    @NotNull
    @Pattern(regexp=RegexUtil.emailRegex)
    @Column(nullable=false, unique=true)
    private String email;

    @Column(name="register_datetime", updatable=false, columnDefinition="timestamp default CURRENT_TIMESTAMP")
    private LocalDateTime registerDatetime;

    @Column(name="is_active", columnDefinition="boolean default true")
    private boolean isActive;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public AppUser() {
        super();
    }

    public AppUser(String username, String password, String firstName, String lastName, String email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isActive = true;
        this.registerDatetime = LocalDateTime.now();
        this.role = UserRole.USER;
    }

    public AppUser(int id, String un, String pw, String fn, String ln, String email, LocalDateTime rDt, boolean isActive, UserRole role) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.registerDatetime = rDt;
        this.isActive = isActive;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getRegisterDatetime() {
        return registerDatetime;
    }

    public void setRegisterDatetime(LocalDateTime registerDatetime) {
        this.registerDatetime = registerDatetime;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppUser appUser = (AppUser) o;
        return id == appUser.id &&
                isActive == appUser.isActive &&
                Objects.equals(username, appUser.username) &&
                Objects.equals(password, appUser.password) &&
                Objects.equals(firstName, appUser.firstName) &&
                Objects.equals(lastName, appUser.lastName) &&
                Objects.equals(email, appUser.email) &&
                Objects.equals(registerDatetime, appUser.registerDatetime) &&
                role == appUser.role;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, firstName, lastName, email, registerDatetime, isActive, role);
    }

    @Override
    public String toString() {
        return "AppUser{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", registerDatetime=" + registerDatetime +
                ", isActive=" + isActive +
                ", role=" + role +
                '}';
    }

}
