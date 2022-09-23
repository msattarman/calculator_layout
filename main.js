// Создаем переменные

let title = 'калькулятор верстки'; 
let screens = 'Простые, сложные, интерактивные';
let screenPrice = 1000;
let rollback = 25;
let fullPrice = 30000;
let adaptive = true;

// Выводим в консоль

console.log(typeof title);
console.log(screens.length);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.toLowerCase([1, 2, 3])); 
console.log(fullPrice * (rollback/100));

console.log("Стоимость верстки экранов (screenPrice) рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта (fullPrice) рублей/долларов/гривен/юани");


//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))