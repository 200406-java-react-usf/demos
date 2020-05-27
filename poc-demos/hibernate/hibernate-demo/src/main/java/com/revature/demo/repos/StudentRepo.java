package com.revature.demo.repos;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class StudentRepo {

    private final SessionFactory sessionFactory = HibernateConfig.buildSessionFactory();

    public Student addStudent(Student student) {

        Transaction tx = null;
        try (Session session = sessionFactory.getCurrentSession()) {

            tx = session.beginTransaction();
            session.save(student);
            tx.commit();


        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }

        return student;

    }

    public Student getStudentById_get(int id) {

        Student retrievedStudent = null;
        Transaction tx = null; // not really necessary since we aren't manipulating data
        try (Session session = sessionFactory.getCurrentSession()) {

            tx = session.beginTransaction(); // regardless, you will always need to begin a transaction

            // .get() returns the actual persistent object associated with the DB record (eagerly-fetched)
            retrievedStudent = session.get(Student.class, id); // return null if not found


        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }

        return retrievedStudent;

    }

    public Student loadStudentById(int id) {

        Student retrievedStudent = null;
        try (Session session = sessionFactory.getCurrentSession()) {

            session.beginTransaction();

            /*
                .load() returns a proxy object, which is converted into a persistent object
                when any method on the proxy is invoked (lazily-fetched)
             */
            retrievedStudent = session.load(Student.class, id); // throws ObjectNotFoundException if not found

        } catch (Exception e) {
            e.printStackTrace();
        }

        return retrievedStudent;

    }
}

/*
        Transaction tx = null;
        try (Session session = sessionFactory.getCurrentSession()) {

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }
 */