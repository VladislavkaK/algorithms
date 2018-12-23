document.write("<hr />");
document.write("Нахождение простых Элементов");
document.write("<br />");

// Находим простые числа между 2 и max_number (включительно)
let FindPrimes = (max_number) => {
    // Определяем массив для чисел
    let is_composite = [];

    // Исключаем числа, кратные 2
    for (let i = 4; i < max_number; i = i + 2) {
        is_composite[i] = true;
    }

    // Исключаем числа, кратные найденным простым числам
    let next_prime = 3;
    let stop_at = Math.sqrt(max_number);
    while (next_prime <= stop_at) {
        // Исключаем числа, кратные данному простому числу
        for (let j = next_prime * 2; j < max_number; j++) {
            is_composite[j] = true;
        }

        // Переходим к следующему простому числу, пропуская четные числа
        while (next_prime <= max_number && is_composite[next_prime]) {
            next_prime = next_prime = next_prime + 2;
        }
    }

    // Заносим простые числа в список
    let primes = [];
    for (let k = 2; k < max_number; k++) {
        if (!is_composite[k]) {
            primes.push(k);
        }
    }

    // Возвращаем простые числа
    return primes;
}

let max_number = 8;

document.write("Простые элементы числа " + max_number + ": " + FindPrimes(max_number));