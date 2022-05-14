import {Contractors} from '../../app.models'
import {$api, ENDPOINTS} from '../index'

export class AppContractorService {

	async getContractors(): Promise<Contractors[]> {
		const response = await $api.get<Contractors[]>(
			ENDPOINTS.CONTRACTORS()
		)
		return response.data
	}
}

export const appContractorService = new AppContractorService()