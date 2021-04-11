import { DataTypeAction } from './dataType';
import axios from 'axios';

const url = `http://localhost:5000/tasks`;

const startGeting = () => ({
    type: DataTypeAction.GET_DATA_START,
});


const successGetting = (data) => ({
    type: DataTypeAction.GET_DATA_SUCCESS,
    payload: data
});

const errorGetting = error => {
    if (error) {
        return {
            type: DataTypeAction.GET_DATA_ERROR,
            payload: error
        }
    }
}


export const doGetData = () => {
    return dispatch => {
        dispatch(startGeting())
        axios.get(url)
            .then((data, error) => {
                if (error) {
                    dispatch(errorGetting(error))
                    console.log(error)
                } else if (data) {
                    dispatch(successGetting(data))
                    console.log(data)
                }
            }).catch(error => {
                dispatch(errorGetting(error))
            })
    }
}