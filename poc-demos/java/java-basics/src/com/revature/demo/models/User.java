package com.revature.demo.models;

import java.lang.*; // implicitly imported into EVERY Java source code file
import java.util.Objects;

// POJO = Plain Ol' Java Object (synonyms: model, entities, beans)
// POJOs have no functionality, only state. The represent data used by other classes.
public class User extends Object /* <--- you do not need to explicitly extend Object */ {

    /*
     *  Access modifiers (in order of visibility):
     *      1. private (least)
     *      2. package-private
     *      3. protected
     *      4. public (most)
     */

    // private makes these fields accessible only inside of this class file
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String password;
    private String role; // will refactor into an Enum

    public User() {
        super();
    }

    public User(String fn, String ln, String email) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
    }

    public User(String firstName, String lastName, String email, String username, String password, String role) {
        this(firstName, lastName, email); // constructor chaining
        this.username = username;
        this.password = password;
        this.role = role;
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
        User user = (User) o;
        return Objects.equals(firstName, user.firstName) &&
                Objects.equals(lastName, user.lastName) &&
                Objects.equals(email, user.email) &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password) &&
                Objects.equals(role, user.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, email, username, password, role);
    }

    @Override
    public String toString() {
        return "User{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }

}
