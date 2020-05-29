package tests;
import main.Calculator;
import org.junit.*;

import static org.junit.Assert.*;

public class CalculatorTest {
    @Test
    public void addShouldAdd(){
        //Arrange
        Calculator test = new Calculator();
        //execute
        //assert
        assertEquals( 4.0, test.add(2,2), 0);
    }

    @Test
    public void multiplyShouldMultiply(){
        Calculator test = new Calculator();
        assertEquals(4.0, test.multiply(2,2), 0);
    }
    @Test(expected = ArithmeticException.class)
    public void divideShouldThrowDivZeroException(){
        Calculator test = new Calculator();

            test.divide(1,0);


    }
}
