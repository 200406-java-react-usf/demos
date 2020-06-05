package com.revature.msa.post.dtos;

import java.util.Objects;

public class AppUserDTO {

    private int id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String registerDatetime;
    private boolean isActive;
    private String role;

    public AppUserDTO() {
        super();
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

    public String getRegisterDatetime() {
        return registerDatetime;
    }

    public void setRegisterDatetime(String registerDatetime) {
        this.registerDatetime = registerDatetime;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppUserDTO that = (AppUserDTO) o;
        return id == that.id &&
                isActive == that.isActive &&
                Objects.equals(username, that.username) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(registerDatetime, that.registerDatetime) &&
                role == that.role;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, firstName, lastName, email, registerDatetime, isActive, role);
    }

    @Override
    public String toString() {
        return "AppUserDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", registerDatetime='" + registerDatetime + '\'' +
                ", isActive=" + isActive +
                ", role=" + role +
                '}';
    }

}
