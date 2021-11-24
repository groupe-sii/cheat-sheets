# patron de conception Structural
## Facade
Cache la complexité métier en fournissant une interface simplifié

```Java
public class Computer {
  public Computer (){
  }

  void addRAM(int RAM){}
  void addKeyboard(String keyboard){}
  void addMouse(String mouse){} 
}
public class Technician {
  public Technician(){
  }
  String[] compareKeyboard(){}
  String chooseBestKeyboard(String[] keyboards){}
  String chooseBestMouse(){}
}

public class StoreFacade {
  Computer computer;
  Technician technician;

  public StoreFacade(){
    this.technician = new Technician();
  }

  public Computer buildPerfectPC{
      Computer perfectPC = new Computer();
      String[] listOfKbds = this.technician.compareKeyboard();
      String theKbd = this.technician.chooseBestKeyboard(listOfKbds);
      String theMouse = this.technician.chooseBestMouse();
      int nbOfRAM = 16;

      perfectPC.addRAM(nbOfRAM);
      perfectPC.addKeyboard(theKeyboard);
      perfectPC.addMouse(theMouse);

      return perfectPC;
  }
  
}
public class DemoFacade {
    public static void main(String[] args) {
      StoreFacade storeFacade = new StoreFacade();
      storeFacade.buildPerfectPC();
    }
}
```