import React, { useReducer } from 'react';

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default : 
            return state;
    }
}

// const reducer = (stete,action) => {
    // 위 아래 둘 다 같은 의미 
// }

const Counter2 = () => {

    const [count,dispatch] = useReducer(reducer,0);

    const increment = () => {
        dispatch({type:"INCREMENT"});
    }

    return (
        <div className='counter2'>
            <h1>{count}</h1>
            <button onClick={increment}>더하기</button>
            <button onClick={()=>{dispatch({type:'DECREMENT'})}}>빼기</button>
        </div>
    );
};

export default Counter2;