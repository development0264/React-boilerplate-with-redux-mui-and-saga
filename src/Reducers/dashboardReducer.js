import { HELLO_UPDATE } from '../Actions/dashboardAction';

const initialState = {
    helloText: "Hello"
};

const dashboardReducer = (state = initialState, action) => {
    console.log('action ---> ', action)
    switch (action.type) {
        case HELLO_UPDATE:
            return {
                helloText: action.payload
            };

        default:
            return state;
    }
}

export default dashboardReducer;