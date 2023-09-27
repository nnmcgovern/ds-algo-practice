/*
This is a calculator that take two numbers and can add, subtract, multiply, divide, or find the remainder after dividing the two numbers.
*/
public class Calculator {
  public Calculator() {

  }

  public int add(int a, int b) {
    return a + b;
  }

  public int subtract(int a, int b) {
    return a - b;
  }

  public int multiply(int a, int b) {
    return a * b;
  }

  public int divide(int a, int b) {
    return a / b;
  }

  public int modulo(int a, int b) {
    return a % b;
  }

  public static void main(String[] args) {
    Calculator myCalculator = new Calculator();
    System.out.println(myCalculator.add(5, 7));
    System.out.println(myCalculator.subtract(45, 11));
    System.out.println(myCalculator.multiply(9, 3));
    System.out.println(myCalculator.divide(45, 7));
    System.out.println(myCalculator.modulo(45, 7));
  }
}