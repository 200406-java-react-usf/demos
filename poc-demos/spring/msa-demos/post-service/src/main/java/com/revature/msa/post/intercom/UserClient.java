package com.revature.msa.post.intercom;

import com.revature.msa.post.dtos.AppUserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/users")
@FeignClient(name="user-service", url="http://localhost:10001")
public interface UserClient {

    @GetMapping(value="/id/{id}")
    AppUserDTO getUserById(@PathVariable int id);

}
