function appendCharacter(char) {
    var result = document.getElementById('result');
    result.value += char;
}

function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
}

function calculateResult() {
    var result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
