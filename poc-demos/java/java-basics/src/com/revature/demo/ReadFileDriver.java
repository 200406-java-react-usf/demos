package com.revature.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileDriver {

    public static void main(String[] args) {
        // read happy-text.txt and print its contents to the console
        try {
            File myFile = new File("resources/happy-text.txt");
            Scanner myScanner = new Scanner(myFile);
            while (myScanner.hasNextLine()) {
                String data = myScanner.nextLine();
                System.out.println(data);
            }
            myScanner.close();

        } catch (FileNotFoundException e) {
            System.out.println("An error has occurred.");
            e.printStackTrace();
        }
    }
}