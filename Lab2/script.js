let x = 15
let y = 6
if (x> y)
  alert("x больше чем y");
  else {
    alert("x меньше чем y");
  }

let  a = prompt("Введите любое число");
let  b = parseFloat(a);
 if (a==="0") {
   alert("число нечетное и четное");
 }
else if (b%2==0) {
    alert("Ваше число четное");
}
  else {
    alert("Ваше число нечетное");
}

let c = parseFloat(prompt("Введите любое число №1"));
let d = parseFloat(prompt("Введите любое число №2"));
let f = parseFloat(prompt("Введите любое число №3"));
if (c>d && c>f) {
  alert("число №1 наибольшее");
}
 else if (d>c && d>f) {
   alert("число №2 наибольшее")
 }
 else {
   alert("число №3 наибольшее")
 }

 let e = parseFloat(prompt("Введите число №1"));
 let k = parseFloat(prompt("Введите число №2"));
 let l = confirm ("выполнить сложение?");
 let n = null;
if (l === true) {
  let n = e+k;
  alert(n);
}
else {
  alet("Ошибка!");
}
