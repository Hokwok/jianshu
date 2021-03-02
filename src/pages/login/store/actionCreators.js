import axios from 'axios';
import { constants } from './index';

const changLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changLogin())
            }else{
                alert('登陆失败')
            }
        })
    }
}