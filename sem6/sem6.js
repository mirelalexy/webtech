let odd = document.querySelectorAll("tbody tr:nth-child(odd)");
let first = document.querySelector("tbody tr:first-child");
let last = document.querySelector("tbody tr:last-child");

if (odd.length > 0) {
    for (let item of odd) {
        item.bgColor = "pink";
    }
}

first.bgColor = "blue";
last.bgColor = "green";