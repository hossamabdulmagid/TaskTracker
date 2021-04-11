import { DataTypeAction } from './dataType';

const INITAIL_STATE = {
    pending: false,
    tasks: [],
    error: null

}

const dataReducers = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case DataTypeAction.GET_DATA_START:
            return {
                ...state,
                pending: true,

            }
        case DataTypeAction.GET_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                tasks: action.payload.data,
            }
        case DataTypeAction.GET_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }


        case DataTypeAction.DELETE_START:
            return {
                ...state,
                pending: true,

            }
        case DataTypeAction.DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case DataTypeAction.DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default: return state;
    }
}

export default dataReducers;