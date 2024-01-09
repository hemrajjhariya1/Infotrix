const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();
const ddate = (`
Today: ${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`);

const date = document.querySelector(".date");
date.append(ddate)
