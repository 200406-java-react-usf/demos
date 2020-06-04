package com.revature.client;

import com.revature.client.entities.AppUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class AppConfig {

    public static final Logger logger = LoggerFactory.getLogger(AppConfig.class);
    public static final String API_URL = "http://localhost:5000/users";

    public static void main(String[] args) {

        RestTemplate restClient = new RestTemplate();

        try {

            logger.info("Making request to API for all users...");
            ResponseEntity<AppUser[]> resp = restClient.getForEntity(API_URL, AppUser[].class);
            logger.info("Resource consumption complete!");
            logger.info(resp.toString() + "\n\n\n");

            logger.info("Status code : [" + resp.getStatusCodeValue() + "] - " + resp.getStatusCode());
            logger.info("Response headers: " + resp.getHeaders());
            logger.info("Payload: ");
            for (AppUser u : resp.getBody()) {
                logger.info("\t" + u);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
