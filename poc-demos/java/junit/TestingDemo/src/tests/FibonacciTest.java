package tests;

import main.Fibonacci;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FibonacciTest {
    @Test
    public void nthElementShouldReturnNthElement(){
        Fibonacci test = new Fibonacci();

        assertEquals(0, test.nthElement(0));
        assertEquals(1,test.nthElement(1));
        assertEquals(1, test.nthElement(2));
        assertEquals(5, test.nthElement(5));
    }
}
