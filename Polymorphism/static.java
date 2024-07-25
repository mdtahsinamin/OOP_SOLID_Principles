import java.utli.ArrayList
import java.utli.List;

class Utility {
// Method overloading 
  static int getLength(List arr) {
    return arr.size();
  }
  static int getLength(String str) {
    return str.length();
  }
}

class Example {
  public static void main(String[] args){
    List <String> list = new ArrayList();

    list.add("Hello");
    list.add("world");

    Utility.getLength(list);  // different behavior korbe k
    // compile time buja jabe
    Utility.getLength("Hello");
  }
}