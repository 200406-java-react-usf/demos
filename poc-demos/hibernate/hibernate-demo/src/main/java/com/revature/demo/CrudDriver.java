package com.revature.demo;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Student;
import com.revature.demo.repos.StudentRepo;
import org.hibernate.Session;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Optional;

public class CrudDriver {

    private final static StudentRepo studentRepo = new StudentRepo();

    public static void main(String[] args) {

        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            // Old logic used to verify a proper connection to DB
//            if (session == null) {
//                System.out.println("Could not establish connection to DB!");
//            } else {
//                System.out.println("Connection established!");
//            }

            addStudentDemo();
//            getStudentUsingGet();
//            getStudentUsingLoad();

//            getStudentByEmailUsingNamedNativeQuery();
//            updateStudentWithQuery();
//            updateStudentWithDirtyChecking();
//            deleteStudentById();

        }

    }

    public static void addStudentDemo() {
        // CREATE STUDENT DEMO
        Student student1 = new Student("Wezley", "Singleton", "ws@gmail.com");
        student1 = studentRepo.addStudent(student1);
        System.out.println(student1);
    }

    public static void getStudentUsingGet() {
        Student s = studentRepo.getStudentById_get(1);
        System.out.println(s);
    }

    public static void getStudentUsingLoad() {
        Student s = studentRepo.loadStudentById(1);

        // throws a LazyInitializationException since we are trying to init the proxy outside of a session
        System.out.println(s);
    }

    public static void getStudentByEmailUsingNamedNativeQuery() {
        Optional<Student> _s = studentRepo.getStudentByEmail("ws@gmail.com");
        _s.ifPresent(System.out::println);
    }

    public static void updateStudentWithQuery() {
        studentRepo.updateStudentEmail_withQuery(1, "wezley.singleton@revature.com");
        Student s = studentRepo.getStudentById_get(1);
        System.out.println(s);
    }

    public static void updateStudentWithDirtyChecking() {
        studentRepo.updateStudentEmail_withAutomaticDirtyChecking(1, "wezley.singleton@gmail.com");
        Student s = studentRepo.getStudentById_get(1);
        System.out.println(s);
    }

    public static void deleteStudentById() {
        studentRepo.deleteStudentById(1);
        Student s = studentRepo.getStudentById_get(1);
        System.out.println(s);
    }

    public static void criteriaQueryDemo() {

        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            session.beginTransaction();

            CriteriaBuilder queryBuilder = session.getCriteriaBuilder();
            CriteriaQuery<Student> criteriaQuery = queryBuilder.createQuery(Student.class);
            Root<Student> queryRoot = criteriaQuery.from(Student.class);
            criteriaQuery.select(queryRoot);
            criteriaQuery.where(
                    queryBuilder.equal(queryRoot.get("email"), "ws@gmail.com")
            );

            List<Student> students = session.createQuery(criteriaQuery).getResultList();
            students.forEach(System.out::println);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
