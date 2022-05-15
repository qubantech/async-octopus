type Contractors = {
	id: number,
	legalEntityName: string,
	contactEmail: string,
	contactPhone: string,
	officialPhone: string,
	workStartTime: string,
	workEndTime: string
}

type Camera = {
	id: number,
	address: string,
	latitude: string,
	longitude: string,
	events: {
		id: number,
		videoUrl: string,
		startTime: string,
		endTime: string,
		camera: 0
	}[]
}

type Zone = {
	id: number,
	nameToken: string,
	description: string,
	gps: number[][]
}

export type {
	Contractors,
	Camera,
	Zone
}