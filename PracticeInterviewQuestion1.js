//Given an array of identical numbers return the only different number

const uniqueNumer = (array) => {
    for (let i=0; i<array.length-1; i++) {
        if (array[i] !== array[i+1]) {
            if (array[i] !== array[i+2] && array[i+2]) {
                return array[i];
            } else if (array[i+1] !== array[i+2 && array[i+2]]) {
                return array[i+1]
            } else if (array[i] !== array[0]) {
                return array[i];
            } else {
                return array[i+1];
            }
        }
    }
    return "There is no Unique number";
}

const objectUniqueNumber = (array) => {
    let obj = {};

    for (let i=0; i<array.length; i++) {
        if (obj[array[i]] === undefined) {
            obj[array[i]]  = 1;
        } else {
            obj[array[i]]  += 1;
        }
    }
    for (let element in obj) {
        if (obj[element] === 1) {
            return parseInt(element);
        }
    }
    return "There is no Unique number";
}

let arr = [7,1,7]
console.log(uniqueNumer(arr))
console.log(objectUniqueNumber(arr));