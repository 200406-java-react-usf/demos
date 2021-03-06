package com.revature;

import com.revature.config.AppConfig;
import com.revature.models.Coach;
import com.revature.models.FootballCoach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDriver {

    public static void main(String[] args) {

        System.out.println("Creating the bean container...");

        try (AnnotationConfigApplicationContext container = new AnnotationConfigApplicationContext(AppConfig.class)) {

            System.out.println("Bean container created!");

            // Retrieve a coach from the container using its bean name
            Coach coach = container.getBean("codeCoach", Coach.class);

            // Call some methods on the retrieved bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getMotivation());


            //-------------------------------------------

            // Attempt to get another coach from the the container
            Coach assistantCoach = container.getBean("myCoach", Coach.class);
            System.out.println(coach);
            System.out.println(assistantCoach);
            System.out.println(coach == assistantCoach);

            //--------------------------------------------

            FootballCoach footballCoach = container.getBean("myFootballCoach", FootballCoach.class);
            System.out.println(footballCoach.getDailyWorkout());
            System.out.println(footballCoach.getMotivation());
            System.out.println(footballCoach.getTeam());
            System.out.println(footballCoach.getEmail());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
