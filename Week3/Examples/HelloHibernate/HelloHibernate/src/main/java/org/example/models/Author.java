package org.example.models;


import com.google.common.base.Objects;
import jakarta.persistence.*;

@Entity
@Table(name="authors")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //will use auto-incremented value
    @Column(name = "author_id")
    private int id;

    private String firstName;
    private String lastName;
    private int yearBorn; //TODO make this a date later

    //boilerplate code below


    public Author() {
    }

    public Author(String firstName, String lastName, int yearBorn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBorn = yearBorn;
    }

    public Author(int id, String firstName, String lastName, int yearBorn) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBorn = yearBorn;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getYearBorn() {
        return yearBorn;
    }

    public void setYearBorn(int yearBorn) {
        this.yearBorn = yearBorn;
    }

    @Override
    public String toString() {
        return "Author{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", yearBorn=" + yearBorn +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Author author = (Author) o;
        return id == author.id && yearBorn == author.yearBorn && Objects.equal(firstName, author.firstName) && Objects.equal(lastName, author.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id, firstName, lastName, yearBorn);
    }
}
