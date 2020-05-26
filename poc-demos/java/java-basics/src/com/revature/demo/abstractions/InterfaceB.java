package com.revature.demo.abstractions;

import java.io.Serializable;

/*
    Interfaces can extend as many other interfaces as needed. However, they cannot
    inherit from a class or enum at all.
 */
// Remember: "Like extends Like"
public interface InterfaceB extends InterfaceA, Serializable {

    void doSomething();

    default void doSomethingByDefault() {
        System.out.println("InterfaceB is doing something else");
    }

}
