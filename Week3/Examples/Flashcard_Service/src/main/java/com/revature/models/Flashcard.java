package com.revature.models;

import jakarta.persistence.*;

@Entity
public class Flashcard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String question;
    private String answer;
    private String name;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "topic_id")
    private Topic topic;

    public Flashcard() {
    }

    public Flashcard(int id, String question, String answer, String name, Difficulty difficulty) {
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
        if (!(o instanceof Flashcard flashcard)) return false;

        if (id != flashcard.id) return false;
        if (!question.equals(flashcard.question)) return false;
        if (!answer.equals(flashcard.answer)) return false;
        if (!name.equals(flashcard.name)) return false;
        if (difficulty != flashcard.difficulty) return false;
        return topic.equals(flashcard.topic);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + question.hashCode();
        result = 31 * result + answer.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + difficulty.hashCode();
        result = 31 * result + topic.hashCode();
        return result;
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
