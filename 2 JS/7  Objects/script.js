



// console.log(obj.class);

// obj.greet();


// const obj = {
//     '*': "Lal Chand",
//     "last-Name": "Meghwal",
//     age: 21,
//     // address: {
//     //     village: 'kolasar',
//     //     city: "sujangarh",
//     //     dis: "churu",
//     //     pin: 331507,
//     // }
// }



// const { firstName: name, address:{village, city, dis, pin} } = obj;
// console.log(name);
// console.log(village, city, dis, pin);


// const { lastName, ...data } = obj;
// console.log(data);

// console.log(obj["*"]);








// const obj = {
//     firstName: "Lal Chand",
//     lastName: "Meghwal",
//     age: 21,
//     village: 'kolasar',
//     city: "sujangarh",
//     dis: "churu",
//     pin: 331507,

// };

// const data = Object.entries(obj);
//iterable
// for (let value of obj) {
//     console.log(value);
// };

// console.log(data.flat(Infinity));

// console.log(data);


// const obj2 = Object.assign({}, obj);




// most
// console.log(obj?.firstName);



// Object with 10 data items

// https://pinnacle-khaki.vercel.app/
// https://lawpreptutorialkolkata.com/


const data = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60,
    g: 70,
    h: 80,
    i: 90,
    j: 100
};

for (let value in data) {
    console.log(value ,data[value]);
};