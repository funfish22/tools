import axios from 'axios';

export const deleteQRcodeObj = () => {
    return axios.delete('https://still-hamlet-64914.herokuapp.com/api/lists/delete');
};

export const createQRcodeImg = (url) => {
    return axios
        .post('https://still-hamlet-64914.herokuapp.com/api/lists/add', { data: url })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
};

export const getQRcodeImg = () => {
    return axios.get('https://still-hamlet-64914.herokuapp.com/api/lists');
};
