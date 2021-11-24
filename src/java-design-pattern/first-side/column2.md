# Patron de conception Créateur

## Singleton
 Avoir une seule instance de l'objet toujours appelée
```Java
public class MySingleton {
  private static MySingleton instance;
  private MySingleton(){}

  public final static MySingleton getInstance(){
      if (instance == null){
          return new MySingleton();
      }
      return instance;
  }  
}
```
## Factory
Exposer une interface unique pour créer des objets de la même famille 
```Java
public interface Animal {
    void sound();
}
public class Dog implements Animal {
    @Override
    public void sound(){
        System.out.println("bark");
    }
}
public class Cat implements Animal {
    @Override
    public void sound(){
        System.out.println("meow");
    }
}
public class AnimalFactory{
    Animal getAnimal(String animal){
        return animal.equalsIgnoreCase("DOG")? 
            new Dog(): new Cat();
    }
}
public class DemoFactory {
    AnimalFactory factory = new AnimalFactory();
    public static void main(String[] args) {
        Animal animal = factory.getAnimal("DOG");
        Animal animal2 = factory.getAnimal("CAT");
        animal.sound(); // bark
        animal2.sound(); // meow
    }
}
```