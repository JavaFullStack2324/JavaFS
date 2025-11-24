package com.revature.controllers;

import com.revature.models.Flashcard;
import com.revature.repositories.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("flashcard")
public class FlashCardController {

    @Autowired
    private FlashcardRepository flashcardDao;

//    @Autowired
//    private Environment env;

    @GetMapping
    public ResponseEntity<List<Flashcard>> findAll(){
        List<Flashcard> flashcards = flashcardDao.findAll();
        return ResponseEntity.ok(flashcards);
    }

    
}
