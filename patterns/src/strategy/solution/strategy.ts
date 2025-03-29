import { IDisplayStrategy, IFlyStrategy, IQuackStrategy } from "./interface";


// Display
export class DisplayNormalStrategy implements IDisplayStrategy{
   display(){
      console.log("Displaying normally.");
   }
}

export class DisplayGeometricStrategy implements IDisplayStrategy{
   display(){
      console.log("Displaying geometrically.");
   }
}

// Quack
export class LoudQuackStrategy implements IQuackStrategy{
   quack(){
      console.log("QUUUUUAAAACK!!!!");
   }
}

export class SilenceQuackStrategy implements IQuackStrategy{
   quack(){
      console.log("quack xdd.");
   }
}

// Fly
export class StyleFlyingStrategy implements IFlyStrategy{
   fly(){
      console.log("Vuuuummm")
   }
}

export class BoringFlyingStrategy implements IFlyStrategy{
   fly(){
      console.log("Meh")
   }
}

