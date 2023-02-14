import { actionTypes } from "contants/action-type"
const initialState = {};
const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LOGIN: {
            return {
                ...payload
            }
        }
        default:
            return state;
    }
}
export default loginReducer;