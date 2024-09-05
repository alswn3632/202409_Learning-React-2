import React, { useState } from 'react';
import './comp.css';
import { Link } from 'react-router-dom';

const Comp3 = () => {
    // 다른 컴포넌트로 데이터를 넘길 때는 props를 사용하는데, 
    // path를 사용하여 데이터를 넘길 수도 있다.
    // ★ 나중에 spring 서버에 갈 때도 같은 작업을 함 ★
    // 1. path variable : /comp3/12421...(넘버링)
    // 2. queryString : /comp3?id=12&name=12...

    const [informations, setInformations] = useState({id:'',pw:''})
    const {id, pw} = informations;
    const inputValue = (e)=>{
        const {name,value} = e.target;
        setInformations({
            ...informations,
            [name] : value
        });
    }

    return (
        <div className='comp3 comp'>
            <div>COMP THE 3ST!!!</div>  
            {/* path variable */}
            <Link to='/param/15/kim'>path variable</Link>
            <br /><br /><br /><hr />
            {/* path variable 다른방법 */}
            <Link to={{pathname:'/param/15/kim'}}>path variable param</Link>
            <br /><br /><br /><hr />
            {/* queryString */}
            <Link to='/param?num=1&page=15'>queryString</Link>
            <br /><br /><br /><hr />
            {/* queryString 다른방법 */}
            <Link to={
                {
                    pathname:'/param',
                    search:'?num=1&page=15'
                }
            }>queryString params</Link>
            <br /><br /><br /><hr />
            {/* 문제: id와 pw를 입력받고 전송버튼을 클릭하여 param3.jsx에 출력 */}
            <input type="text" name='id' value={id} onChange={inputValue}/>
            <input type="text" name='pw' value={pw} onChange={inputValue}/>
            <Link to={{pathname:`/param3/${id}/${pw}`}}>id/pw 전송</Link>            
        </div>
    );
};

export default Comp3;