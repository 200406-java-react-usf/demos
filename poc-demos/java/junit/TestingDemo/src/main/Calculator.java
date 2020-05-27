package main;

public class Calculator {

    //methods
    //add, subtract, multiply, divide

    public double add(double input1, double input2){
        return input1 + input2;
    }
    public double subtract(double input1, double input2){
        return input1 - input2;
    }
    public double multiply(double input1, double input2){
        return input1 * input2;
    }
    public int divide(int input1, int input2){
        try {
            return input1/input2;
        } catch (ArithmeticException ex){
            throw ex;
        }

    }
}
