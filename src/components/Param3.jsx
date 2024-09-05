import React from 'react';
import { useParams } from 'react-router-dom';

const Param3 = () => {

    const {id,pw} = useParams();

    return (
        <div className='param3'>
            <h3>아이디 : {id} / 비밀번호 : {pw}</h3>
        </div>
    );
};

export default Param3;