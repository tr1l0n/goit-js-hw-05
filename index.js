// 1
// function Account({ login, email }) {
//     this.login = login;
//     this.email = email;
//     this.getInfo = function () {
//         console.log(`Login: ${this.login}, Email: ${this.email}`);
//     }
// }


// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// 2
// class User {
//     constructor({ name, age, followers }) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//     }
// }
// const mango = new User({
//  name: 'Mango',
//  age: 2,
//  followers: 20,
// });

// console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//  name: 'Poly',
//  age: 3,
//  followers: 17,
// });

// console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers


// 3
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         return this.items.push(item);
//     }
//     removeItem(item) {
//         if (this.items.includes(item) === true) {
//             this.items.splice(1, this.items.indexOf(item));
//         }
//         return `Такого товару немає`;
//     }
// }
// const storage = new Storage([
//  'Нанітоіди',
//  'Пролонгер',
//  'Залізні жупи',
//  'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


// 4
// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         return this._value += str;
//     }
//     prepend(str) {
//         return this._value = str + this._value;
//     }
//     pad(str) {
//         return this._value = str + this._value + str;
//     }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


// 5
// class Car{
//     static getSpecs(car) {
//          return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//     }
//     constructor({ speed = 0, price, maxSpeed, isOn = false, distance }) {
//         this.speed = speed;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(a) {
//         this._price = a;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//     accelerate(value) {
//         if (this.maxSpeed > this.speed + value) {
//             this.speed += value;
//         }
//         return `Швидкість перевищує максимальну`;
//     }
//     decelerate(value) {
//         if (this.speed - value > 0) {
//             this.speed -= value;
//         }
//     }
//     drive(hours) {
//         if (this.isOn === true) {
//             this.distance = hours * this.speed;
//         }
//         return `Машина не заведена`;
//     }

// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000