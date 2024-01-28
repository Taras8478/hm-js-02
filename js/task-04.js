let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let numberPerDroid;

numberPerDroid = prompt('Скільки телевізорів ви хочете купити?');
if (numberPerDroid === null) {
    console.log('Операцію скасовано!');
} else {
    totalPrice = pricePerDroid * numberPerDroid;
    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    } else {
        credits -= totalPrice;
        console.log(`Ви купили ${numberPerDroid} телевізорів, на рахунку залишилось ${credits} кредитів.`);
    }
}


