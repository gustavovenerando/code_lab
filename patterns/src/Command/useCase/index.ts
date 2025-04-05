import { LightOffCommand, LightOnCommand } from "./commands";
import { ICommand, ILight } from "./interface";

/*
Is a behavioral pattern in which an object is used to encapsulate
all information needed to perform an action or trigger an event at a later time
*/

/*
Example
Remote controller that commands lights
*/

// Receiver
class Light implements ILight {
    on() {
        console.log('Turning lights on!');
    }

    off() {
        console.log('Turning lights off!');
    }
}

// Invoker
class RemoteController {
    constructor(
        private on: ICommand,
        private off: ICommand
    ){ }

    public clickOn() {
        this.on.execute();
    }

    public clickOff() {
        this.off.execute();
    }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const lightRemoteController = new RemoteController(lightOnCommand, lightOffCommand);
lightRemoteController.clickOn();

