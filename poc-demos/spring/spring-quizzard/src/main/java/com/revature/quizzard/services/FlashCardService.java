package com.revature.quizzard.services;

import com.revature.quizzard.repos.FlashCardRepository;

public class FlashCardService {

    private FlashCardRepository cardRepo;

    public FlashCardService(FlashCardRepository repo) {
        this.cardRepo = repo;
    }

}
