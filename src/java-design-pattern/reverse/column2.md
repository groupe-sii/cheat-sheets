# Patron de conception Comportemental

## Strategy
Définition d'une famille d'algorithme dans des classes séparées pour les rendre interchangeable
```Java
public interface Strategy {
   public int doOperation(int num1, int num2);
}

public class OperationAdd implements Strategy{
   @Override
   public int doOperation(int num1, int num2) {
      return num1 + num2;
   }
}

public class OperationSubstract implements Strategy{
   @Override
   public int doOperation(int num1, int num2) {
      return num1 - num2;
   }
}

public class Context {
   private Strategy strategy;

   public Context(Strategy strategy){
      this.strategy = strategy;
   }

   public int executeStrategy(int num1, int num2){
      return strategy.doOperation(num1, num2);
   }
}

public class StrategyPatternDemo {
   public static void main(String[] args) {
      Context context = new Context(new OperationAdd());		
      context.executeStrategy(10, 5); // 15

      context = new Context(new OperationSubstract());		
      context.executeStrategy(10, 5); // 5

```
Exemple de librairie qui utilise le patron de conception : Dans le JDK, Collections.sort() 