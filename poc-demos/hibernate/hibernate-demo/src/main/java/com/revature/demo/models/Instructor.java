package com.revature.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

<<<<<<< HEAD
// this model will be mapped to a table, named instructors, by Hibernate

=======
@Entity
@Table(name="instructors")
>>>>>>> fa0b8953550b2d2ef492fff8320a15df852e246d
public class Instructor {

    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(nullable=false)
    private String firstName;

    @Column(nullable=false)
    private String lastName;

    @Column(nullable=false, unique=true)
    private String email;

    @JoinColumn
    @OneToOne(cascade=CascadeType.ALL)
    private InstructorDetail details;

    @OneToMany(mappedBy="instructor", fetch=FetchType.LAZY)
    private List<Course> courses;

    public Instructor() {
        super();
    }

    public Instructor(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Instructor(String firstName, String lastName, String email, InstructorDetail details) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.details = details;
    }

    public Instructor(String firstName, String lastName, String email, InstructorDetail details, List<Course> courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.details = details;
        this.courses = courses;
    }

    public Instructor(int id, String firstName, String lastName, String email, InstructorDetail details, List<Course> courses) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.details = details;
        this.courses = courses;
    }

    public int getId() {
        return id;
    }

    public Instructor setId(int id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public Instructor setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public Instructor setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Instructor setEmail(String email) {
        this.email = email;
        return this;
    }

    public InstructorDetail getDetails() {
        return details;
    }

    public Instructor setDetails(InstructorDetail details) {
        this.details = details;
        return this;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public Instructor setCourses(List<Course> courses) {
        this.courses = courses;
        return this;
    }

    public void addCourse(Course course) {
        if (courses == null) courses = new ArrayList<>();
        course.setInstructor(this);
        courses.add(course);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Instructor that = (Instructor) o;
        return id == that.id &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(details, that.details) &&
                Objects.equals(courses, that.courses);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, details, courses);
    }


    // We removed "courses" from this output to avoid circular references
    // Which would cause an Error
    @Override
    public String toString() {
        return "Instructor{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", details=" + details +
                '}';
    }
}
