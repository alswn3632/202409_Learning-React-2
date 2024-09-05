import React from 'react';
import Counter from './Counter';
import './comp.css'
import Input from './Input';
import Color from './Color';
import Input2 from './Input2';

const Comp2 = () => {

    // Count 예제
    // Hook : 기능을 할 수 있게 해주는 역할 
    // useState() : 상태변화

    return (
        <div className='comp2 comp'>
            <div>COMP THE 2ST!!!</div>     
            <Counter /> 
            <hr />
            <Input />
            <hr />
            <Color />
            <hr />
            <Input2 />
        </div>
    );
};

export default Comp2;