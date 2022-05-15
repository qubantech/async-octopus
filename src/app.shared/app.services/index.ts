import axios from 'axios'


export const API_URL = 'https://api.quban.tech'

export const ENDPOINTS = {
	CONTRACTORS: () => API_URL + '/contractors',
	CAMERAS: () => API_URL + '/cameras',
	ZONES: () => API_URL + '/zones'
}

export const $api = axios.create({
	headers: {
		'Access-Control-Allow-Credentials': '*',
	},
	withCredentials: true,
})