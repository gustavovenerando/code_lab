enum Pattern {
    STRATEGY = 'Strategy',
    FACTORYMETHOD = 'FactoryMethod',
    ABSTRACTFACTORY = 'AbstractFactory',
    COMMAND = 'Command',
    ADAPTER = 'Adapter',
}

enum Type {
    PROBLEM = 'problem',
    USECASE = 'useCase',
    BOTH = 'both'
}

function main(pattern: Pattern, type: Type, fileName: string): void{
    if (type === Type.BOTH) {
        import(`./${pattern}/${Type.PROBLEM}/index.ts`)
        import(`./${pattern}/${Type.USECASE}/index.ts`)
    } else {
        import(`./${pattern}/${type}/${fileName}.ts`)
    }
}

main(Pattern.ADAPTER, Type.USECASE, 'example2');
