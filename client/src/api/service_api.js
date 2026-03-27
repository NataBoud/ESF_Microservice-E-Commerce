import axios from 'axios';

const {
    REACT_APP_COMMON_DATA_SERVICE_URL,
    REACT_APP_AUTHENTICATION_SERVICE_URL,
    REACT_APP_SEARCH_SUGGESTION_SERVICE_URL
} = process.env

export const authServiceAPI = axios.create({
    // Si la variable vaut "/api/auth", axios tapera sur http://localhost:3000/api/auth
    baseURL: REACT_APP_AUTHENTICATION_SERVICE_URL
})

export const commonServiceAPI = axios.create({
    baseURL: REACT_APP_COMMON_DATA_SERVICE_URL
})

export const searchSuggestionServiceAPI = axios.create({
    baseURL: REACT_APP_SEARCH_SUGGESTION_SERVICE_URL
})