package com.revature.demo.repos;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.jdbc.Expectation;
import org.hibernate.query.Query;

import java.util.List;

import javax.persistence.Query;
import java.util.Optional;

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
<<<<<<< HEAD

    public void getAllStudents() {

        Student retrievedStudents = null;
        List results = null;
        try (Session session = sessionFactory.getCurrentSession()) {
            session.beginTransaction();

            String hql = "from students";
            Query query = session.createQuery(hql);
            results = query.list();

        } catch (Exception e) {
            e.printStackTrace();
        }

//        return results;
        System.out.println(results);

    }
}
=======
>>>>>>> 1f2e5b3d013cd5ab143fdfdfeeef00755d20cbf8

    public Optional<Student> getStudentByEmail(String email) {

        Optional<Student> _retrievedStudent = Optional.empty();

        try (Session session = sessionFactory.getCurrentSession()) {

            session.beginTransaction();
            Query query = session.getNamedNativeQuery("getStudentByEmail");
            query.setParameter("email", email);
            _retrievedStudent =  Optional.of((Student) query.getSingleResult());

        } catch (Exception e) {
            e.printStackTrace();
        }

        return _retrievedStudent;

    }

    public boolean updateStudentEmail_withQuery(int id, String email) {

        Transaction tx = null;
        try (Session session = sessionFactory.getCurrentSession()) {

            tx = session.beginTransaction();

            // All the chaining <insert all the things meme here>
            session.createQuery("update Student s set s.email = :email where s.id = :id")
                                       .setParameter("email", email)
                                       .setParameter("id", id)
                                       .executeUpdate();
            tx.commit();

            return true;

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }

        return false;

    }

    public boolean updateStudentEmail_withAutomaticDirtyChecking(int id, String email) {

        Transaction tx = null;
        try (Session session = sessionFactory.getCurrentSession()) {

            tx = session.beginTransaction();

            Student s = session.get(Student.class, id);
            System.out.println("Before update: " + s);
            s.setEmail(email);

            tx.commit();
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }

        return false;

    }

    public boolean deleteStudentById(int id) {

        Transaction tx = null;
        try (Session session = sessionFactory.getCurrentSession()) {

            tx = session.beginTransaction();

            Student s = session.load(Student.class, id);
            session.delete(s);

            tx.commit();
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }

        return false;

    }

}
