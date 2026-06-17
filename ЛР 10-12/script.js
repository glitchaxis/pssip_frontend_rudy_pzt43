function task2() {
    var n = 30;
    var html = '<div class="result">';
    for (var i = 1; i <= n; i++) {
        html += i + '. Иванов Иван\n';
    }
    html += '</div>';
    document.getElementById('task2').innerHTML = html;
}

function task3() {
    var arr = [10, 25, 37, 42, 58, 63, 71];
    var html = '<div class="result">';
    html += 'До: [' + arr.join(', ') + ']\n';
    arr.push(88);
    html += 'После: [' + arr.join(', ') + ']\n';
    html += 'Длина: ' + arr.length;
    html += '</div>';
    document.getElementById('task3').innerHTML = html;
}

function calc() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    if (a === 4) {
        document.getElementById('task4').innerHTML = '<div class="result">Ошибка: a = 4</div>';
        return;
    }

    var res = (b * b - Math.PI) / Math.abs(a - 4) + 7 * Math.sqrt(c + Math.PI);
    document.getElementById('task4').innerHTML = '<div class="result">Результат: ' + res + '</div>';
}

function task5() {
    var s1 = 'Я люблю Беларусь';
    var s2 = 'Я учусь в политехническом колледже';
    var n = 30;

    var html = '<div class="result">';
    html += 's1: ' + s1 + '\n';
    html += 's2: ' + s2 + '\n\n';
    html += '1. Длина s2: ' + s2.length + '\n';
    html += '2. "Беларусь" в s1: ' + s1.indexOf('Беларусь') + '\n';
    var ch = s2[(n - 1) % s2.length];
    html += '3. ' + n + '-й символ s2: "' + ch + '" (ASCII: ' + ch.charCodeAt(0) + ')';
    html += '</div>';
    document.getElementById('task5').innerHTML = html;
}

var interval = null;

function startInfo() {
    stopInfo();
    var w = window.open('', '', 'width=400,height=200');
    if (!w) {
        alert('Разрешите всплывающие окна');
        return;
    }
    w.document.write('<pre id="out"></pre>');
    w.document.close();

    var count = 0;
    function update() {
        count++;
        var info = navigator.platform + '\n' + navigator.hardwareConcurrency + ' ядер\n' + new Date().toLocaleTimeString();
        w.document.getElementById('out').textContent = 'Обновление ' + count + '\n' + info;
    }
    update();
    interval = setInterval(update, 4000);
    document.getElementById('task6').innerHTML = '<div class="result">Окно открыто</div>';
}

function stopInfo() {
    if (interval) clearInterval(interval);
    interval = null;
    document.getElementById('task6').innerHTML = '<div class="result">Остановлено</div>';
}

document.addEventListener('DOMContentLoaded', function() {
    task2();
    task3();
    task5();
});
