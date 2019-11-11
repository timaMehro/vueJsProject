import * as axios from 'axios';

const BASE_URL = 'http://localhost:8080';

function upload(formData) {
    const url = `${BASE_URL}/src/assets\images/fileUploadImages`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}

export { upload }