function generateTempld() {
    const randompart = Math.random().toString(36).substring(2, 8);
    return randompart.toUpperCase();
}
const orderId = generateTempld();
console.log('Order ID: ${orderId}');
