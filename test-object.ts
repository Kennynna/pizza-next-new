interface Obj {
  [key: string]: number
}
type Func = (obj: Obj) => void 

const obj: Obj = {
	maga: 100,
	maga2: 200,
	maga3: 300,
	maga4: 400,
}

function getZp (obj: Obj):number{
  return Object.values(obj).reduce((acc, el) => acc + el, 0)
}

console.log(getZp(obj))