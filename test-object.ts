interface Obj {
  [key: string]: number
}

interface ObjNew{
	maga: number
	maga2: number
	maga3: number
	maga4: number
}
const obj: ObjNew = {
	maga: 100,
	maga2: 200,
	maga3: 300,
	maga4: 400,
}

function getZp(obj: ObjNew): number {
	return Object.values(obj).reduce((acc, el) => acc + el, 0)
}

console.log(getZp(obj))