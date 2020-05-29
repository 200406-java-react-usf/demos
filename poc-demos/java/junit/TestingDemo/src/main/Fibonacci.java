package main;

public class Fibonacci {

    public int nthElement(int input){
        int a = 0;
        int b = 1;
        int c = 0;
        if (input == 0) return 0;
        if (input == 1) return 1;
        for(int i = 1; i < input; i++){
            c = a + b;
            a = b;
            b = c;

        }
        return c;
    }
}
