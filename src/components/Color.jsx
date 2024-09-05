import React, { useState } from 'react';

const Color = () => {

    // input 값으로 색을 입력하면 해당 색으로 변경하는 useState 생성

    const [color, setColor] = useState("");

    let a = "";
    const colorInput = (e)=>{a = e.target.value;}

    const colorButton = ()=>{
        setColor(a)
    }
    // useState를 두개 사용해서 첫번째 함수는 input에 달아서 변수를 빼내고 그 값을 button에 연결한 함수에 보내면 됨!

    // input type:color 써보기
    const [color2, setColor2] = useState("");

    const colorInput2 = (e)=>{
        setColor2(e.target.value);
    }

    return (
        <div className='color'>
            <h3 style={{color:color}}>Color Change Example1</h3>
            <input type="text" onChange={colorInput}/>
            <button onClick={colorButton}>변경</button>

            <h3 style={{color:color2}}>Color Change Example2</h3>
            <input type="color" onChange={colorInput2}/>
            
        </div>
    );
};

export default Color;