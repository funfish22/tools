import axios from 'axios';

export const translationSearchQuery = (text, conversion, match) => {
    const data = `name=${encodeURI(text)}&action=query&conversion=${conversion}&match=${match}`;
    return axios
        .post(
            'https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec',
            data
        )
        .then(function (response) {
            return response;
        });
};
