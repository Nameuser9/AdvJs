/**
 * 
 */
function task1() {
    const musicCollection = {

        musicAlbums: [
            { title: 'albumFIRST', artist: 'BEST artist',  year: '2000'},
            { title: 'albumSECOND!', artist: 'better artist',  year: '1984'},
            { title: 'albumTHIRD', artist: 'good artist',  year: '1580'}
        ],
        [Symbol.iterator]() {
            this.index = 0;
            return this;
        },
        next() {
            return this.index < this.musicAlbums.length
                ? {done: false, value: this.musicAlbums[this.index++]}
                : {done: true};
        }
    }
    for (const album of musicCollection) {
        return(`${album.title} - ${album.artist} (${album.year})`);
    }
    
}
function task2(){
    // Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

let cooks = new Map();
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);
console.log();

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

let dishes = new Map();
dishes.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
console.log();

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let orders = new Map(); //заказы всех клиентов

//заказ первого клиента
let client1 = { name: 'Алексей'};
let clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'")
            .add("Тирамису");

//заказ второго клиента
let client2 = { name: 'Мария'};
let clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'")
            .add("Пицца 'Маргарита'");

//заказ третьего клиента
let client3 = { name: 'Ирина'};
let clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders.set(client1, clientOrder1) // добавляем заказы клиентов в список
    .set(client2, clientOrder2)
    .set(client3, clientOrder3)

console.log(`Клиент ${client1.name} заказал(а): ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказал(а): ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказал(а): ${[...orders.get(client3)]}`);
}
console.log(task1)
console.log(task2)