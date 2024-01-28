const total = 100;
const ordered = 101;

if (ordered > total) {
    console.log(`На складі недостатня кількість товару!`);
} else if (ordered <= total) {
    console.log(`Замовлення оформлено`);
}