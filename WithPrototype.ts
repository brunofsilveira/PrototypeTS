interface Prototype1 {
    clone(): Prototype1
}

interface Prototype2 {
    criar(): string
}

class Class1 implements Prototype1, Prototype2 {
    criar(): string {
        throw new Error("Method not implemented.");
    }
    clone(): Prototype1 {
        throw new Error("Method not implemented.");
    }
}

class Class2 implements Prototype1 {
    clone(): Prototype1 {
        throw new Error("Method not implemented.");
    }
}
