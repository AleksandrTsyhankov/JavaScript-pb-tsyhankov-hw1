/*#### Задача 12

Дан массив с числами: `[1,2,3,-5,-2,1,-4]`

Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

**Внимание**!

- Не разрашается использовать специальные методы массивов.*/

const arr = [1, 2, 3, -5, -2, 1, -4];
let sum = 0;
  
for (let i = 0; i < arr.length; i++) {
  arr[i] > 0 ? sum += arr[i] : sum;
};

console.log(sum);