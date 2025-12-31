import { useState, useReducer } from "react"

export default function Study() {

    const [카운트, set카운트] = useState(0);

    const [숫자, set숫자] = useReducer(countReducer, 0);

    //status: set이 동작되기 전의 value
    //action: set이 동작 되었을 때, 어떤 행위를 할 것인지 정의
    function countReducer(status, action) {
        if(action === 'up') {
            return ++status;
        }
        else if(action === 'down') {
            return --status;
        }
        else if(action === 'reset') {
            return 0;
        }
    }


    return (
        <div>
            <h1>리듀서 페이지</h1>
            {숫자}
            <input type="button" value="숫자 증가"
            onClick={() => { set숫자('up') }} />
            <input type="button" value="숫자 감소"
            onClick={() => {set숫자('down')}} />
            <input type="button" value="초기화"
            onClick={() => {set숫자('reset')}} />

            {카운트}
            <input type="button" value="숫자 증가"
            onClick={() => {
                set카운트(카운트+1);
            }}/>
        </div>
    )
}