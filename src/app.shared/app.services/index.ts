import axios from 'axios'


export const API_URL = 'http://192.168.240.32:5000'

export const ENDPOINTS = {
	CONTRACTORS: () => API_URL + '/contractors',
}

export const $api = axios.create({
	headers: {
		'Access-Control-Allow-Credentials	': '*',
	},
	withCredentials: true,
})