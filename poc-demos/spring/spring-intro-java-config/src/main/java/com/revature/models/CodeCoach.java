package com.revature.models;

import com.revature.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class CodeCoach implements Coach{

    private MotivationService motivationService;

    @Autowired
    public CodeCoach(@Qualifier("codeMotivation") MotivationService service) {
        this.motivationService = service;
    }

    @Override
    public String getDailyWorkout() {
        return "Complete 5 medium difficulty dynamic programming HackerRank problems.";
    }

    @Override
    public String getMotivation() {
        return "The code coach says: " + motivationService.getMotivation();
    }
}
