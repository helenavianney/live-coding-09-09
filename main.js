const jumlahAbjad = (str) => {
    const arrString = Array.from(str).reduce((previousValue, currentValue) => {
        previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
        return previousValue;
    }, {});

    return arrString;    
}

console.log(jumlahAbjad('hello'));