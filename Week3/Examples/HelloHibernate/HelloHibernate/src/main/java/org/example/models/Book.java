package org.example.models;


import com.google.common.base.Objects;
import jakarta.persistence.*;

@Entity
@Table(name="books") //This isn't necessary, but without it hibernate would call the table "Book" not "books"
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This makes the PK a serial
    @Column(name = "book_id")
    private int id;

    @Column(name="book_title", nullable = false) //we set a not null constrain here - books need title!
    private String title;

    @Column(name = "book_genre")
    private String genre;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="author_id")
    private Author author;

    //FetchType defined WHEN hibernate will go to the database to fetch an associated object.
    /*Lazy - Hibernate will give a proxy object instead of going to the database until
    * your code actually calls for the object. This only works while the object is persistent.
    * Once it becomes detached there is no longer a Session to replace the proxy
    * Eager - returns the dependent object immediately with no proxy. This is generally less error prone.
    * Why is it less error prone? For starters if you close a Session, proxy objects aren't available anymore*/

    //Cascade defines how the queries will maintain referential integrity.
    //So in the case of CascadeType.ALL, all changes made will be cascaded to the dependent entities.

    //BTW, a proxy object is an "empty" object that gets filled only when it's needed
    //Think of it as a "lightweight placeholder"

    //since Author can be null in this case, and since FetchType is set to LAZY...
    //the author field will have a proxy object that will be filled IF there's an author associated with the book.


    public Book() {
    }

    public Book(String title, String genre, Author author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    public Book(int id, String title, String genre, Author author) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", genre='" + genre + '\'' +
                ", author=" + author +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id && Objects.equal(title, book.title) && Objects.equal(genre, book.genre) && Objects.equal(author, book.author);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id, title, genre, author);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}
