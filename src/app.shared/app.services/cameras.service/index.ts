import {Camera, Contractors, Snapshot, Zone, Event} from '../../app.models'
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

	async getEvents(id:number): Promise<Event> {
		const response = await $api.get<Event>(
			ENDPOINTS.EVENTS(id)
		)
		return response.data
	}

	async getSnapshot(id:number): Promise<Snapshot> {
		const response = await $api.get<Snapshot>(
			ENDPOINTS.SNAPSHOTS(id)
		)
		return response.data
	}

}

export const appCamerasService = new AppCamerasService()