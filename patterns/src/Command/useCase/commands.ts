import { ICommand, ILight } from "./interface";

export class LightOnCommand implements ICommand {
    constructor(
        private light: ILight
    ){ }

    execute(): void {
        this.light.on();
    }

    unxecute(): void {
        this.light.off();
    }
}

export class LightOffCommand implements ICommand {
    constructor(
        private light: ILight
    ){ }

    execute(): void {
        this.light.off();
    }

    unxecute(): void {
        this.light.on();
    }
}

