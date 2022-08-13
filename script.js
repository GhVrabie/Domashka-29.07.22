// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.

let out1 = document.querySelector(".out-1");
let b1 = document.querySelector(".b-1");

let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
    };

b1.onclick = function f1() {
    out1.innerHTML = a1.two;
    return a1.two;
}


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

let out2 = document.querySelector(".out-2");
let b2 = document.querySelector(".b-2");


let a2 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
};

b2.onclick = function f2() {
    out2.innerHTML = a2.five;
    return a2.five;
}


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a2. Возвратите это значение. Вывод - через пробел.

let out3 = document.querySelector(".out-3");
let b3 = document.querySelector(".b-3");

b3.onclick = function f3() {
    let res = "";
    res += Object.keys(a2)[2] + " " + a2.five;
    out3.innerHTML = res;
    return res;

}



// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +'' <br>'. Функция должна возвращать строку в указанном формате вывода.

// Обратите внимание на пробел перед br!!!!!!!!

let out4 = document.querySelector(".out-4");
let b4 = document.querySelector(".b-4");

let a4 = {
    "one" : "hello",
    "two" : "mahai",
    "three" : "bonjour",
    "four" : "salut",
    "five" : "hi"
};

let res = "";

b4.onclick = function f4() {
    for(let key in a4) {
        res += key + " " + a4[key] + " " + "<br>";
        out4.innerHTML = res;
    }
    return res;
}


// Task 5 
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr, out5) {
    let strOut = "";
    for(let item in arr) {
        strOut += item + " " + arr[item] + " " + "<br>";
    }
    document.querySelector(out5).innerHTML = strOut;
    return strOut;
    
}

f5(a4, ".out-5");


// Task 6 
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

let out6 = document.querySelector(".out-6");
let b6 = document.querySelector(".b-6");
let inp61 = document.querySelector(".i-61");
let inp62 = document.querySelector(".i-62");

let a6 = {};

b6.onclick = function f6() {
    inp61 = inp61.value;
    inp62 = inp62.value;

    let key = inp61;
    a6[key] = inp62;

    for(let key in a6) {
        out6.innerHTML += key + " " + a6[key];
    }
}


// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let out7 = document.querySelector(".out-7");
let b7 = document.querySelector(".b-7");
let inp7 = document.querySelector(".i-7");

let a7 = {
    "one" : "hello",
    "two" : "mahai",
    "three" : "bonjour"
};

b7.onclick = function f7() {
    inp7 = inp7.value;

    for(let key in a7) {
        if(key == inp7) {
            out7.innerHTML = 1;
            break;
        } else {
            out7.innerHTML = 0;
        }
    }
}


// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

let out8 = document.querySelector(".out-8");
let b8 = document.querySelector(".b-8");
let inp8 = document.querySelector(".i-8");

let a8 = {
    "one" : "hello",
    "two" : "mahai",
    "three" : "bonjour",
    "four" : "salut",
    "five" : "hi"
};

b8.onclick = function f8() {
    inp8 = inp8.value;

    for(let key in a8) {
        if(key == inp8) {
            out8.innerHTML = a8[key];
            break;
        } else {
            out8.innerHTML = 0;
        }
    }
}


// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет то выводить пустую строку.


let out9 = document.querySelector(".out-9");
let b9 = document.querySelector(".b-9");
let inp9 = document.querySelector(".i-9");

let a9 = {
    "a" : "001",
    "b" : "002",
    "c" : "001",
    "d" : "001",
    "e" : "003"
}

b9.onclick = function f9() {
    inp9 = inp9.value;
    let res = "";

    for(let key in a9) {
        if(inp9 == a9[key]) {
            res += key + " ";
        } 
    }
    out9.innerHTML = res;
}


// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

let out10 = document.querySelector(".out-10");

let a10 = {
    "Mercedes-Maybach" : "Exelero",
    "Bugatti" : "Divo",
    "Rolls-Royce" : "Sweptail",
    "Lamborghini" : "Veneno",
    "McLaren" : "Speedtail"
};

function f10(arr, checkItem) {
    checkItem = "Divo";
    for(let key in arr) {
        if(arr[key] === checkItem) {
            return true;
        } 
    }
}

console.log(f10(a10, ""));


// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.

// Не догадался как использовать функцию f5 для вывода, но задачу решил :)

let a11 = {
    "Mercedes-Maybach" : "Exelero",
    "Bugatti" : "Divo",
    "Rolls-Royce" : "Sweptail",
    "Lamborghini" : "Veneno",
    "McLaren" : "Speedtail"
};

function f11() {
    let inp11 = document.querySelector(".i-11").value;
    let out11 = document.querySelector(".out-11");

    for(let key in a11) {
        if(a11[inp11]) {
            delete a11[inp11];
        }
        out11.innerHTML += key + " " + a11[key] + " " + "<br>";
    }
}

document.querySelector(".b-11").addEventListener("click", f11);


// Task 12
// При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

// Удалить ключ в Task 11 получилось, а вот тут именно значение нет. Не догадался как использовать функцию f5 для вывода :)


// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

let out13 = document.querySelector(".out-13");
let b13 = document.querySelector(".b-13");
let a13 = [2, 4, 6, 8];

b13.onclick = function f13() {
    let res = 0;

    for(let i = 0; i < a13.length; i++) {
        res += a13[i];
    }
    out13.innerHTML = res;
}


// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу) элементы вложенных массивов в a14. Вывод через пробел.

let out14 = document.querySelector(".out-14");
let b14 = document.querySelector(".b-14");
let a14 = [[3, 5], [2, 4, 6], [8, 11]];

b14.onclick = function f14() {

    for(let i = 0; i < a14.length; i++) {
        out14.innerHTML += a14[i][0] + " ";
    }
}


// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

let out15 = document.querySelector(".out-15");
let b15 = document.querySelector(".b-15");
let a15 = [[3, "one"], [2, "four", 6], [8, "eleven"]];

b15.onclick = function f15() {

    for(let i = 0; i < a15.length; i++) {
        out15.innerHTML += a15[i] + " ";
    }
}


// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

let out16 = document.querySelector(".out-16");
let b16 = document.querySelector(".b-16");

let a16 = [{
    name : "Gheorghe",
    age : "36"
},
    {
    name : "Leontii",
    age : "40"
},  {
    name : "Valentina",
    age : "25"
},
    {
    name : "Maxim",
    age : "28"
}];


b16.onclick = function f16() {

    for(let users of a16) {
        out16.innerHTML += users.name + " ";
    }
}


// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

let out17 = document.querySelector(".out-17");
let b17 = document.querySelector(".b-17");

let a17 = [{
    name : "Gheorghe",
    age : "36"
},
    {
    name : "Leontii",
    age : "40"
},  {
    name : "Valentina",
    age : "25"
},
    {
    name : "Maxim",
    age : "28"
}];


b17.onclick = function f17() {

    for(let users of a17) {
        if(users.age > 30) {
            out17.innerHTML += users.age + " ";
        }
    }
}


// Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let out18 = document.querySelector(".out-18");
let b18 = document.querySelector(".b-18");
let inp18 = document.querySelector(".i-18");

let a18 = {
    "picadilly" : ["Green Park", "Russell Square", "Arsenal"],
    "central" : ["Bond Street", "Saint Paul's", "Holland Park"],
    "district" : ["Sloane Square", "West Kensington", "Tower Hill"]
};


b18.onclick = function f18() {
    inp18 = inp18.value;

    for(let key in a18) {
        for(let i = 0; i < a18[key].length; i++) {
            if(key == inp18) {
                out18.innerHTML += a18[key][i] + " ";
            } else {
                break;
            }
        }
    }
}


// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.

let out19 = document.querySelector(".out-19");
let b19 = document.querySelector(".b-19");
let inp19 = document.querySelector(".i-19");


let a19 = {
    "Blue" : ["Green Park", "Russell Square", "Arsenal"],
    "Red" : ["Bond Street", "Saint Paul's", "Holland Park"],
    "Green" : ["Sloane Square", "West Kensington", "Tower Hill"]
};

b19.onclick = function f19() {
    inp19 = inp19.value;

    for(let key in a19) {
        let divColor = document.createElement("div");
        out19.appendChild(divColor);

        if(key == "Blue") {
            divColor.classList.add("blue");
        } else if(key == "Red") {
            divColor.classList.add("red");
        } else if (key == "Green") {
            divColor.classList.add("green");
        } else {
            out19.innerHTML = "";
        }

        for(let i = 0; i < a19[key].length; i++) {
            if(inp19 == a19[key][i].toLowerCase() || inp19 == a19[key][i]) {
                divColor.innerHTML = key;
            }
        }
    }
}


// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел.

let out20 = document.querySelector(".out-20");
let b20 = document.querySelector(".b-20");

let a20 = {
    "Blue" : ["Green Park", "Russell Square", "Arsenal"],
    "Red" : ["Bond Street", "Saint Paul's", "Holland Park"],
    "Green" : ["Sloane Square", "West Kensington", "Tower Hill"],
    2 : ["Liverpool Street", "Mile end", "Gospel Oak", "Stratford", "Paddington"]
};

b20.onclick = function f20() {
    let switchSt = "";

    for(let key in a20) {
        for(let i = 0; i < a20[key].length; i++)
        if(key == 2) {
            switchSt += a20[key][i] + " ";
        }
    }
    out20.innerHTML += "Станции которые содержат переход на другую ветку: " + switchSt;
}









// CLASSWORK

// Ассоцитиативные массивы

// const a = {
//     "a": 5,
//     "b": "Hello",
//     "zc": "world",
//     "some thing": 45
// };


// a.xyz = "777";  // добавить
// console.log(a);
// console.log(a.zc);
// delete a.a
// console.log(a);

// a.b = "Johny"; // Перезаписать значение

// let key = "b";
// console.log(a[key]);
// console.log(a);

// let out = "";
// for(let key in a) {
//     out += key + "--" + a[key] + "<br>";
// }

// document.querySelector(".out").innerHTML = out;




// const b = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"],
//     ["key3", "value3"]
// ]);

// console.log(b);
// console.log(b.get("key1"));
// console.log(b.size);



// const c = [{"color": "red"}, {"model": "porshe"}, {"power": 250}];
// console.log(c[0].color);