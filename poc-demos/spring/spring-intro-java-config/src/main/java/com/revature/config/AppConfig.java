package com.revature.config;

import com.revature.models.BaseballCoach;
import com.revature.models.Coach;
import com.revature.models.FootballCoach;
import com.revature.services.MotivationService;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan("com.revature")
@PropertySource("classpath:app.properties")
public class AppConfig {

}
