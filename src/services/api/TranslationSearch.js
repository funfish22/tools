import axios from 'axios';

export const translationSearchQuery = (text) => {
    console.log('text', text);
    const data = `name=${encodeURI(text)}&action=query`;
    return axios
        .post(
            'https://script.google.com/macros/s/AKfycbzB-n4AihShwpvD1FIsyUsBjooe60z3qlmAs3Q35mkAvAE7-AO6bUFrT-sswuOWbNqcew/exec',
            data,
            {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            }
        )
        .then(function (response) {
            return response;
        });
};
