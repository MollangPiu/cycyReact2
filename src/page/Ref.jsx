import { useState, useRef } from 'react';

export default function Ref1() {
    const [카운트, set카운트] = useState(0);

    const 대상 = useRef(0);
    return (
        <div>
            <h1> Ref </h1>
            카운트: {카운트} <br/>
            <input type="button" value="수 증가 시키기" onClick={() => {
                set카운트(카운트+1);
            } }/>
            <br />
            
            Ref: <input type="text" ref={대상} /> <br />
            <input type="button" value="수 증가 시키기" onClick={() => {
                대상.current.value = 대상.current.value+1;
            } }/>

        </div>
    )
}