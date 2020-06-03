package com.revature.poc.controllers;

import com.revature.poc.entities.AppUser;
import com.revature.poc.exceptions.BadRequestException;
import com.revature.poc.exceptions.ResourceNotFoundException;
import com.revature.poc.exceptions.RevaboardsException;
import com.revature.poc.services.UserService;
import com.revature.poc.dtos.AppUserDTO;
import com.revature.poc.dtos.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping
    public List<AppUserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/role")
    public List<AppUserDTO> getUsersByRole(@RequestParam String rolename) {
        System.out.println(rolename + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        return userService.getUsersByRole(rolename);
    }

    @GetMapping(value="/id/{id}")
    public AppUserDTO getUserById(@PathVariable int id, HttpServletRequest req) {
        return userService.getUserById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public AppUserDTO registerNewUser(@RequestBody @Valid AppUser newUser) {
        return userService.register(newUser);
    }


}

