// 1
// const a = 'hScHool'
// if(!isNaN(a)){
//     console.log("Введите строку!");
// }
// else{
//     console.log(`#${a.toLowerCase()}`);
// }

// 2
// const a = 'шалаш';
// const b = a.split('').reverse().join('');
// console.log(a === b);

// 3
// const a = '123@1@@34'
// if(!isNaN(a)){
//     console.log("Введите строку!");
// }
// else{
//     console.log(a.replaceAll('@',''))
// }


// 4
// const a = '9';
// if(a > 2 & a < 11 || a >= 26 & a < 30){
//     console.log('Верно')
// }
// else{
//     console.log('Неверно')
// }

// 5
// const a = "user@domain.com";
// if(a.includes('@') & a.endsWith('.com') | a.endsWith('.ru')){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// 6
// const a = "1,2,3,4,5";
// console.log(a.split(','));

// 7
// const a = "hello";
// const n = 3;
// console.log(a.repeat(n));

// 8
// const a = "http://example.com";
// if(a.startsWith('https://') | a.startsWith('http://')){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// 9
// const a = "JavaScript LANGUAGE";
// b = a.split(' ');
// if (b.length == 3){
//     console.log(`${b[0][0].toLowerCase() + b[0].slice(1, a.length).toUpperCase()} ${b[1][0].toLowerCase() + b[1].slice(1, a.length).toUpperCase()} ${b[2][0].toLowerCase() + b[2].slice(1, a.length).toUpperCase()}`)
// }
// else if (b.length == 2){
//     console.log(`${b[0][0].toLowerCase() + b[0].slice(1, a.length).toUpperCase()} ${b[1][0].toLowerCase() + b[1].slice(1, a.length).toUpperCase()}`)
// }
// else{
//     console.log(`${b[0][0].toLowerCase() + b[0].slice(1, a.length).toUpperCase()}`)
// }

// 10
// const a = "hello";
// const n = "o";
// if(a.includes(n)){
//     console.log(a.indexOf(n));
// }
// else{
//     console.log("Символ не найден")
// }

// 11
// const a = Symbol('hschool');
// const b = Symbol('hschool');
// console.log(a == b);

// 12
// const a = Symbol('hschool');
// console.log(typeof(a));


// 13
// const a  = "Hello. How are you? I'm fine!"
// let count  = 0; 

// count += a.split('.').length - 1; 
// count += a.split('!').length - 1; 
// count += a.split('?').length - 1; 

// console.log(`Количество предложений: ${count}`);

// 14
// const a = '/home/user/dir/file.txt';
// const b = a.lastIndexOf('/');
// console.log(a.slice(b+1))