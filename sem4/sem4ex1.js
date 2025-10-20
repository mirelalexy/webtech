class Stream {
    #value;
    #nextValue;
    constructor(value, nextValue) {
        this.#value = value;
        this.#nextValue = nextValue;
    }

    get next() {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }
}

class NextStream extends Stream {
    constructor(value) {
        super(value, value => value + 2);
    }
}

const initial = new NextStream(2);

for (let i = 0; i < 10; i++) {
    console.log(`sir[${i}] = ${initial.next}`);
}