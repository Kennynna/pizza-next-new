
// Переведите в верхний регистр все нечетные буквы этой строки.В нашем случае должно получится следующее:


const toUp = (word) => {
  const newWord = word.toLowerCase().split('');
  console.log(newWord)
  const result = [];
  newWord.map((word, index) => {
    if (index % 2 !== 0) {
      result.push(word.toUpperCase());
    } else {
      result.push(word)
    }
    return result.join('')
  })
  return result
}
console.log(toUp('Магомед'))


// Сделайте заглавным первый символ каждого слова в этой строке.В нашем случае должно получится следующее:

const toUpFirst = (word) => {
  const newWord = word.toLowerCase().split(' ');
  const result = [];
  newWord.map((word) => {
    result.push(word[0].toUpperCase() + word.slice(1));
    return result.join('')
  })
  return result.join(' ')
}
console.log(toUpFirst('магомед, абдулхаким'))


const findPos = (word) => {
  const newWord = word.split('');
  result = [];
  newWord.map((word, index) => {
    if (word === '0') {
      result.push(index)
    }
  })
  return result
}

console.log(findPos('asd0awd0vqw0'))


function camelToSnake(camelCaseString) {
  // Шаг 1: Разбиение строки на слова
  const words = camelCaseString.replace(/([A-Z])/g, ' $1').split(/\s+/);
  console.log(words)

  // Шаг 2: Преобразование первой буквы каждого слова в нижний регистр
  const lowerCasedWords = words.map(word => word.toLowerCase());

  // Шаг 3: Замена пробелов на подчеркивания
  const snakeCaseString = lowerCasedWords.join('_');

  return snakeCaseString;
}

// Пример использования

const snakeCaseString = camelToSnake('camelCaseExample');
console.log('snake_case_string'); // Вывод: camel_case_example


let num = [10, 4]
let max = Math.max(...num)
let min = Math.min(...num)
let test = []
for (let i = min + 1; i < max; i++) {
  test.push(i)
}
console.log(test)


const sumNumbers = (number) => {
  const stringNumber = number.toString();
  const result = stringNumber.split('').map(num => Number(num)).reduce((acc, cur) => {
    return acc + cur
  }, 0)
  console.log(result)
}

sumNumbers(3123)


const delNul = (num) => {
  const toStr = num.toString()
  const noNull = toStr.split('').filter(num => num !== '0').join('')
  return Number(noNull)
}

console.log(delNul(300123))



const adas = Date.now()
console.log(adas);



class User {
  constructor(name, age, email, role, status) {
    this.name = name,
      this.age = age,
      this.email = email
    this.role = role
    this.status = status
  }
  fullUser() {
    return `name: ${this.name}, age: ${this.age}, email: ${this.email}`
  }

  getStatus() {
    return this.status
  }
  getRole() {
    return this.role
  }
}


let Maga = new User('Magomed', 23, 'Guba', 'admin', 'active')
console.log(Maga.fullUser())
console.log(Maga.getStatus())
console.log(Maga.getRole())


const delDubble = (arr) => {
  // const result = [...new Set(arr)]
  // console.log(result)
  let newArr = []
  arr.forEach((item) => {
    if (newArr.length === 0) {
      newArr.push(item)
    } else if (newArr.some(el => el === item)) {

    } else {
      newArr.push(item)
    }

  })
  console.log(newArr)
}


delDubble([1, 2, 3, 4, 5, 1, 1])



const findMinMaxInArr = (newArrNum) => {
  let minMax = {
    min: newArrNum[0],
    max: newArrNum[0],
  }

  for (let i = 0; i < newArrNum.length; i++) {
    if (newArrNum[i] < minMax.min) {
      minMax.min = newArrNum[i]
    } else if (newArrNum[i] > minMax.max) {
      minMax.max = newArrNum[i]
    }

  }
  return minMax.min + ' ' + minMax.max
}
// Math.max(...array);
// Math.min(...array);

console.log(findMinMaxInArr([7, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


function finger(num) {
  switch (num) {
    case 8:
      console.log('raven 8')
      break;
    case 9:
      console.log('raven 9')
      break;
    case 10:
      console.log('raven 10')
      break;
    default:
      console.log(10)
  }
}


finger(9)


function deleteChetnie(arr) {

  let newArr = arr.filter((el) => el % 2 !== 0)
  return newArr
}


console.log(deleteChetnie([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function addRandomNumbers(from, to, count) {


  let arr = []

  function randomInteger() {
    let randomItem = Math.floor(Math.random() * (to - from)) + from
    arr.push(randomItem)
  }
  for (let i = 0; i < count; i++) {
    randomInteger()
  }

  return arr
}
function toNum(num) {
  return Number(num)
}
console.log(addRandomNumbers(toNum('1'), toNum('100'), 10))


// function onlyNum(str){
//   let arr = str.split('')
//   let newArr = arr.map(el => Number(el))
//   console.log(newArr)
//   for (let i = 0; i < newArr.length; i++){
//     if ( isNaN(newArr[i])) {
//       return false
//     }
//   }
//   return true
// }

// console.log(onlyNum('1234567dawd11189'))


function onlyNum(str) {
  let arr = str.split('')
  let newArr = arr.map(el => Number(el))
  if (newArr.some(el => isNaN(el))) {
    return false
  }
  return true
}

console.log(onlyNum('1234567dawd11189'))




function SecondMaxNum(arr) {
  let max = arr.sort((a, b) => b - a)[1]
  return max
}

console.log(SecondMaxNum([10, 20, 14, 9, 10]))


function fromMinToMax(one, two) {
  const [min, max] = [one, two].sort((a, b) => a - b)
  let arr = []
  for (let i = min + 1; i < max; i++) {
    arr.push(i)
  }
  return arr

}

console.log(fromMinToMax(4, 10))

// function randomLetter(num) {
//   let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   let randomItem = []
//   for (let i = 0; i < num; i++) {

//     let random = arr[Math.floor(Math.random() * arr.length)]
//     randomItem.push(random)
//   }

//   return randomItem
// }

function randomLetter(num) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return Array.from({ length: num }, () => arr[Math.floor(Math.random() * arr.length)]);
}

console.log(randomLetter(10))


function fibonacciSum(N) {
  if (N <= 0) return 0;

  let fibo = [0, 1];
  for (let i = 2; i <= N; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  console.log(fibo)
  return fibo[N];
}

console.log(fibonacciSum(10)); // 



function secondsToTime(seconds) {
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds
  };
}

// Пример использования
const time = secondsToTime(123124124);
console.log(time);



function wordSort(word) {
  let result = word.toLowerCase().split('').sort().join('')
  return result
}

console.log(wordSort('baWNPIOR'))



function findOne(arr1, arr2) {
  const [min, max] = arr1.length >= arr2.length ? [arr2, arr1] : [arr1, arr2]
  let result = []

  for (let i = 0; i < max.length; i++) {
    for (let j = 0; j < min.length; j++) {
      if (min[j] === max[i]) {
        result.push(min[j])
      }
    }
  }
  return result = [...new Set(result)] //для удаления дубликатов
}


console.log(findOne([1, 2, 2, 5, 7, 8, 9, 4], [1, 2, 1, 2, 3, 4, 9, 3]))



function randomFunc(count) {

  let arr = []
  function getRandom() {
    for (let i = 0; i < count; i++) {
      let random = Math.floor(Math.random() * 10)
      if (!arr.some(el => el === random)) {
        arr.push(random)
      }
    }
  }

  getRandom()

  return arr
}

console.log(randomFunc(10))


function getNextElement(array, index) {

  if (index < array.length - 1) {
    return array[index];
  } else {
    let res = index % array.length
    return array[res];
  }
}

console.log(getNextElement([1, 2, 3, 4, 5], 6))

console.log(isNaN(Number('asdawd, adwd')))

console.log('Новая заадча')

function numSum(num) {
  let arrNum = num.toString().split('')
  console.log(arrNum)
  return arrNum.reduce((acc, el) => acc + Number(el), 0);
}


console.log(numSum(1234))



function GetObhZn(arr) {

  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr.every((el) => el % i)) {
      result.push(i)
    }
  }
  return result

}
console.log(GetObhZn([3,9,12]))


// 09:20