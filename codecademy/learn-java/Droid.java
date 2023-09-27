public class Droid {
  int batteryLevel;
  String name;

  public Droid(String droidName) {
    name = droidName;
    batteryLevel = 100;
  }

  public String toString() {
    return "Hello, I'm the droid: " + name;
  }

  public void performTask(String task) {
    System.out.println(name + " is performing task: " + task);
    batteryLevel -= 10;
  }

  public void energyReport() {
    System.out.println(name + "'s battery level is " + batteryLevel);
  }

  public void energyTransfer(Droid otherDroid) {
    otherDroid.batteryLevel -= 10;
    batteryLevel += 10;
  }

  public static void main(String[] args) {
    Droid codey = new Droid("Codey");
    Droid notCodey = new Droid("Not Codey");
    System.out.println(codey);
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.performTask("dancing");
    codey.energyReport();
    codey.energyTransfer(notCodey);
    codey.energyReport();
    notCodey.energyReport();
  }
}