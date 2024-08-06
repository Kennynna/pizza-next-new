'use client'

import React, { useEffect } from 'react'

// Добавляем контекст для управления состоянием show
const ShowContext = React.createContext()

export default function UseEff1() {
	const [show, setShow] = React.useState(1)

	React.useEffect(() => {
		console.log('useEffect1')
	}, [show])

	return (
		<ShowContext.Provider value={{ show, setShow }}>
			<h1>First</h1>
			<UseEff2 />
			<button onClick={() => setShow(show + 1)}>+</button>
		</ShowContext.Provider>
	)
}

export const UseEff2 = () => {
	const { show } = React.useContext(ShowContext)

	React.useEffect(() => {
		console.log('useEffect2', show) // Теперь этот эффект будет запускаться при изменении show
	}, [show])

	return (
		<>
			<h1>First 2</h1>
			{/* Остальной код */}
		</>
	)
}
