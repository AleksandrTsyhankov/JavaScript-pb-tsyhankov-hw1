/*####Задача 8

Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.*/

var arr = [1,2,3,4];
var sum = 0;

for (var elem of arr) {
  if (elem % 2 === 0 && elem > 3) {
    sum = sum + elem;
  }
};

console.log(sum);