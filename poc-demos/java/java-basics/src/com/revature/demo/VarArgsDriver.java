package com.revature.demo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class VarArgsDriver {

    public static void main(String[] args) {
        varArgs("test");
        varArgs("test2", 1);
        varArgs("test3", 1, 2, 3, 4, 5);

        int[][] twoDimArr = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        show(twoDimArr);

        int[] tester = { 123, 456, 789 };
        varArgs("test4", tester); // you can also just pass in an array where varargs are expected
    }

    // Variable arguments must be the LAST parameter
    public static void varArgs(String myString, int... values) {

        System.out.println(myString);

        for (int i : values) {
            System.out.println(i);
        }

    }

    public static void show(int[]... multiDimArr) {
        for (int[] arr : multiDimArr) {
            for(int i : arr) {
                System.out.println(i);
            }
        }
    }


}
