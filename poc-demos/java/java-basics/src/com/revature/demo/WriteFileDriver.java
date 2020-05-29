package com.revature.demo;

<<<<<<< HEAD
=======
import java.io.BufferedWriter;
import java.io.File;
>>>>>>> eafcc1645c7e6ea3bd7e8dd24df2ccc3919c8513
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileDriver {

    public static void main(String[] args) {
<<<<<<< HEAD
        // write to a file (which may or may not exist) and fill it with some artisinal filler text
        try {
            FileWriter myWriter = new FileWriter ("artisinal-text.txt");
            myWriter.write( "Slow-carb authentic hashtag pop-up copper mug. Polaroid kombucha sustainable, taxidermy trust fund roof party paleo vexillologist tattooed skateboard la croix typewriter health goth brunch pabst. Biodiesel mumblecore poutine irony cliche pop-up. Jean shorts stumptown aesthetic kombucha, pinterest church-key craft beer forage humblebrag godard twee banh mi keytar bespoke tbh.\"");
            myWriter.close();
        } catch (IOException e) {
            System.out.println("An error has occurred.");
            e.printStackTrace();
        }
    }
=======

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

>>>>>>> eafcc1645c7e6ea3bd7e8dd24df2ccc3919c8513
}
