// 10.	Задача: необхідно створити форму в якій буде 2 інпута для чисел і один селект
// для математичної операції (+,-,*,/).
// По сабміту форми користувач має побачити результат. Результат має бути завжди цілим числом.
//     Додай лейбли до полів вводу та анотації, щоб було інтуітивно зрозуміло що робити.
//     Завдання можеш оформити
// у Github та прислати нам посиланням на репозіторій або розшарити нам його за допомогою гуглдоку

function calc(){
        let num1 = parseFloat(document.forms.f1.ap1.value);
        let num2 = parseFloat(document.forms.f1.ap2.value);
        let sel = document.getElementById('sel').value;
        if (sel === '+') {
            document.getElementById('result').value = num1 + num2;
        }else if (sel === '-') {
            document.getElementById('result').value = num1 - num2;
        }else if(sel === '/') {
            document.getElementById('result').value = num1 / num2;
        }else if(sel === 'x') {
            document.getElementById('result').value = num1 * num2;
        }
    return calc;
    };