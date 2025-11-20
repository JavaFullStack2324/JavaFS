package org.example;

import org.example.daos.BookDao;
import org.example.models.Author;
import org.example.models.Book;

import java.util.List;

public class Launcher {
    private static BookDao bDAO = new BookDao();
    public static void main(String[] args) {


        Author a1 = new Author("Will", "Terry", 1998);
        Author a2 = new Author("Will", "Terry", 1889);
        Book b1 = new Book("CoolBook", "Fantasy", a1);
        Book b2 = new Book("OldBook", "NonFiction", a2);

        bDAO.insertBook(b1);
        bDAO.insertBook(b2);


        Book b3= bDAO.selectBookById(1);
        System.out.println(b3);
        b3.setGenre("new genre");
        bDAO.updateBook(b3);
        System.out.println(b3);


        List<Book> books = bDAO.findAllBooks();

        for(Book b: books){
            System.out.println(b);
        }
    }



}