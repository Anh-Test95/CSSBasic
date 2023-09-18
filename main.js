let age = 19;
let myAge = 23;
myAge++;
let totalStudent = 46;
// Them 1 hoc vien vao lop:
totalStudent = totalStudent + 1;
totalStudent += 1;

hoadon = 900002;
soLuongNguoi = 4;
phaiTra = hoadon % soLuongNguoi;
console.log(phaiTra);
myName = "Teo";

console.log(" Xin chao" + myName);
console.log("Xin chao", myName);
console.log("Xin chao ${myName}");
// 123123
let x = 10;
console.log(typeof x);
let y = "10";
// console.log(x/y);
console.log(x == y);

let boolean1 = true;
let boolean2 = false;
console.log(boolean1 && boolean2);
console.log(boolean1 || boolean2);
console.log(!boolean1);

console.log(true && true);
console.log(true && false);
console.log(true || false);

console.log(0 && false);

// Bai tap
//1. Giai phuong trinh bac 2 voi 3 doi so a, b, c
// 2. Tinh chi so IBM cua nguoi co chieu cao la x cm va can nang y
// 3. Kiem tra xem 1 so co phai la so le, so chinh phuong, so nguyen to, so hoan hao hay khong?

//Giai bai tap 2 va 3
//Bai2

const cannang = 60;
const chieucao = 1.7;
const bMI = cannang / (chieucao * chieucao);
console.log(`Chi so BMI cua ban la: ${bMI}`);

//Bai 3: Tim ra so le

var myNumber = 234555555;
if (myNumber % 2 !== 0) {
  console.log(`${myNumber} la mot so le`);
} else {
  console.log(`${myNumber} la mot so chan`);
}

let welcome = " Xin chao moi nguoi!";
console.log(welcome.lastIndexOf("n"));

var firstName = "Anh";
var lastName = "VuNgoc";
var fullName = firstName + " " + lastName;
var fullName2 = firstName.concat("", lastName);
// console.log (fullName2);

// Hàm built- in: console, prompt,

console.warn("test console");

// let isName = prompt("Moi nhap ten cua ban:");
// console.log("ahii");

// let yourIdol = confirm("Ban co than tuong ai khong?");

alert("xin chao moi nguoi");
