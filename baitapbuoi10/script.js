// bài 1 tính và in bảng cửu chương.
// function bai1() {
//     for (let i = 1; 1 <= 10; i++){
//         for (let n = 1; n <= 10; n++){
//             console.log(i * n);
//         }       
//     }
// }

// bài 2  in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, chia hết cho 5 thì in “Buzz”, chia hết cho cả 3 và 5 thì in “FizzBuzz”, không chia hết cho cả 3 và 5 thì in “BizzFuzz”. Số trong khoảng 0 ؒ> 100
// function bai2() {
//     for(i=0; i<=100 ; i++){
//         if(i % 3 == 0 && i % 5 	== 0){
//             console.log("FizzBuzz",+i);
//         }
//         else if(i % 3 == 0){
//             console.log("Fizz",+i);
//         }
//         else if(i % 5 == 0){
//             console.log("Buzz",+i);}
//         else if(i % 3 != 0 && i % 5!= 0){
//             console.log("BuzzFizz",+i);
//         }
//     } 
// }
//bài 3:  VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 ؒtừ 1000
// function bai3() {
// 	let sum =0;
// 	for(i=0; i<=1000 ; i++){
// 		if(i % 3 == 0 && i % 5 	== 0){
// 			console.log(i)
// 			sum+=i;
// 		} 
// 	}
//     console.log(sum)
// }
// bài4 :VCT kiểm tra và in ra một số có phải số nguyên tố hay không
// function bai4() {
//     let a = prompt("Nhap so");
//     let test = 0;
//     for (let i = 2; i < a; i++) { // chạy i = 2 đến i = số a vừa nhập
//         if (a%i === 0) {
//             test ++;// test là biến đếm sô lần a%i==0
//             break;
//         }
//     }
//     if (test === 0) {
//         console.log(a + ": La so nguyen to");
//     }
//     else {
//         console.log(a + ": Khong phai so nguyen to");
//     } 	 	
// }
			
			
// bài5 :VCT kiểm tra và in ra các số nguyên tố trong khoảng 0 ؒtừ 1000 
// function bai5(n) {
// 	let check = true;
// 	for (let i = 2; i < n; i++) {
// 	  if (n % i == 0) {
// 		check = false;
// 	  }
// 	}
// 	check
// 	  ? console.log(n + " la so nguyen to")	 	
// 	  : console.log(n + " khong phai la so nguyen to");
//   } 
//   function printbai5(n = 1000) {
// 	for (let i = 2; i <= n; i++) {
// 	  bai5(i);
// 	}
// }
			
			
// //bài 6: VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a ؒtừ b 
// function bai6() {
// 	let a=prompt("Nhap a");
// 	let b=prompt("Nhap b");
// 		for (i = a ; i <= b; i++) {
// 			let test = 1;
// 			for (j = 2; j <= i / 2; j++) {
// 				if (i % j == 0) {
// 					test = 0;
// 					break;
// 				}
// 			}
// 			if (test == 1) {
// 				console.log(i + " : là số Nguyên tố");
// 			}
// 			else {
// 				console.log(i + " : không phải là sô nguyên tố");
// 			}
// 		}
// 	}	
// bai7:VCT bảng cửu chương ngược từ 10 đến 1 
// function bai7() {
// 	for(let i=10;i>=1;i--)   
// 		{
// 		for(let n=1;n<=10;n++){
// 			console.log(i*n);
// 		}
// 	}
// }
			
			
// bai8:vct in ra số đầu và cuối
// function bai6() {
// 	function display_digit(number) {
//         let first_digit = number;// 123
//         while (first_digit >=10){//123 lon hon = 10
//             first_digit = first_digit/10;
//             first_digit = Math.floor(first_digit);
//         }
//         document.write("chữ số đầu tiên của : " + number + " là : " + first_digit + "<br>");
//         let last_digit = number%10;
//         document.write("chữ số cuối củng của : " + number + " là : " + last_digit + "<br>");
//     }
// 	display_digit(15646);
// }
// bài 9: Viết chương trình in dãy số Fibonacci 
// function fibonacci()  {
// 	let a = +prompt("nhap so a");
// 	let b = 0;
// 	let c = 1;
// 	console.log(b);
// 	console.log(c);
// 	let d = 0;
// 	for(let i =2;i<a;i++){
// 		console.log(d = c + b);
// 		b=c;
// 		c=d;
// 	}
// }
// Cách 2
// function fibonacci()  {
//     let a = +prompt("nhap so bat dau cua day");
// 	let b = +prompt("nhap gioi han lan tang cua day");
// 	let c = 1;
//     let d = 0;
//     if (a == 0 || a == 1) {
// 	    console.log(a);
//         console.log(c);
// 	    for(let i = 2;i < b;i++){
// 		    console.log(d = c + a);
// 		    a=c;
// 		    c=d;
//         }
//     }
// else {
//     console.log("nhap sai roi ma', nhap lai 0 hoac 1 de");
//     }
// }
// bài 10:Viết chương trình tìm bội chung nhỏ nhất, ước chung lớn nhất của 2 số 
// function ucln() {
// 	let a = +prompt("Nhập số thứ 1");
// 	let b = +prompt("Nhập số thứ 2");
// 	let c;
// 	let d;
// 	for (let i = 1; i <= a && i <= b; i++) {
// 	  // lặp từ 1 đến số thứ 1 và số thứ 2
// 	  if (a % i == 0 && b % i == 0) { //ucln
// 		c = i;
// 	  }
// 	  d = (a * b) / c; // bcnn
// 	}
// 	console.log(`"Uoc chung lon nhat: " ${c}`);
// 	console.log(`"Boi chung nho nhat: " ${d}`);
//   }
//   ucln()
// bài 11: hình 1
// function patternOne(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for (let j = 1; j <= i; j++) {
//             str = "* ";
//         }

//         console.log(str);
//     }
// }
// hình 2
// function patternTwo(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= n; j++) {
//             if (j < (n + 1 - i)) {
//                 str += "  ";
//             } else {
//                 str += "* ";
//             }
//         }

//         console.log(str);
//     }
// }
// -----hình 5
function patternOne(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = n; j >= i; j--) {
            str += "* ";
        }

        console.log(str);
    }
}