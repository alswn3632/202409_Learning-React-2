import React, { useRef, useState } from 'react';

const Input2 = () => {

    const [inputs, setInputs] = useState({name:'', nickName:''});
    // inputs는 name과 nickName 두 변수를 담는 객체 변수
    // useState 안의 표현으로 inputs가 객체인것을 인지시킴

    // useRef(): DOM에서 어떤 엘리먼트를 직접 선택해야 할 경우 사용
    const nameInput = useRef(); // 초기화 버튼 함수에서 사용해보면

    // 구조 분해 할당
    const {name, nickName} = inputs;

    const textInput = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target;
        // 변경 대상이 아닌 값은 공백처리되는 문제
        // 기존 값을 유지하려면? -
        setInputs({
            ...inputs, // 기존 값 복사 ... 스프레드 연산자 -
            [name] : value // name 키를 가진 값을 value로 변경
        });
    }

    const removeInput = ()=>{
        // input value는 어케바꿈 ;ㅁ; input 태그에 value 넣어서 해결!

        setInputs({ name : '', nickName : '' });

        nameInput.current.focus();
    }
    return (
        <div className='input2'>
            <h3>name:{name} / nickName:{nickName}</h3>
            <input type="text" name='name' value={name} placeholder='name' onChange={textInput} ref={nameInput}/>
            <input type="text" name='nickName' value={nickName} placeholder='nickName' onChange={textInput}/>
            {/* 구분을 위해 input에 name 속성을 부여함 */}
            <button onClick={removeInput}>초기화</button>
        </div>
    );
};

export default Input2;