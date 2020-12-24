// tạo weapon 
let kiem = new Weapon("kiếm", 10);
let cung = new Weapon("cung", 20);
let sung = new Weapon("súng", 100);
function Weapon(name, damage) {
    this.name = name;
    this.damage = damage;
}

// tạo Player
let thang = new Player("Thắng", sung, 100);
let tuan = new Player("Tuấn", cung, 101);
let nghia = new Player("Nghĩa", kiem, 105);
function Player(name, weapon, level) {
    this.name = name;
    this.weapon = weapon;
    this.level = level;
    this.attack = function () {
        console.log("Player damage :" + this.weapon.damage * this.level);
    };
    this.changeWeapon = function (weapon) {
        this.weapon = weapon;  
    };
}

// gọi attack và changeWeapon
thang.attack();
thang.changeWeapon(kiem);
thang.attack();

// tạo đối tượng là boy
let tuan = new Boy("tuấn", 22, "nam");
function Boy(name, age, sexual) {
    this.name = name;
    this.age = age;
    this.sexual = sexual;
    this.hi = function () {
        console.log("mình là " + this.name + " con");
    };
    this.threat = function () {
        console.log("thông đ*t giờ");
    };
    this.sorry = function () {
        console.log("xin lỗi! được chưa!?");
    };
}

// tạo đối tượng là girl
let thaoanh = new Girl("thảo anh", 22, "nữ");
function Girl(name, age, sexual) {
    this.name = name;
    this.age = age;
    this.sexual = sexual;
    this.hi = function () { 
        console.log("Chào các bạn mình tên là " + this.name);
    };
}

// tạo Calculator
let Calculator = {
    a: 0,
    b: 0,
    get(a, b) {
        this.a = a;
        this.b = b;
        return this;
    },
    add() {
        console.log("a + b =", this.a + this.b);
        return this;
    },
    sub() {
        console.log("a - b = ", this.a - this.b);
        return this;
    },
    div() {
        console.log("a / b = ", this.a / this.b);
        return this;
    },
    mul() {
        console.log("a * b = ", this.a * this.b);
        return this;
    },
    rem() {
        console.log("a % b = ", this.a % this.b);
        return this;
    },
    exp() {
        console.log("a ** b = ", this.a ** this.b);
        return this;
    },
};
let cal = Calculator;
cal.get(4, 5).add();

// Counter
let counter = new Counter();
function Counter() {
    let count = 0;
    this.count = count;
    this.up = function () {
        this.count++;
        console.log("Count tăng 1: ", this.count);
        return this;
    };
    this.down = function () {
        this.count--;
        console.log("Count giảm 1: ", this.count);
        return this;
    };
    this.get = function () {
        console.log("Count hiện tại: ", this.count);
        return this;
    }
}
counter.up().up().get().down().get();