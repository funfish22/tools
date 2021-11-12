import axios from 'axios';

export const translationSearchQuery = (text, conversion, match) => {
    const data = `name=${encodeURI(text)}&action=query&conversion=${conversion}&match=${match}`;
    return axios
        .post(
            'https://script.google.com/macros/s/AKfycbyRk8vUQiC5-FprxEAS4SSPPV5oBkROMFp57IH_bG8tEMZRFE1SIfeyOkyhufddrP5vBQ/exec',
            data
        )
        .then(function (response) {
            return response;
        });
};
