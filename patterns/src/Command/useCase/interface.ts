export interface ILight {
    on(): void,
    off(): void,
}

export interface ICommand {
    execute(): void
    unxecute(): void
}

