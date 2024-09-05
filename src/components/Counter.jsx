import React, { useState } from 'react';

const Counter = () => {

    // useState() : 상태변화
    const [ count, setCount ] = useState(0);

    const incre = ()=>{ setCount(count+1); }
    
    const decre = ()=>{ setCount(count-1); }

    return (
        <div className='count'>
            <h1>{count}</h1>
            <button onClick={incre}>+</button>
            <button onClick={decre}>-</button>
        </div>
    );
};

export default Counter;