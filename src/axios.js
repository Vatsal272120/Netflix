// 02f3dcb2eebfd92edbf81089d7294c86

import axios from axios

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

export default instance;