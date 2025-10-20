function powGen() {
  const cache = {}; // obiect pentru ca salvam mai multe combinatii, deci avem nevoie de chei precum "2^3"

  const pow = (base, exp) => {
    const key = `${base}^${exp}`;
    if (cache[key] !== undefined) {
      console.log("found " + key);
      return cache[key];
    }
    else {
        console.log("calculated " + key);
        
        if (exp === 0) cache[key] = 1;
        else if (exp === 1) cache[key] = base;
        else cache[key] = base * pow(base, exp - 1);
        
        return cache[key];
    }
  };

  return pow;
}

const pow = powGen();
console.log(pow(2, 5));
console.log(pow(2, 3));