function internalDemo() {
    document.getElementById('out-internal').innerHTML = 'Internal скрипт из head';
}

function externalDemo() {
    document.getElementById('out-external').innerHTML = 'External из script.js';
}

function demoIf() {
    var d = new Date();
    var time = d.getHours();
    var result = "Час: " + time + ". ";
    if (time < 10) {
        result += "Доброе утро";
    } else if (time < 16) {
        result += "Добрый день";
    } else if (time < 22) {
        result += "Добрый вечер";
    } else {
        result += "Доброй ночи";
    }
    document.getElementById('out-if').innerHTML = result;
}

function demoSwitch() {
    var d = new Date();
    var day = d.getDay();
    var result = "День: " + day + ". ";
    switch (day) {
        case 1: result += "Понедельник"; break;
        case 2: result += "Вторник"; break;
        case 3: result += "Среда"; break;
        case 4: result += "Четверг"; break;
        case 5: result += "Пятница"; break;
        case 6: result += "Суббота"; break;
        case 0: result += "Воскресенье"; break;
        default: result += "?";
    }
    document.getElementById('out-switch').innerHTML = result;
}

function demoFor() {
    var result = "";
    for (var i = 1; i <= 5; i++) {
        result += i + " ";
    }
    document.getElementById('out-for').innerHTML = result;
}

function demoWhile() {
    var result = "";
    var i = 1;
    while (i <= 5) {
        result += i + " ";
        i++;
    }
    document.getElementById('out-while').innerHTML = result;
}

function demoDoWhile() {
    var result = "";
    var i = 1;
    do {
        result += i + " ";
        i++;
    } while (i <= 5);
    document.getElementById('out-dowhile').innerHTML = result;
}

function demoBreak() {
    var result = "";
    for (var i = 1; i <= 10; i++) {
        if (i == 5) break;
        result += i + " ";
    }
    result += "break";
    document.getElementById('out-break').innerHTML = result;
}

function demoContinue() {
    var result = "";
    for (var i = 1; i <= 10; i++) {
        if (i == 3 || i == 7) continue;
        result += i + " ";
    }
    document.getElementById('out-continue').innerHTML = result;
}

function sum(a, b) {
    return a + b;
}

function prod(a, b) {
    return a * b;
}

function demoReturn() {
    var x = 4, y = 3;
    document.getElementById('out-return').innerHTML = "sum=" + sum(x,y) + " prod=" + prod(x,y);
}

function demoConfirm() {
    var r = confirm("OK или Отмена?");
    if (r == true) {
        document.getElementById('out-confirm').innerHTML = "OK, true";
    } else {
        document.getElementById('out-confirm').innerHTML = "Отмена, false";
    }
}

function demoPrompt() {
    var name = prompt("Имя:", "Гарри Поттер");
    if (name != null && name != "") {
        document.getElementById('out-prompt').innerHTML = "Привет, " + name;
    } else if (name == null) {
        document.getElementById('out-prompt').innerHTML = "null";
    } else {
        document.getElementById('out-prompt').innerHTML = "пусто";
    }
}
