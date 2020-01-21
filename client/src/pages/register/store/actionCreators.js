import axios from 'axios';

export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/register",userData)
        .then(res => history.push("/login"))
        .catch(err =>
            console.log(err));
};
