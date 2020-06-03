package com.revature.poc.services;

import com.revature.poc.dtos.AppUserDTO;
import com.revature.poc.dtos.Credentials;
import com.revature.poc.dtos.Principal;
import com.revature.poc.entities.AppUser;
import com.revature.poc.entities.UserRole;
import com.revature.poc.exceptions.AuthenticationException;
import com.revature.poc.exceptions.BadRequestException;
import com.revature.poc.exceptions.ResourceNotFoundException;
import com.revature.poc.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.NoResultException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepo;

    @Autowired
    public UserService(UserRepository repo) {
        this.userRepo = repo;
    }

    @Transactional(readOnly=true)
    public List<AppUserDTO> getAllUsers() {
        return ((List<AppUser>) userRepo.findAll())
                .stream()
                .map(AppUserDTO::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public AppUserDTO getUserById(int id) {

        if (id <= 0) {
            throw new BadRequestException();
        }

        return new AppUserDTO(userRepo.findById(id).orElseThrow(ResourceNotFoundException::new));

    }

    @Transactional(readOnly=true)
    public Principal authenticate(Credentials creds) {

        AppUser retrievedUser;

        try {
            retrievedUser = userRepo.findAppUserByUsernameAndPassword(creds.getUsername(), creds.getPassword());
        } catch (NoResultException e) {
            throw new AuthenticationException("Authentication failed!", e);
        }

        return new Principal(retrievedUser);

    }

    @Transactional
    public AppUserDTO register(AppUser newUser) {

        // validation for unique fields would go here...
        newUser.setActive(true);
        newUser.setRegisterDatetime(LocalDateTime.now());
        newUser.setRole(UserRole.USER);
        return new AppUserDTO(userRepo.save(newUser));
    }

    @Transactional(readOnly=true)
    public List<AppUserDTO> getUsersByRole(String rolename) {
        UserRole role = UserRole.getByName(rolename);
        return userRepo.findAppUsersByRole(role)
                       .stream()
                       .map(AppUserDTO::new)
                       .collect(Collectors.toList());
    }

}
