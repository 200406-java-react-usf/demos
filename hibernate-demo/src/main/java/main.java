import java.util.List;

import entity.User;
import org.hibernate.Session;
import org.hibernate.Transaction;
import entity.User;
import util.HibernateUtil;

class App {
    public static void main(String[] args) {
        User user = new User("framesh", "Ramesh", "Fadatare", "rameshfadatare@revature.com");
        User user1 = new User("jcena", "John", "Cena", "john@revature.com");
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // save the student objects
            session.save(user);
            session.save(user1);
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            List < User > users = session.createQuery("from User", User.class).list();
            users.forEach(u -> System.out.println(u.getFirstName()));
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }
}