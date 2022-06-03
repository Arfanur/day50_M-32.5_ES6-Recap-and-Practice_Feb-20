/*  
1. let const
2. template string
2.a: use variable
2.b: use object property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two each number and then multiply the result.
3.c. three parameters. will multiply all three parameters.
3.d. with two parameters but it will be a multi line arrow function. will add two each number and then multiply the result.
4. [home work]: javascript function declaration vs arrow function
4.a. [home work]: javascript var, let, const different
5. You have a array of numbers. and then map to get each elements multiplied by 5. must use arrow function,
6. [challenging] array of numbers. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
7.5 [extra] Write a summary based on javascript array about map(), forEach(), filter(), find().
8. You have an object. Now use destructuring to create a simple variable of any property of the object.
9. [challenge] You have an array. Now use destructuring to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just write a function with three parameters. and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters

optional:
11. declare a nested object(i.e The property of an object can also contain like that object. again the property of an object can also contain like that object. Declare such as object. and the value of any one property will be an array. Just such an object)
12. Practice the optional chaining with the question mark before the dot in the above object.
*/


const myName = 'Arfanur Rahman';
const myAge = 30;
let myMoney = 380;
myMoney = 400;
const alAminMess = {
    messName: 'Al-Amin',
    border: 40,
    numberOfSeat: 45,
    rent: {
        seatRent: 700,
        cookingRentPerPerson: 200,
        // VariousEAFM = various Expenses Approximate In Full Mess
        variousEAFM: {
            sweeper: 150,
            internet: 100,
            variousSubscriptionApproximate: 500,
        }
    }
};
const { border, numberOfSeat } = alAminMess;
const { seatRent, cookingRentPerPerson } = alAminMess.rent;
const { sweeper, internet, variousSubscriptionApproximate } = alAminMess.rent.variousEAFM;
// console.log(messName, border, numberOfSeat, seatRent, cookingRentPerPerson, sweeper, internet, variousSubscriptionApproximate);

const aboutMe = `
 I am ${myName}.
My age ${myAge}.
I am a rich man. I have a lot of money.
My total money about ${myMoney} dolar.
Isn't that good?
Currently I am living in Rangpur City, Bangladesh.
My Mess name ${alAminMess.messName}.
Total mess border ${border}.
Seat rent ${seatRent} taka.
`;
// console.log(aboutMe);

// 3.a. with one parameter. will return the number after dividing by 5
const divide = x => x / 5;
const result = divide(25);
// console.log(result);

// 3.b. with two parameter. will add two each number and then multiply the result.
const doMath = (x, y) => (x + 2) * (y + 2);
// console.log(doMath(3, 8));

// 3.c. three parameters. will multiply all three parameters.
const multiply = (x, y, z) => x * y * z;
// console.log(multiply(2, 3, 4));

// 3.d. with two parameters but it will be a multi line arrow function. will add two each number and then multiply the result.
const doMath2 = (x, y) => {
    const firstPera = x + 2;
    const secondPera = y + 2;
    const result = firstPera * secondPera;
    return result;
};
// console.log(doMath(3, 8));

// 5. You have a array of numbers. and then map to get each elements multiplied by 5. must use arrow function
const numberArray = [38, 1, 13, 29, 59, 77, 30, 93];
const fifthMultiply = numberArray.map(x => x * 5);
// console.log(fifthMultiply);

// 6. [challenging] array of numbers. get odd numbers by using filter with arrow function
const numberArray2 = [12, 29, 41, 89, 37, 20, 55, 62, 72, 91, 82];
const oddNumbers = numberArray2.filter(x => x % 2);
const evenNumbers = numberArray2.filter(x => x % 2 == 0);
// console.log('Odd Numbers:', oddNumbers, ', ', 'Even Numbers:', evenNumbers);

// 7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    { name: 'iphone 12', price: 85499, camera: 10, stroge: 128 },
    { name: 'samsung note 10', price: 90900, camera: 12, stroge: 256 },
    { name: 'LG G6', price: 5000, camera: 8, stroge: 32 },
    { name: 'huawei prime', price: 11090, camera: 10, stroge: 32 }
];
const findProductByPrice = products.find(x => x.price == 5000);
// console.log(findProductByPrice);

//8. You have an object. Now use destructuring to create a simple variable of any property of the object.
const iphone = {
    name: 'iphone 12',
    price: 70000,
    camera: 10,
    stroge: 128
};
const price = iphone.price;
// console.log(price);

// 9. [challenge] You have an array. Now use destructuring to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const user = ["Arfanur", "Rahman", "It's number three", 30, "Male", ["Nazrul Islam", "Anjuman Ara Banu"]];
// const [firstName, secondName, three, age, gender, [fatherName, motherName]] = user;
// console.log(three, fatherName, motherName);

// 10. [optional] just write a function with three parameters. and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters
function addNumber(num1, num2, num3 = 7) {
    const result = num1 + num2 + num3;
    return result;
}
const total = addNumber(3, 10);
// console.log(total);

// 11. declare a nested object(i.e The property of an object can also contain like that object. again the property of an object can also contain like that object. Declare such as object. and the value of any one property will be an array. Just such an object)
// 12. Practice the optional chaining with the question mark before the dot in the above object.
const alAmin = {
    messName: 'Al-Amin',
    border: 40,
    numberOfSeat: 45,
    rent: {
        seatRent: 700,
        cookingRentPerPerson: 200,
        // VariousEAFM = various Expenses Approximate In Full Mess
        variousEAFM: {
            sweeper: 150,
            internet: 100,
            variousSubscriptionApproximate: 500,
            arr: [38, 20, 'kalke', 92, 73, 60]
        }
    }
};
console.log(alAmin?.rent?.variousEAFM?.arr);