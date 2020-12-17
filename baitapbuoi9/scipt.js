// Chu vi, diện tích của hình chữ nhật
// let a = +prompt("chiều dài");
// let b = +prompt("chiều rộng");
// console.log("chu vi", 2 * (a + b));
// console.log("diện tích", a * b);

// Chu vi, diện tích của hình tròn
// let a = +prompt("bán kính hình tròn");
// console.log("chu vi",3.14 * (2 * a));
// console.log("diện tích",a**2 * 3.14);

// Phương trình bậc nhất ax + b = 0, tính và in ra nghiệm của phương trình
// let a = +prompt("nhập a");
// let b = +prompt("nhập b");
// if (a == 0) {
//    alert("phương trình vô số nghiệm")
// } else if (b == 0) {
//     alert("phương trình vô nghiệm")
// } else {
//     alert(-b / a)
//     // console.log("kết quả",-b/a);
// }


// Tính và in ra giá trị tương ứng ở các đơn vị mm, m, km
// let a = +prompt("nhập cm");
// console.log("đơn vị km", a/100000);
// console.log("đơn vị m", a/100);
// console.log("đơn vị mm", a*10);

// Đơn vị Celsius, in ra nhiệt độ ở đơn vị Fahrenheit và Kevin tương ứng
// let a = +prompt("nhập độ C");
// console.log("Độ F",(a * 1.8)+32);
// console.log("Độ K", a + 273.15 );

// Nhập một số phút tính từ 0h, tính và in ra giờ/phút tương ứng
// let a = +prompt("nhập số phút");
// let b = Math.floor(a / 60);
// let c = a % 60;
// let d = ( b + 'h:' + c + 'p');
// alert(d);

//  Nhập ba số, kiểm tra và in ra số lớn nhất
// let a = +prompt("Nhập a");
// let b = +prompt("Nhập b");
// let c = +prompt("Nhập c");
// if (a > b & a > c) {
//     alert("a là số lớn nhất")
// } else if (a < b & b > c) {
//     alert("b là số lớn nhất")
// }else if (a < c & c > b) {
//     alert("c là số lớn nhất")
// }

// Kiểm tra số chia hết cho 5 và 11
// let a = prompt("Nhập sô:");
// if (a / 5 & a / 11) {
//     alert("số này chia hết cho 5 và 11")
// } else {
//     alert ("số này không chia hết cho 5 và 11")
// }

// Kiểm tra năm nhuận
// let a = +prompt("nhập năm:");
// if (a % 4 & a % 100 !=0 || a % 400) {
//     alert ("năm nhuận")
// } else {
//     alert ("năm không nhuận")
// }

// Kiểm tra Alphabet
// let a = prompt("Nhập 1 kí tự");
// let b = (a.charCodeAt(0));
// if (b >= 65 & b <= 90) { 
//     alert("Kí tự vừa nhập thuộc alphabet");
// } else if (b >= 97 & b <= 122) { 
//     alert("Kí tự vừa nhập thuộc alphabet");
// } else {
//     alert("Kí tự vừa nhập KHÔNG thuộc alphabet");
// }

// Kiểm tra nguyên âm
// let a = prompt("Nhap ky tu");
// let b = (a.charCodeAt(0));
// if (b == 65 || b == 73 || b == 79 || b == 85 || b == 97 || b == 101 || b == 105 || b == 111 | b ==117 ) {
//   alert("Day la nguyen am");
// } else {
//     alert("Đây là phụ âm")
// }

// Kiểm tra in hoa và thường
// let a = prompt("Nhập 1 kí tự");
// let b = (a.charCodeAt(0));
// if (b >= 65 & b <= 90) { 
//     alert("Chữ hoa");
// } else if(b >=97 & b <=122) { 
//     alert("Chữ thường",);
// } else {
//     alert("không phải chữ")
// }

// Phương  trình bậc 2
// let a = +prompt("nhập a");
// let b = +prompt("nhập b");
// let c = +prompt("nhập c");
// let d = b * b - 4 * (a * c);
// if (d == 0) {
//     alert("phương trình có nghiệm kép")
//     console.log("x1=x2:", -b / (2 * a));
// } else if (d < 0) {
//     alert("phương trình vô nghiệm")
// } else if (d > 0) {
//     alert("phương trình có 2 nghiệm")
//     console.log("x1:", (-b - Math.sqrt(d)) / (2 * a));
//     console.log("x2:", (-b + Math.sqrt(d)) / (2 * a));
// }

// Quy đổi điểm hệ số 10, sang điểm hệ chữ cho sinh viên, với điểm =< 10 là A, < 8.5 là B, <7.0 là C, < 5.5 là D, < 4.0 là F
let b = +prompt("nhập điểm");
if (b <= 4 ) {
    alert("Điểm F")
} else if(b <= 5.5){
    alert("Điểm D")
} else if (b <= 7) {
    alert ("Điểm C")
} else if (b <= 8.5) {
    alert("Điểm B")
} else if (b <= 10) {
    alert("Điểm A")
}
