import axios from 'axios';

export const deleteQRcodeObj = () => {
    return axios.delete('https://fierce-stream-95930.herokuapp.com/api/lists/delete');
};

export const createQRcodeImg = (url) => {
    return axios
        .post('https://fierce-stream-95930.herokuapp.com/api/lists/add', { data: url })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
};

export const getQRcodeImg = () => {
    return axios.get('https://fierce-stream-95930.herokuapp.com/api/lists');
};
