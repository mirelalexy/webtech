// exemplu
const sampleString = "the quick brown fox jumps over the lazy dog"

const getCounts = (text) => {
    const words = text.split(" ");
    const result = {}
    for (let word of words) {
        if (word in result) {
            result[word]++
        } else {
            result[word] = 1;
        }
    }
    for (let word in result) {
        result[word] /= words.length
    }

    return result
}

console.log(getCounts(sampleString))

// exercitiu
const getLetterCount= (text) => {
    const letters = text.split('');
    const result = {}
    let total = 0;

    for (let char of letters) {
        if (char !== ' ') { 
            if (char in result) {
                result[char]++;
            } else {
                result[char] = 1;
            }
            total++;
        }
    }

    for (let char in result) {
        result[char] /= total;
    }

    return result
}

console.log(getLetterCount("ana are mere"));