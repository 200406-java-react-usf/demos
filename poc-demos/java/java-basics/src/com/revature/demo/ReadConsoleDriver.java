package com.revature.demo;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ReadConsoleDriver {

    public static void main(String[] args) {

        System.out.println("Printing to the console is easy enough.");
        System.out.printf("The printf method is kinda like %s literals \n", "template");

        //-----------------------------------------------------------------------

        // Reading from the console using Scanner
        try {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter your name: ");
            String name = scanner.next();
            System.out.print("Enter age: ");
            int age = scanner.nextInt();
            System.out.printf("Your name is %s and you are %d years old", name, age);
        } catch (InputMismatchException ime) {
            System.out.println("Invalid value provided.");
            main(args);
        }
    }

}
