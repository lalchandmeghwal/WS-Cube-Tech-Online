// const arr = [10, 20, 30, 40, 50,];
// console.log(arr.unshift(100,200,300));

// console.log(arr);


// const arr = [1, 2, 3, 4, 5,];

// for (let value of arr) {
//     arr.pop();
// };

// console.log(arr);


const arr = [10, 20, 30, 40, 50,];

//  delete Methods
// delete arr[2] // empty ya undefind
// for (let value of arr) {
//     console.log(value)
// }


// const l = [1, 2, 3, 4, 5,];
// const m = [6, 7, 8, 9, 10];

// const result = l.concat(m);
// const result = l.slice();

// const result = l.slice();
// const result = [...l, ...m];

// console.log(result );


const a = [10, 20, 30, 40, 50,];


// a.splice(2, 2, );

// console.log(a);

// const res = a.slice(0, 4);
// console.log(res);

// console.log(a.includes(10));

// console.log(a.reverse());

// const newArr = [];

// for (let value of a) {
//     newArr.unshift(value);
// };

// for (let i = a.length - 1; i >= 0;i--) {
//     newArr.push(a[i]);
// };
// console.log(newArr);




// most unique array;

// const arr1 = [1, 2, 3, 4, 5, 3, 5, 6, 5, 8, 9, 9, 8,];
// const arr2 = [3, 5, 6, 5, 8, 9, 9, 8,];

// const newArr2 = [];


// for (let value of arr1) {
//     if (!newArr2.includes(value)) {
//         newArr2.push(value);
//    };
// };

// console.log(newArr2);


let arr2 = [
    'apple', 'Banana', 'orange', 'Umbrella', 'elephant',
    'ice', 'Owl', 'egg', 'Idea', 'ocean',
    'Ink', 'envelope', 'Island', 'ant', 'eagle',
    'orchid', 'unit', 'opera', 'arrow', 'urban',
    'cat', 'Zebra', 'dog', 'monkey', 'Tiger'
];

const newArr = [];

const vowelChar = 'aeiou';
for (const value of arr2) {
    if (vowelChar.includes(value[0].toLowerCase())) {
        newArr.push(value);
    }
};

// console.log(newArr[20]);

console.log(newArr);



const s = [2, 3, 1, 9, 8, 6, 7, 3, 100,];

// s.sort((a, b)=>a-b);
// s.fill(5, 5, 7);
// console.log(s.join(" "));

console.log(s);




// Q. 1 Find common element between two Arrays.

// const a1 = [1, 2, 3, 4,];
// const a2 = [3, 4, 5, 6,];

// for (let value of a1) {
//     if (a2.includes(value)) {
//         console.log(value);
//    }
// }



// Q. 2 Remove duplicates from an array.

const l = [1,1,3,3,3, 2, 3, 9, 7, 5, 2, 3, 88, 99, 77, 88, 55];

// const finalArray = [];

// for (let value of l) {
//     if (!finalArray.includes(value)) {
//         finalArray.push(value);
//     };
// };


// console.log(finalArray);


// let max = l[0];
// for (let value of l) {
//     if (value > max) {
//         max = value;
//     };
// };

// console.log(max);


// const finalArray = [];


// for (let value of l) {
//     finalArray.unshift(value);
// };
// console.log(finalArray);