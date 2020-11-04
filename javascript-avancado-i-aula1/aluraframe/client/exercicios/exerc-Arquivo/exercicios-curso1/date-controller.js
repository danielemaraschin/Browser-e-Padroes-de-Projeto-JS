let dataString = '17-05-2016';

dataString = dataString.split('-').reverse().join('/');

let data = new Date(dataString);

console.log(data);