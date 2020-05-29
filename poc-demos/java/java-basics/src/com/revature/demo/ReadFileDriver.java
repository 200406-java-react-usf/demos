package com.revature.demo;

<<<<<<< HEAD
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

=======
>>>>>>> eafcc1645c7e6ea3bd7e8dd24df2ccc3919c8513
public class ReadFileDriver {

    public static void main(String[] args) {
        // read happy-text.txt and print its contents to the console
<<<<<<< HEAD
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
=======
    }
}
>>>>>>> eafcc1645c7e6ea3bd7e8dd24df2ccc3919c8513
