enum Pattern {
    STRATEGY = 'Strategy',
    FACTORYMETHOD = 'FactoryMethod',
    ABSTRACTFACTORY = 'AbstractFactory',
    COMMAND = 'Command',
}

enum Type {
    PROBLEM = 'problem',
    USECASE = 'useCase',
    BOTH = 'both'
}

function main(pattern: Pattern, type: Type): void{
    if (type === Type.BOTH) {
        import(`./${pattern}/${Type.PROBLEM}/index.ts`)
        import(`./${pattern}/${Type.USECASE}/index.ts`)
    } else {
        import(`./${pattern}/${type}/index.ts`)
    }
}

main(Pattern.COMMAND, Type.USECASE);
