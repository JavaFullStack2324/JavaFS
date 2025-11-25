package com.revature.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Flashcard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String question;
    private String answer;
    private String name;
    private Difficulty difficulty;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name="topic_id")
    private Topic topic;

    public Flashcard() {
    }

    public Flashcard(int id, String question, String answer, String name, Difficulty difficulty, Topic topic) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.name = name;
        this.difficulty = difficulty;
        this.topic = topic;
    }

    @Override
    public String toString() {
        return "Flashcard{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", name='" + name + '\'' +
                ", difficulty=" + difficulty +
                ", topic=" + topic +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Flashcard)) return false;
        Flashcard flashcard = (Flashcard) o;
        return getId() == flashcard.getId() && Objects.equals(getQuestion(), flashcard.getQuestion()) && Objects.equals(getAnswer(), flashcard.getAnswer()) && Objects.equals(getName(), flashcard.getName()) && getDifficulty() == flashcard.getDifficulty() && Objects.equals(getTopic(), flashcard.getTopic());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getQuestion(), getAnswer(), getName(), getDifficulty(), getTopic());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }
}
