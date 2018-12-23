document.write("Нахождение простых множителей");
document.write("<br />");
/* Найти простые множители для числа 127 */
let FindFactors = (number) => {
    let factors = [];

    // Проверяем делимость на 2, если число чётное
    while (number % 2 == 0) {
        factors.push(2);
        number = number / 2;
    }
    
    // Если число нечётное(ищем нечетные множители)
    let i = 3;
    let max_factor = Math.sqrt(number);
    while (i <= max_factor) {
        // Проверяем делимость на i
        while (number % i == 0) {
            // i является множителем, добавляем его в список
            factors.push(i);

            // делим число на i
            number = number / i;

            // устанавливаем новую верхнюю границу
            max_factor = Math.sqrt(number);
        }

        i = i + 2;
    }

    if (number > 1) factors.push(number);

    return factors;
}

let number = 9;

document.write(FindFactors(number));

