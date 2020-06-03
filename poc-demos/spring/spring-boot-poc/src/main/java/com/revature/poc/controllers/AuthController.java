package com.revature.poc.controllers;

import com.revature.poc.services.UserService;
import com.revature.poc.dtos.Credentials;
import com.revature.poc.dtos.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserService userService;

    @Autowired
    public AuthController(UserService service) {
        this.userService = service;
    }

    @PostMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes="application/json")
    public Principal authenticate(@RequestBody @Valid Credentials creds) {
        Principal payload = userService.authenticate(creds);
        return payload;
    }

}
