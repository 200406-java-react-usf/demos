package com.revature.demo.models;

import java.util.Objects;

// this model will be mapped to a table, named instructors, by Hibernate

public class Instructor {

    // this is the PK
    private int id;

    // is a column, should not be null
    private String firstName;

    // is a column, should not be null
    private String lastName;

    // is a column, should not be null and must be unique
    private String email;

    // should have a reference to associated details record
    private InstructorDetail details;

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

    public Instructor(int id, String firstName, String lastName, String email, InstructorDetail details) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.details = details;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Instructor that = (Instructor) o;
        return id == that.id &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(details, that.details);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, details);
    }

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
