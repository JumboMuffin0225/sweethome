let a = 15
while (a <=27) {
  alert(a)
  a++
}
a = 15

let k = 15
while (k <=270) {
  if (k % 10 !=0) {
    k++;
  }
  else {
    alert(k);
    k++
  }
}

let c = 0
for (let b = 2; b <= 17; b++) {
c = c+b
}
alert(c)

let q = prompt("У вас два числа 9 и 3, введите действие которое нужно выполнить");
let w = 9;
let e = 3;
function func1(n1,n2){alert(n1+n2)};
function func2(n1,n2){alert(n1-n2)};
function func3(n1,n2){alert(n1*n2)};
function func4(n1,n2){alert(n1/n2)};
  if (q==="+") {
    func1(w,e);
  }
  else if (q==="-") {
    func2(w,e);
  }
  else if (q==="*") {
   func3(w,e);
 }
  else if (q==="/"){
    func4(w,e);
  }
  else {alert("ошибка");}
