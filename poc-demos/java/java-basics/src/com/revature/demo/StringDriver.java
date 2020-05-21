package com.revature.demo;

public class StringDriver {

    public static void main(String[] args) {

        String s1 = "North";
        String s2 = "North";
        String s3 = new String("North");
        String s4 = null;

        System.out.println(s1 == s2); // true (reference equivalency)
        System.out.println(s1 == s3); // false (reference equivalency)
        System.out.println(s1.equals(s3)); // true (value equivalency)

        /*
            Interning

                String interning is the act of moving a String object - which
                exists outside of the String Pool - and "interning" or moving
                it into the String Pool.
         */
        s3 = s3.intern();
        System.out.println(s1 == s3); // true

        /*
            String Rules

                1. Strings are immutable (their initial value cannot be changed)

                2. Strings created using String literals ("") are made w/in the String Pool

                3. String created using the String constructor, String API methods, or
                   by concatenation are always created OUTSIDE of the String Pool.
         */
        s2.concat("west");
        System.out.println(s2);

        s2 = s2.concat("west"); // s2 == "Northwest"
        System.out.println(s2);

        String s5 = "Northwest";
        System.out.println(s2 == s5); // false

        String s6 = s1 + "west";
        System.out.println(s2 == s6); //
        System.out.println(s2.equals(s6));

        //------------------------------------------------------------------

        /*

            StringBuilder
                - mutable
                - not thread-safe

            StringBuffer
                - mutable
                - thread-safe

         */

//        StringBuilder sb1 = "Does not work!";
        StringBuilder sb2 = new StringBuilder("Hello");
        StringBuilder sb3 = new StringBuilder("Hello");

        StringBuffer sbuff;

        System.out.println(sb2 == sb3); // false
        System.out.println(sb2.equals(sb3)); // false (.equals is not overridden in SB implementation
        System.out.println(sb2 + " " + sb3);
    }

}
