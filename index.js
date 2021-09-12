const greetToPerson = personName=>{
    return personName;
} 

console.log("Hello " + greetToPerson("Yoshi"));


// block


const getBirthYear = (age,firstname)=>{
    const retirement = 2021-age;
    return `${firstname} was born in ${retirement}`;
}
console.log(getRetairmentYrs(23,'Rasul'));

// block 



const cokeIngredients = (gram)=>{
    return gram * 2;
}

const cokeMaking = (water,blackColor)=>{
    const waterNeeded = cokeIngredients(water);
    const colorNeeded = cokeIngredients(blackColor);
    const preparedCoke = `${waterNeeded} gramm water and ${colorNeeded} gramm
     black color are needed to make coke`;
     return preparedCoke;
}

console.log(cokeMaking(20,15));
