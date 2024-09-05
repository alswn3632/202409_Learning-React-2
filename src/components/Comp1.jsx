import React from 'react';
import { friends } from '../data/data';
import Table from 'react-bootstrap/Table';

const Comp1 = () => {
    return (
        <div className='comp1 comp' style={{width:'500px', margin:'50px auto'}}>
            <div>COMP THE 1ST!!!</div>
            {/* 친구 목록 표시 */}
            <div>친구 목록 !!!</div>
            {
                friends.map(f => (
                    <p>{f.name}({f.phone}), {f.addr}, {f.job}</p>
                ))
            }

            {
                friends.forEach(a =>(
                    <p>{a.name}({a.phone}), {a.addr}, {a.job}</p>
                ))
            }

            <Table striped bordered hover style={{width:"100%"}}>
                <thead>
                    <tr>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        friends.map(f => (
                            <tr>
                            <td>{f.name}</td>
                            <td>{f.phone}</td>
                            <td>{f.addr}</td>
                            <td>{f.job}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Comp1;