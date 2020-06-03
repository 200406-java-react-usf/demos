package com.revature.poc.repositories;

import com.revature.poc.entities.AppUser;
import com.revature.poc.entities.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Integer> {

    List<AppUser> findAppUsersByRole(UserRole role);
    AppUser findAppUserByUsernameAndPassword(String username, String password);
}
