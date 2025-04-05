/*
Facade pattern simplifies the interactions between different classes
Single Responsibility Principle leads to lots of classes, which may result in complex dependencies.
The facade pattern simplifies complex system wiring in highly decoupled systems.
It allows clients to interact with a simplified interface instead of multiple complex pieces.
Clients will interact with a facade, that handles this complex logic
It follows the Principle of Least Knowledge ---> reduce coupling
*/

class A {
    doX(){
        console.log('Doing X')
    }
}

class B {
    constructor(
        public a: A
    ){ }

    doY(){
        this.a.doX();
        // Doing something else
        console.log('Doing Y')
    }
}

class C {
    doZ(){
        console.log('Doing Z')
    }
}

class Facade {
    constructor(){}

    do() {
        const a = new A();
        const b = new B(a);
        b.doY();

        const c = new C();
        c.doZ();
    }
}

const facade = new Facade();
facade.do();

