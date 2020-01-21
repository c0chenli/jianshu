import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
});


export const login = (account, password) => {
  return (dispatch) => {
      const userData = {
          email: account,
          password: password
      };

      axios.post("/api/users/login", userData).then((res) => {
          const result = res.data;
          console.log(result);
          if (result) {
              dispatch(changeLogin())
          }else {
              alert("登陆失败")
          }
          console.log(res);
      })
  }
};
