

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write("*");
//     };
//     document.write('<br>');
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     };
//     document.write('<br>');
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(`${j} `);
//     };
//     document.write('<br>');
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write(" *");
//     };
//     document.write('<br>');
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write(j);
//     };
//     document.write('<br>');
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write(j);
//     };
//     document.write('<br>');
// }



// for (let i =1 ; i <= 5; i++) {


//     for (let j = 4; j >= i; j--) {
//         document.write("&nbsp;&nbsp; ");
//     };
//     for (let j = 1; j <= i; j++) {
//         document.write("* ");
//     };
//     document.write('<br>');
// }



// most inster view

// for (let i = 1; i <= 5; i++) {


//     for (let j = 4; j >= i; j--) {
//         document.write("&nbsp;&nbsp; ");
//     };
//     for (let j = 1; j <= i; j++) {
//         document.write("*&nbsp;&nbsp;  ");
//     };
//     document.write('<br>');
// };

let count = 1;
for (let i = 1; i <= 4; i++){
    for (let j = 1; j <= i; j++){
        document.write(count + " ");
        count++
    };
    document.write("<br>");
}