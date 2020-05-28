package com.revature.models;

import com.revature.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FootballCoach implements Coach {

    @Value("${coach.email}")
    private String email;

    @Value("Team Beans!")
    private String team;

    private MotivationService motivationService;

    public FootballCoach() {
        super();
        System.out.println("FootballCoach no-args constructor invoked!");
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public MotivationService getMotivationService() {
        return motivationService;
    }

    // setter-based dependency injection (recommended for OPTIONAL dependencies)
    @Autowired
    public void setMotivationService(MotivationService sportMotivationService) {
        System.out.println("setMotivationService invoked!");
        this.motivationService = sportMotivationService;
    }

    public void customInit() {
        System.out.println("FootballCoach.customInit invoked!");
    }

    public void customDestroy() {
        System.out.println("FootballCoach.customDestroy invoked!");
    }

    @Override
    public String getDailyWorkout() {
        return "Do suicide runs to 40, 50, 60, 80, 100 yard lines";
    }

    @Override
    public String getMotivation() {
        return "The football coach says: " + motivationService.getMotivation();
    }

}
