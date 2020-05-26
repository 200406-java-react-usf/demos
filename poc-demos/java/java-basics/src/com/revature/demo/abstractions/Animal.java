package com.revature.demo.abstractions;

import java.util.Objects;

/*
    Abstract classes:
        - cannot be directly instantiated
        - has 0 -> N unimplemented method stubs (abstract methods)
 */
public abstract class Animal {

    public int numberOfLives = 1;

    public Animal() {
        System.out.println("Animal constructor invoked!");
    }

    public Animal(int numberOfLives) {
        this.numberOfLives = numberOfLives;
    }

    public int getNumberOfLives() {
        return numberOfLives;
    }

    public abstract void makeSound();

    public void exist() {
        System.out.println("The animal exists...whatever that means.");
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return numberOfLives == animal.numberOfLives;
    }

    @Override
    public int hashCode() {
        return Objects.hash(numberOfLives);
    }

    @Override
    public String toString() {
        return "Animal{" +
                "numberOfLives=" + numberOfLives +
                '}';
    }

}
