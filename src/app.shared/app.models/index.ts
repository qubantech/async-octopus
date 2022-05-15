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

type Event = {
	id: number,
	videoUrl: string,
	startTime: string,
	endTime: string,
	snapshots: {
		id: number,
		time: string,
		imageUrl: string,
		createdAt: string,
		updatedAt: string,
		event: number
	}
}

type Snapshot = {
	id: number,
	time: string,
	imageUrl: string,
	createdAt: string,
	updatedAt: string,
	event: number,
	objectClasses: {
		id: number,
		nameToken: string
		description: string
		createdAt: string,
		updatedAt: string,
		SnapshotObjectClasses: {
			id: number,
			snapshotID: number,
			classId: number
		}[]
	}[]
}

export type {
	Contractors,
	Camera,
	Zone,
	Event,
	Snapshot
}