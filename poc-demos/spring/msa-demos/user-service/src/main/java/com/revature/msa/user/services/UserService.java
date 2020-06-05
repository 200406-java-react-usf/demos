package com.revature.msa.user.services;

import com.revature.msa.user.dtos.AppUserDTO;
import com.revature.msa.user.entities.AppUser;
import com.revature.msa.user.entities.UserRole;
import com.revature.msa.user.exceptions.BadRequestException;
import com.revature.msa.user.exceptions.ResourceNotFoundException;
import com.revature.msa.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
