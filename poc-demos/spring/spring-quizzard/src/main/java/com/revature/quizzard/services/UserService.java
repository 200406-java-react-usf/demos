package com.revature.quizzard.services;

import com.revature.quizzard.repos.UserRepository;

// Check spring-orm-notes for details on @Transactional
public class UserService {

    private UserRepository userRepo;

    public UserService(UserRepository repo) {
        this.userRepo = repo;
    }

    // make service methods here that validate data before calling to repo

}
