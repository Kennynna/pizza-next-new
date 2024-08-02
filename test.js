
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
