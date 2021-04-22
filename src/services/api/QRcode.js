import axios from 'axios';

export const deleteQRcodeObj = () => {
    return axios.delete('http://127.0.0.1:5000/api/lists/delete');
};

export const createQRcodeImg = (url) => {
    return axios
        .post('http://127.0.0.1:5000/api/lists/add', { data: url })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
};

export const getQRcodeImg = () => {
    return axios.get('http://127.0.0.1:5000/api/lists');
};
