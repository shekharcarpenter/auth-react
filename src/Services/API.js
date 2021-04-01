import axios from 'axios';


export default class API {
    baseUrl = 'https://be.bhyve-app.com:3020/'

    async setToken(token) {
        try {
            await localStorage.setItem('token', token)
        } catch (error) {
            console.log(error);
        }
    }

    async PostApi(data, url) {
        console.log('react')
        try {
            let response = axios.post(
                this.baseUrl + url,
                data
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error
                })
            return response
        } catch (error) {
            return error
        }
    }

    async AuthPostApi(data, url) {
        console.log('react')
        let token = localStorage.getItem('token')

        try {
            let response = axios.post(
                this.baseUrl + url,
                data,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error
                })
            return response
        } catch (error) {
            return error
        }
    }


    async GetWithParamsApi(url, params) {
        let token = localStorage.getItem('token')
        try {
            let response = axios.get(
                this.baseUrl + url,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                    params:params
                }
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error.response
                })
            return response
        } catch (error) {
            console.log(error);
        }
    }

    async GetApi(url) {
        let token = localStorage.getItem('token')
        try {
            let response = axios.get(
                this.baseUrl + url,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error.response
                })
            return response
        } catch (error) {
            console.log(error);
        }
    }

};