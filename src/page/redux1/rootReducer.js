import { combineReducers } from "redux";

//status는 이전 값,
//위에 매게변수 안에 선언 된 것은 기본 값
// obj를 정의하면, obj가 담긴다. list를 정의하면 list가 담깁니다.
function dataReducer(status = '', action) {
    switch(action.type) {
        case 'insert':
            return {
                ...status,
                input: action.input
            }
            
        default:
            return status;
    }

}

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;