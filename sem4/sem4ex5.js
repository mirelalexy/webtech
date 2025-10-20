function increaseSalary(salaries, bonus) {
    if (!Array.isArray(salaries)) {
        throw new Error("salaries error");
    }
    else if (typeof bonus !== "number") {
        throw new Error("bonus error");
    }
    else {
        return salaries.map(salary => {
            const newSalary = salary + (salary * bonus) / 100;
            console.log(newSalary);
            return newSalary;
        });
    }
}

try {
    increaseSalary([5000, 3200, 4000], 10);
    // increaseSalary("array", 10);
    // increaseSalary([5000, 3200, 4000], "fake");
} catch (err) {
    console.warn(err);
}