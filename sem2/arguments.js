// exemplu
function addToArray(array, ...args) { // numar variabil de args
    for (var i = 0; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

// exercitiu
function twoArrays(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}

let a1 = ["a", "l"];
let a2 = ["e", "x"];
console.log(twoArrays(a1, a2));