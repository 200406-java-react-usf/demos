package com.revature.demo.encapsulation;

// the top-level public class of a file must be named exactly
// the same as the file itself
public class OuterClass {

    // nested class (instance-level)
    public class InnerClass {

    }

    // static nested classes (class-level)
    public static class InnerStaticClass {

    }

    public void someMethod() {

        // local classes
        class LocalClass {

        }

        // anonymous class (inline implementation of an interface)
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
               // Do something
            }
        });

        // Lambda expressions are sugar syntax for anonymous classes that implement
        // functional interfaces. You could say that a lambda expression is the inline
        // implementation of a functional interface's one and only abstract method.
        Thread t2 = new Thread(() -> {
            // do something
        });

    }

}

class OtherClass {

}
