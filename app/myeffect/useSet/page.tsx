'use client'
import { useSet } from 'react-use'
const mySet = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [set, { toggle }] = useSet(new Set());
    return <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
            Remove 'hello'

        <button onClick={() => toggle('hello')}>Toggle hello</button>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
}

export default mySet