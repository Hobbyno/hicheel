// let bat = {
//     ner: "Bat",
//     tootsoo: [124, 48, 268],
//     tip: [],
//     finalBill: [],

// }

// for(let i = 0; i < bat.tootsoo.length; i++){
//     let percentage = 0;
//     if(bat.tootsoo[i] <= 50){
//         percentage = .2;
//         bat.tip.push(bat.tootsoo[i] * percentage)
//         bat.finalBill.push(bat.tootsoo[i] + bat.tip[i])
//     } else if(bat.tootsoo[i] > 50 && bat.tootsoo[i] < 200){
//         percentage = .15;
//         bat.tip.push(bat.tootsoo[i] * percentage)
//         bat.finalBill.push(bat.tootsoo[i] + bat.tip[i])
//     } else {
//         percentage = .1;
//         bat.tip.push(bat.tootsoo[i] * percentage)
//         bat.finalBill.push(bat.tootsoo[i] + bat.tip[i])
//     }

// }
// Primitive Data typeof
// 1.String
// 2.Number
// 3.Boolen
// 4.undefined
// 5.null

// Object, Array - Non-Primitive

// Function - Функц гэдэг нь аливаа programmiig burduulj bui bureldehuun heseg.

// Function гэж функцынхаа neriig ogno.

// function myFunction() {
//     let tursunOn = 2000;
//     let nas = 2021 - tursunOn;
//     console.log(nas)
// }

// function myFunction() {
//         let tursunOn = 2000;
//         let nas = 2021 - tursunOn;

//         return nas;
//     }

//     let x = myFunction();

// Parameter function

// function nasTootsoh(on) {
// return 2021 - on;
// }

// let person1 = nasTootsoh(2000);
// let person2 = nasTootsoh(2001);
// let person3 = nasTootsoh(1997);
// let person4 = nasTootsoh(1995);

// Orolt - 1, 0, 5; Garalt: 1
// Orolt - 5, 3, 1; Garalt: 0

// 1. 3 shirheg too argument helbereer awdag funkts bich.
// 2. toologch huwisagch uusge.
// 3. Ehnii toog 0-tei tentsuu esehiig shalgaad, herew tegtei tentsuu bol tooluuriin utgiig negeer nemegduul.
// 4. 2 dahi toog tegtei tentsuu esehiig shalgaad, herew tegtei tentsuu bol tooluuriin utgiig negeer nemegduul.
// 5. 3dahi toog tegtei tentsuu esehiig shalgaad , herew tegtei tentsuu bol tooluuriin utgiig negeer nemegduul.
// 6.Tooluuriin utgiig butsaa.

// function counterZero(a,b,c) {
//     let counter = 0;
//     if(a === 0) {
//         counter++;
//     }
//     if(b === 0) {
//         counter++;
//     }
//     if(c === 0) {
//         counter++;
//     }
//     return counter;

// }

// function Tool(a) {
// return a.toString().lenght
// }
// function sumD(num) {
//     let sum = 0;
//     for(let i = 0; i < num.toString().lenght; i++){
//      sum += +num.toString()[i]
//     }
//     return sum;
// }

// function tool(a) {
//     let tool = 0;
//     for (let i = 0; i < a.toString().length; i++) {
//         if (+a.toString()[i] % 2 === 0) {
//             tool++;
//         }
//     }
//     return tool;
// }

// function tool(a) {
//     let tool = 0;
//     for (let i = 0; i < a.toString().length; i++) {
//         if (+a.toString()[i] % 3 === 0) {
//             tool++;
//         }
//     }
//     return tool;
// }

// function tool(a) {
    //     let tool = 0;
    //     for (let i = 0; i < a.toString().length; i++) {
    //         if (+a.toString()[i] % 2 === 0) {
    //             tool++ +a.toString()[i];
    //         }
    //     }
    //     return tool;
    // }

//Palindrom

// function isPalindrom(num) {
//     return num === +num.toString().split("").reverse().join("");
// }

//Anhdagch toog

// function isPrime(num) {
//     let counter = 0;
//     for(let i = 1; i <= num; i++){
//         if(num%i === 0) {
//             counter++;
//         }
//     }

//     if(counter === 1 || couunter === 2){
//         return true
//     }
//     return false
// }

//<======== Callstack - Neg funktsiig, oor funkts dotor duudah

// function printName(ner) {
//   return ner;
// }
// function intro(ner){
//     return "Sain baina uu... Namaig " + printName(ner) + "gedeg..."
// }

//<======== Callback - Argument helbereer funkts damjuulah

// function intro(nas){
//     return "bi" + nas() + " nastai"
// }

//<======== Recursion - Funktsiig ooriig ni dotor ni duudah

// function printHi(num){
//     if(num === 0) return;
//     console.log("Hi");
//     printHi(num - 1);
// }
// //10 

// Garaas too ogogdson bl tuhain too hurtel niilberuudiig 

// function addUpTo(num){
// if(num === 0){
//     return num;
// };
// return num + addUpTo(num - 1)

// }


// factorial - 1*2*3*4*5 = 5!

// function factorial(num){
//     if(num === 1){
//         return num;
//     };
//     return num * factorial(num - 1)
// }



