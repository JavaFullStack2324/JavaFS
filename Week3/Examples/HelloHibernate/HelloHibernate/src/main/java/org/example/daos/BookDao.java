package org.example.daos;

import org.example.models.Book;
import org.example.utils.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

public class BookDao {
    public void insertBook(Book book){
        Session ses = HibernateUtil.getSession();
        ses.beginTransaction();
        ses.persist(book);
        ses.getTransaction().commit();

        HibernateUtil.closeSession();
    }
    public List<Book> findAllBooks() {

        Session ses = HibernateUtil.getSession();

        //Using HQL! Hibernate Query Language. Remember it references the Java Class.
        //e.g. "Book" in our models package, instead of "books" in our database entities
        List<Book> bookList = ses.createQuery("FROM Book").list();
        //BTW, this warning is complaining about the version type, it wants me to specify a generic but it's not necessary

        HibernateUtil.closeSession();

        return bookList;


    }

    public Book selectBookById(int id){
        Session ses = HibernateUtil.getSession();
        Book book = ses.find(Book.class, id);

        HibernateUtil.closeSession();

        return book;
    }

    public void updateBook(Book book){
        Session ses = HibernateUtil.getSession();
        ses.beginTransaction();
        ses.merge(book); //will update the entire book
        ses.getTransaction().commit();

        HibernateUtil.closeSession();


    }
}
