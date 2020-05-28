package com.revature.quizzard.web.controllers;

import com.revature.quizzard.entities.AppUser;
import com.revature.quizzard.services.UserService;

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

}
