package com.revature.repositories;

import com.revature.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizServiceRepository extends JpaRepository<Quiz,Integer> {
}
