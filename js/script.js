//Задание №1

const ex1 = false && true || true;// true. 1 дейсвие:false && true = false, 2 действие: false || true =  true
console.log(ex1);

const ex2 = false && (true || true);//false. сначала выполняется оператор 'и' (true || true)= true; потом оператор 'или' false && true = false
console.log(ex2);

const ex3 = +'40' + +'2'; //=42. строки '40' и '2' с помощью унарного '+' приводяться к типу даних number  
console.log(ex3, typeof ex3);

const ex4 = '2' + 3 ** 2;//=29.  строка '2' плюсуется с коренем числа 3 
console.log(ex4);

const ex5 = 3 ** 2 / 3;//=3. математическое дейсвие корень числа 3 ** 2=9 разделить на 3
console.log(ex5);

const ex6 = 3 ** (9 / 3);//=27. математическое действие (9 / 3)=3, корень числа  3 ** 3
console.log(ex6);

const ex7 = '10' + (5 === 6);//=10false.(5 === 6)= false так как 5<6, строка '10'плюсуется с false
console.log(ex7);

const ex8 = '10' - 5 === 6; //false. строка '10' c помощью конкотенации приводиться к типу данных number 10-5=5, 5<6 значит false 
console.log(ex8);

const ex9 = undefined + 1;//NaN. undefined — становится NaN
console.log(ex9);

const ex10 = (+null == false) < 1;
console.log(ex10);

const ex11 = (+null == false)< 1 ** 5;
console.log(ex11, typeof ex11);

let number = 5;
console.log(2 * ++number);//=12. ++number = 6(префикс инкримент), 2*6=12 
console.log(2 * number--);//=12. number -- =6(постфиксний дикримент)



