package com.revature.quizzard.web.controllers;

import com.revature.quizzard.entities.AppUser;
import com.revature.quizzard.services.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

// check spring-mvc-notes!
public class UserController {

    private UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    public List<AppUser> getAllUsers() {
        return null;
    }

    public AppUser getUserById(int id) {
        return null;
    }

    public AppUser registerNewUser(AppUser newuser) {
        return null;
    }

    @GetMapping(value = "/student/{studentId}")
    public @ResponseBody
    Student getTestData(@PathVariable Integer studentId) {
        Student student = new Student();
        student.setName("Peter");
        student.setId(studentId);

        return student;
    }
}
