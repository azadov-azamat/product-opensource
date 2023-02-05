import axios from 'axios'
import {BASE_URL, TOKEN} from "./constants"

const token = localStorage.getItem(TOKEN)

export const http_no_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json"
    }
})

export const http_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token
    }
})