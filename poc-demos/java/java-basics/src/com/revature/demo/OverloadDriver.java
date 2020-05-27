package com.revature.demo;

import com.revature.demo.util.Overloader;

public class OverloadDriver {

    public static void main(String[] args) {

        Overloader overloader = new Overloader();
        overloader.method(1); // int
        overloader.method(1L); // long
        overloader.method(); // varargs
        overloader.method(1, 2, 3); // varargs
//        overloader.method(null); // ambiguous type
        overloader.method(new Integer(65)); // Integer
        overloader.method(3.14); // double
        overloader.method(3.14f); // float
        overloader.method(new Double(2.9)); // Double
        overloader.method(new Float(2.9)); // Float
        overloader.method(new Integer(4), new Integer(5)); // varargs with unboxing!

    }

}
