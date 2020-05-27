package com.revature.demo;

import java.io.FileWriter;
import java.io.IOException;

public class WriteFileDriver {

    public static void main(String[] args) {
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
}
