/*
Using interface implementation to use Dependency Inversion
This way, RoundHole and the Adapter works for any class that implements RoundPegI
Dependency from abstration, not concrete classes

As the adapter is only adapting the concrete class SquarePeg,
it dont need to use the interface
*/

interface RoundPegI {
    getRadius(): number;
}

class RoundPeg implements RoundPegI{
    constructor(private radius: number) {}

    getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    constructor(private width: number) {}

    getWidth(): number {
        return this.width;
    }
}

class RoundHole {
    constructor(private radius: number) { }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPegI): boolean {
        return peg.getRadius() <= this.radius;
    }
}

class SquarePegAdapter implements RoundPegI {
    constructor(private peg: SquarePeg) {}

    getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}

const hole = new RoundHole(5);

const roundPeg = new RoundPeg(5);

const squarePeg = new SquarePeg(5);
const squarePegAdapter = new SquarePegAdapter(squarePeg);

console.log(`It fits the round peg? Response: ${hole.fits(roundPeg)}`);
console.log(`It fits the square peg? Response: ${hole.fits(squarePegAdapter)}`);
