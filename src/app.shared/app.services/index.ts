import axios from 'axios'


export const API_URL = 'https://api.quban.tech'

export const ENDPOINTS = {
	CONTRACTORS: () => API_URL + '/contractors',
}

export const $api = axios.create({
	headers: {
		'Access-Control-Allow-Credentials': '*',
	},
	withCredentials: true,
})