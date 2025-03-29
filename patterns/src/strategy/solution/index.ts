import { IDisplayStrategy, IQuackStrategy, IFlyStrategy } from './interface'
import { 
    DisplayNormalStrategy, DisplayGeometricStrategy,
    LoudQuackStrategy, SilenceQuackStrategy,
    StyleFlyingStrategy, BoringFlyingStrategy
} from './strategy'


// Strategy pattern is about prioritizing composition over inheritance
class Duck {
   constructor(
      private displayStrategy: IDisplayStrategy,
      private quackStrategy: IQuackStrategy,
      private flyStrategy: IFlyStrategy
   ){ }

   display(){
      this.displayStrategy.display();
   }

   quack(){
      this.quackStrategy.quack();
   }

   fly(){
      this.flyStrategy.fly();
   }
}

const mountainDuck = new Duck(
   new DisplayGeometricStrategy(),
   new LoudQuackStrategy(),
   new StyleFlyingStrategy()
);

const normalDuck = new Duck(
   new DisplayNormalStrategy(),
   new SilenceQuackStrategy(),
   new BoringFlyingStrategy()
);

mountainDuck.quack();
normalDuck.fly();
