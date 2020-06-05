package com.revature.msa.user.repositories;

import com.revature.msa.user.entities.AppUser;
import com.revature.msa.user.entities.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Integer> {

    List<AppUser> findAppUsersByRole(UserRole role);
    AppUser findAppUserByUsername(String username);
    AppUser findAppUserByEmail(String email);

}
