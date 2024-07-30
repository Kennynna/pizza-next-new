
// Переведите в верхний регистр все нечетные буквы этой строки.В нашем случае должно получится следующее:

const toUp = (word) => {
  const newWord = word.toLowerCase().split('');
  console.log(newWord)
  const result = [];
  newWord.map((word, index) => {
    if (index % 2 !== 0 ){
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
    if (word === '0'){
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
for (let i = min+1; i < max; i++) {
  test.push(i)
}
console.log(test)
