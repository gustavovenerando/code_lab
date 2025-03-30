enum Pattern {
    STRATEGY = 'strategy',
}

enum Type {
    PROBLEM = 'problem',
    SOLUTION = 'solution',
    BOTH = 'both'
}

function main(pattern: Pattern, type: Type): void{
    if (type === Type.BOTH) {
        import(`./${pattern}/${Type.PROBLEM}/index.ts`)
        import(`./${pattern}/${Type.SOLUTION}/index.ts`)
    } else {
        import(`./${pattern}/${type}/index.ts`)
    }
}

main(Pattern.STRATEGY, Type.PROBLEM);

