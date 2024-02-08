function deleteInvalids(array = []) {

    if (!Array.isArray(array)) {
        return "Invalid Array. Please enter an array.";
    }

    let numbersArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            numbersArray.push(array[i]);
        }
    }

    return numbersArray;
}


console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); 
console.log(deleteInvalids(['1' , {num:2} , NaN ])); 
console.log(deleteInvalids([ 1 , 2 , -3 ])); 
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})); 

