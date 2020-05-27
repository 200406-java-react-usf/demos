package com.revature.demo;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileDriver {

    public static void main(String[] args) {

        File myFile = new File("resources/write-demo.txt");
        System.out.println("Does the file already exist? :: " + myFile.exists());

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(myFile, true))) {

            String content = "Write this string to my file \n";
            System.out.println("Writing contents to file " + myFile.getName());

            bw.write(content);
//            bw.write("This will overwrite my file");

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
