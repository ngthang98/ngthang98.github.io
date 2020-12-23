//bài 1: viết hàm random(a,b), trả về số ngẫu nhiên trong khoảng a và b
function bai1(a,b) {
    return Math.floor(Math.random() * (b-a)) + a;
}
//Arrow
let bai1 = (a, b) => Math.floor(Math.random() * (b - a) + a);

//bài 2: Viết hàm isTrangle(a,b,c) nhận vào  tham số là cạnh của tam giác, kiểm tra 3 cạnh có phải tam giác hợp lệ không ?
function bai2(a, b, c) {
    if ((a + b > c) || (a + c > b) || (b + c) > a) {
        console.log("đây là hình tam giác");
    } else {
        console.log("không phải hình tam giác");
    }
} 
//Arrow
let bai2 = (a, b, c) => ((a + b > c) || (a + c > b) || (b + c) > a) ? console.log("đây là hình tam giác") : console.log("không phải hình tam giác");

//bài 3: Viết hàm guessNumber(), khởi tạo một số ngẫu nhiên trong khoảng 0 - 10, sau đó hiển thị bảng cho phép người dùng đoán giá trị. Nếu đoán đúng hiển thị "Â mây zing, gút chóp" và dừng hàm, nếu sai hiển thị "Không khớp" và cho phép nhập lại. Số lần nhập tối đa là 3 lần, hoặc người dùng có thể bấm cancel để dừng hàm
function bai3() {
    let a = 0;
    let b = Math.floor(Math.random() * 11);
    console.log("số random là ",+b);
    let c = +prompt("Hãy đón 1 số từ 0 > 10:");
    while (a < 2 && !isNaN(c)) {
        if (c == b) {
            alert("Ơ mây zing, gút chóp em");
            break;
        } else {
            a++;
            c = +prompt("Sai rồi, mời nhập lại")
        }
    }
}
//Arrow cai nayf em viet sai roi thay oi 
//let bai3 = () => a = 0, b = 0, console.log("số random là ", +b), c = +prompt("Hãy đón 1 số từ 0 > 10:"), (a < 2 && !isNaN(c)), (c == b) ? alert("Ơ mây zing, gút chóp em") : a++, c = +prompt("Sai rồi, mời nhập lại");

//bài 4: Viết hàm nearest(a, b) kiểm tra và trả về số gần với 100 nhất
function bai4(a,b) {
    let c = 100 - a;
    let d = 100 - b;
    if (c > d) {
        return (b);
    } else {
        return (a);
    }
}

//bài 5: Viết hàm nearest(a, b) kiểm tra và trả về số gần với 100 nhất
function bai5(a, b, c) {
    if (a > b && a > c && b > c) {
        console.log("Dãy giảm dần")
    } else if (c > b && c > a && b > a) {
        console.log("Dãy tăng dần")
    } else {
        console.log("Lỗi")
    }
}
//Arrow
let bai5 = (a, b, c) => (a > b && a > c && b > c) ? console.log("Dãy giảm dần") : (c > b && c > a && b > a) ? console.log("Dãy tăng dần") : console.log("Lỗi");

//bài 6: Viết hàm countDecimal(number) trả về số chữ số trong phần thập phân của number
function bai6(a) {
    console.log(String(a).split(".")[1].length);
}
//Arrow
let bai6 = (a) => (String(a).split(".")[1].length);

//bài 7: Viết hàm isAscending(number) kiểm tra dãy số của number có phải dãy tăng dần hay không
function bai7(a) {
    let aStr = String(a);
    for (let i = 0; i < aStr.length - 1; i++){
        if (aStr[i] > aStr[i + 1]) {
            return console.log("không tăng dần");
        }
        return console.log("tăng dần");
    }
}
//Arrow

//bài 8: Viết hàm countEven(number) trả về số chữ số chẵn của number.
function bai8(a) {
    let length = String(a).length - 1,
        result = "";
    for (let i = 0; i < length; i++){
        if (a % 2 == 0) {
            result += String(Math.trunc(a))[String(Math.trunc(a)).length - 1]
        }
        if (Math.trunc(a /= 10) % 2 == 0) {
            result+=String(Math.trunc(a))[String(Math.trunc(a)).length - 1]
        }
    }
    console.log("Số chẵn là " + result);
}

//bài 9: Viết hàm find(number) trả về số n sao cho 1 + 2 + ... + n <= number.
function bai9(a) {
    let sum = 0;
    n = 0;
    for (let i = 0; i < a; i++){
        if (sum <= a) {
            sum += i;
            n = i;
        } else {
            return n - 1;
        }
    }
    return n;
}

//bài 10: Viết hàm sum(value1, unit1, value2, unit2) quy đổi về cùng đơn vị và trả về tổng giá trị value1 + value2 theo unit1, unit bao gồm km, m, cm, dm, mm
function sum(value1, unit1, value2, unit2) {
    if (unit1 == "km") {
        if (unit2 == "km") {
            return value1 + value2;
        } else if (unit2 == "m") {
            return value1 + value2*(10 ** -3);
        } else if (unit2 == "cm") {
            return value1 + value2*(10 ** -5);
        } else if (unit2 == "dm") {
            return value1 + value2*(10 ** -4);
        } else if (unit2 == "mm") {
            return value1 + value2*(10 ** -6);
        }
    } else if (unit1 == "m") {
        if (unit2 == "km") {
            return value1 + value2*1000;
        } else if (unit2 == "m") {
            return value1 + value2;
        } else if (unit2 == "cm") {
            return value1 + value2/100;
        } else if (unit2 == "dm") {
            return value1 + value2/10;
        } else if (unit2 == "mm") {
            return value1 + value2*(10 ** -3);
        }
    } else if (unit1 == "cm") {
        if (unit2 == "km") {
            return value1 + value2*(10 ** 5);
        } else if (unit2 == "m") {
            return value1 + value2*100;
        } else if (unit2 == "cm") {
            return value1 + value2;
        } else if (unit2 == "dm") {
            return value1 + value2*10;
        } else if (unit2 == "mm") {
            return value1 + value2/10;
        }
    } else if (unit1 == "dm") {
        if (unit2 == "km") {
            return value1 + value2*(10 ** 4);
        } else if (unit2 == "m") {
            return value1 + value2*10;
        } else if (unit2 == "cm") {
            return value1 + value2/10;
        } else if (unit2 == "dm") {
            return value1 + value2;
        } else if (unit2 == "mm") {
            return value1 + value2/100;
        }
    } else if (unit1 == "mm") {
        if (unit2 == "km") {
            return value1 + value2*(10 ** 6);
        } else if (unit2 == "m") {
            return value1 + value2*(10 ** 3);
        } else if (unit2 == "cm") {
            return value1 + value2*10;
        } else if (unit2 == "dm") {
            return value1 + value2*100;
        } else if (unit2 == "mm") {
            return value1 + value2;
        }
    }
    return false;
}