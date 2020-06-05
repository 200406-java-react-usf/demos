package com.revature.msa.user.controllers;

import com.revature.msa.user.entities.AppUser;
import com.revature.msa.user.exceptions.BadRequestException;
import com.revature.msa.user.exceptions.ResourceNotFoundException;
import com.revature.msa.user.exceptions.RevaboardsException;
import com.revature.msa.user.services.UserService;
import com.revature.msa.user.dtos.AppUserDTO;
import com.revature.msa.user.dtos.ErrorResponse;
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

