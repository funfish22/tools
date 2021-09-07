import axios from 'axios';

export const translationSearchQuery = (text) => {
    const data = `name=${encodeURI(text)}&action=query`;
    return axios
        .post(
            'https://script.google.com/macros/s/AKfycbzB-n4AihShwpvD1FIsyUsBjooe60z3qlmAs3Q35mkAvAE7-AO6bUFrT-sswuOWbNqcew/exec',
            data
        )
        .then(function (response) {
            return response;
        });
};
