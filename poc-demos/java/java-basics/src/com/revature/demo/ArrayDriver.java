package com.revature.demo;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayDriver {

    public static void main(String[] args) {

        int[] intArray = new int[10];
        System.out.println(intArray); // String representation of an array
        System.out.println(intArray.length);

        intArray[0] = 93;
        intArray[intArray.length - 1] = 42;
        printValues(intArray);

        // instantiation using an array literal
        String[] myStrings = { "this", "is", "an", "array", new String("literal") };
        printValues(myStrings);
        System.out.println(Arrays.toString(myStrings));

//        intArray[10] = 100; // throws an ArrayIndexOutOfBoundsException

        int[] otherInts = Arrays.copyOf(intArray, intArray.length + 1);
        printValues(otherInts);

        int[] anotherArray = { 2, 3, new Integer(4) }; // unboxing
        Integer[] integerArray = { 123 }; // autoboxing

        // Java is pretty good at boxing
        System.out.println(new Integer(4) + new Integer(5));

        // Oh yeah, there's an Integer Pool...
        Integer i1 = -129;
        Integer i2 = -129;
        Integer i3 = 128;
        Integer i4 = 128;

        System.out.println(i1 == i2); // true
        System.out.println(i3 == i4); // false (the Integer Pool only stores values from -128 to +127)

        // You can make heterogenous arrays, but you probably shouldn't...
        Object[] randomStuff = { 12, "test", new ArrayList<Boolean>(), true, 4.3, new Float(3.14) };

        // dangerous, could possibly throw ClassCastException if we are not careful
        String test = (String) randomStuff[1];

    }

    private static void printValues(int[] arr) {
        // traditional for-loop
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Value at index position" + i + ": " + arr[i]);
        }
    }

    private static void printValues(String[] arr) {
        // for-each loop (aka "enhanced for loop") - can only be used with iterable constructs
        for (String s : arr) {
            System.out.println(s);
        }
    }

}
