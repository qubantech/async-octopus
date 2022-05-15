import {Camera, Contractors, Zone} from '../../app.models'
import {$api, ENDPOINTS} from '../index'

export class AppCamerasService {

	async getCameras(): Promise<Camera[]> {
		const response = await $api.get<Camera[]>(
			ENDPOINTS.CAMERAS()
		)
		return response.data
	}

	async getZones(): Promise<Zone[]> {
		const response = await $api.get<Zone[]>(
			ENDPOINTS.ZONES()
		)
		return response.data
	}
}

export const appCamerasService = new AppCamerasService()