// When using inheritance, sharing similar behaviours horinzontally is complicated (need to use multiple inheritance)

import { IDuck } from './interface';

class Duck implements IDuck  {
    quack() {
        throw new Error('Not implemented');
    }

    fly() {
        throw new Error('Not implemented');
    }
}

class CityDuck extends Duck {
    override quack() {
        console.log('Loud Quack');
    }

    override fly() {
        console.log('High fly')
    }
}

const cduck = new CityDuck();
cduck.fly();


/*
Horizontal inheritance cenario:
- Montain and Cloud Duck have same fly behavior
- Therefore, new class is created to avoid code duplication
*/

class DuckWithSpecificFly extends Duck {
    override fly(){
        console.log('Specific fly behavior');
    }
}

class MontainDuck extends DuckWithSpecificFly {
    override quack(){
        console.log('Loud Quack');
    }
}

class CloudDuck extends DuckWithSpecificFly {
    override quack(){
        console.log('Silent Quack');
    }
}


const md = new MontainDuck();
const cd = new CloudDuck();

md.fly();
cd.fly();
