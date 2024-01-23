// calculates monthly balance of a car loan
public class CarLoan {
  public static void main(String[] args) {
    int carLoan = 10000;
    int loanLength = 3;
    int interestRate = 5;
    int downPayment = 2000;

    if (loanLength <= 0 || interestRate <= 0) {
      System.out.println("Invalid loan");
    } else if (downPayment >= carLoan) {
      System.out.println("Unnecessary loan");
    } else {
      int remainingBalance = carLoan - downPayment;
      int months = loanLength * 12;
      int monthlyBalance = remainingBalance / months;
      int interest = (monthlyBalance * interestRate) / 100;
      int monthlyPayment = monthlyBalance * interest;
      System.out.print("Monthly payment: ");
      System.out.println(monthlyPayment);
    }
  }
}