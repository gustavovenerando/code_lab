import { 
    IAsteroid, IAsteroidFactory,
    IAnimal, IAnimalFactory
} from "./interface";

/*
- Used when need to abstract creation logic
- Used when we dont know what concreate instance to create, 
  the logic to creation will be inside the method. The decision will be made in runtime.
*/

/*
Example 1 
Randomizing Animal creation
*/

class Animal implements IAnimal{
    constructor(
        public category: string,
        public race: string,
    ) { }

    display() {
        console.log(`Animal is a ${this.category} of race ${this.race}`)
    }

    eat(food: string) {
        console.log(`Eating ${food}`);
    }

    drink(liquid: string) {
        console.log(`Drinking ${liquid}`);
    }

    sleep(time: number) {
        console.log(`Sleeping for ${time} hours`);
    }

}

class RandomAnimalFactory implements IAnimalFactory {
    createAnimal(): IAnimal {
        return this.creationLogic();
    }

    private creationLogic(): IAnimal {
        // Random creation logic
        const randomCategory = 'dog';
        const randomRace = 'husky';

        return new Animal(randomCategory, randomRace);
    }
}

const randomAnimalFactory = new RandomAnimalFactory();

const randomAnimal = randomAnimalFactory.createAnimal();
randomAnimal.eat('papaya');



/*
Example 2 
Asteroid creation for a spaceship game
*/

class Asteroid implements IAsteroid{
    public exploded: boolean;

    constructor(
        private x: number,
        private y: number,
        private size: number,
        private speed: number
    ){
        this.exploded = false;
    }

    public display(): void {
        console.log(
            `Displaying asteroid at position ${this.x}, ${this.y} - `,
            `Size: ${this.size} - `,
            `Speed: ${this.speed} - `
        );
    }

    public colide(): void {
        console.log(
            `Coliding asteroids`
        );
        this.exploded = true;
    }
}

class AsteroidFactory implements IAsteroidFactory {
    private baseSize: number;
    private baseSpeed: number;
    private minPos: number;
    private maxPos: number;

    constructor(
        private currLevel: number,
    ){
        this.baseSize = 5,
        this.baseSpeed = 1,
        this.minPos = 1,
        this.maxPos = 10
    }

    public createAsteroid(): IAsteroid {
        return this.creationLogic();
    }

    private creationLogic(): IAsteroid {
        const size = this.currLevel * this.baseSize;
        const speed = this.currLevel * this.baseSpeed;
        const xPosition = this.randomIntNum();
        const yPosition = this.randomIntNum();

        return new Asteroid(xPosition, yPosition, size, speed);
    }

    private randomIntNum(): number {
        const minCeiled = Math.ceil(this.minPos);
        const maxFloored = Math.floor(this.maxPos);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
}

const levelOneAsteroidFactory = new AsteroidFactory(1);

const levelOneAsteroid1 = levelOneAsteroidFactory.createAsteroid();
const levelOneAsteroid2 = levelOneAsteroidFactory.createAsteroid();

levelOneAsteroid1.display();
levelOneAsteroid2.display();

const levelTwoAsteroidFactory = new AsteroidFactory(2);

const levelTwoAsteroid1 = levelTwoAsteroidFactory.createAsteroid();
levelTwoAsteroid1.display();



