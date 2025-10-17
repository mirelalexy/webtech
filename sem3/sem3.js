// ex 1
const years = [2015, 2005, 2000, 1998, 2023, 2013];
const minAge = 18;

    //1
const adults = years.map(year => new Date().getFullYear() - year).filter(age => age > minAge);
console.log(adults);

    //2
const filterYears = (years, minAge) => {
    return years.map(year => new Date().getFullYear() - year).filter(age => age > minAge);
}
console.log(filterYears(years, minAge));

// ex 2
const numbers = [13, 16, 18, 22, 23, 8, 100];
const num = 2;

const getSum = (numbers, num) => {
    return numbers.filter(number => number % num === 0).reduce((sum, number) => sum + number, 0);
}
console.log("result: ", getSum(numbers, num));

// ex 3
const formatString = (template, words) => {
    return template.replace(/{(\w+)}/g, (match, key) => {
        return key in words ? words[key] : match;
    })
}
    //  {(\w+)}/g looks for anything in between { and }
const template = "a {noun} is {adjective}";
console.log(formatString(template, {noun: "user", adjective: "impressed"}));

// ex 4
const reduce = (array, callback, initial) => {
    for (const element of array) {
        initial = callback(initial, element);
    }
    return initial;
}
console.log("result: ", reduce([1, 2, 3], (sum, number) => sum + number, 0));

// ex 5
const censor = (text, dictionary) => {
    const words = text.split(" ");
    const censored = words.map(word => {
        if (dictionary.includes(word)){
            if (word.length > 2) {
                return word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
            }
        }
        return word;
    });
    return censored.join(" ");
}

const dictionary = ["pretty", "wicked", "funny", "girl"];
const text = "she is funny";
console.log(censor(text, dictionary));

// ex 6
const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        if(a[key] < b[key]) {
            return -1;
        }
        else {
            return 1;
        }
    })
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
]
console.log(sortByKey(laptops, "brand"))

// optional
const average = nums => nums.reduce((sum, num) => sum + num, 0) / nums.length;
console.log("result: ", average([4, 9, 1020, 24, 5]));