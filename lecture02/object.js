const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/bangkok'
};
const formattedDate = new Date(registrationDate).toLocaleDateString('th-TH', options);
console.log('Registration Date: ${formattedDate}');