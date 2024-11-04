//Функція має повернути результат перевірки,
// чи помістяться всі товари в контейнер.
// Тобто порахувати загальну кількість товарів в
// об'єкті products і повернути true, якщо вона
// менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї
// функції для перевірки коректності її роботи. У
// консоль будуть виведені результати її викликів.

function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const values = Object.values(products);
  for (const products of values) {
    total += products;
  }

  if (total <= containerSize) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
