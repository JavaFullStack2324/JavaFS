package com.revature.models;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double grade;
    private String name;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinTable
    private List<Flashcard> cards;

    public Quiz() {
    }

    public Quiz(int id, double grade, String name, List<Flashcard> cards) {
        this.id = id;
        this.grade = grade;
        this.name = name;
        this.cards = cards;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", grade=" + grade +
                ", name='" + name + '\'' +
                ", cards=" + cards +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Quiz)) return false;
        Quiz quiz = (Quiz) o;
        return getId() == quiz.getId() && Double.compare(getGrade(), quiz.getGrade()) == 0 && Objects.equals(getName(), quiz.getName()) && Objects.equals(getCards(), quiz.getCards());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getGrade(), getName(), getCards());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Flashcard> getCards() {
        return cards;
    }

    public void setCards(List<Flashcard> cards) {
        this.cards = cards;
    }
}
