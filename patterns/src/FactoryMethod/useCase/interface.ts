export interface IAsteroid {
    display(): void,
    colide(): void
}

export interface IAsteroidFactory {
    createAsteroid(): IAsteroid,
}


export interface IAnimal {
    eat(food: string): void,
    drink(liquid: string): void,
    sleep(time: number): void
}

export interface IAnimalFactory {
    createAnimal(): IAnimal
}
