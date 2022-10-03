"use strict"
// Создаем переменные

let title = prompt('Как называется ваш проект?', 'Калькулятор верстки'); 
let screens = prompt('Какие типы экранов нужно разработать?\n пример: "Простые, сложные, интерактивные"', 'Простые');
let screenPrice = +prompt('Сколько будет стоить данная работа?\n пример: 12000', '10000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?\n Например: service1, service2', 'service1');
let servicePrice1 = +prompt("Сколько это будет стоить?\n", "1000");
let service2 = prompt(
  "Какой дополнительный тип услуги нужен?\n Например: service1, service2",
  "service2"
);
let servicePrice2 = +prompt("Сколько это будет стоить?\n", "2000");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 25;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

if (fullPrice >= 30000) {
   console.log('даем скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
   console.log('даем скидку 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
   console.log('скидка не предусмотрена');
} else if (fullPrice < 0) {
   console.log('что-то пошло не так...');
}

// Выводим в консоль

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);




/* 
console.log("Стоимость верстки экранов (screenPrice) рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта (fullPrice) рублей/долларов/гривен/юани");
 */