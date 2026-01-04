/*
Its about making two interfaces that are imcompatible, compatible
Adapter wraps something to adapt to a different interface
Takes as input multiple kinds of interfaces and output one interface
The intent is not changing original behavior
*/

interface ITarget {
    request(): void
}

class Client {
    request(): void {
        console.log('Making normal request')
    }
}

// Class to be adapted
class Adaptee {
    specificRequest(): void {
        console.log('Making specific request');
    }
}

class Adapter implements ITarget {
    constructor(
        private adaptee: Adaptee
    ){ }

    request(): void {
        this.adaptee.specificRequest();
    }
}

// Normal usage
const client = new Client();
client.request();

// Adapting similar behavior
const adaptee = new Adaptee();
const target = new Adapter(adaptee)
target.request();
