package org.example.daos;

import org.example.models.Author;
import org.example.utils.HibernateUtil;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.example.models.Book;

public class BookDAOTest {
    
    private static BookDao dao;
    
    @BeforeAll 
    static void setup(){
        HibernateUtil.getSession();
        dao = new BookDao();
    }
    
    @Test
    void testInsertBook(){
        Book b = new Book();
        Author a = new Author("Test Author","Author Test",1000);
        b.setTitle("JUnit Test Book");

        
        dao.insertBook(b);

        Assertions.assertNotEquals(0,b.getId(),"ID should be generated after insert");
        
    }

    @Test
    void testSelectBookById(){
        Book b = dao.selectBookById(1);

        Assertions.assertNotNull(b);
        Assertions.assertEquals("JUnit Test Book", b.getTitle());
    }




}
