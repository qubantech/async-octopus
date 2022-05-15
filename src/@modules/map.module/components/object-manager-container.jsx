import React from 'react'
import { ObjectManager } from 'react-yandex-maps'

// eslint-disable-next-line react/prop-types
const ObjectManagerContainer = ({ bins, onPlacemarkClick, objectManagerFilter }) => {
	return (
		<>
			<ObjectManager
				options={{
					clusterize: true,
					gridSize: 100,
				}}
				clusters={{
					preset: 'islands#greenClusterIcons',
				}}
				features={ bins }
				filter={ objectManagerFilter }
				instanceRef={ref =>

					ref?.objects.events.add('click', (e) => {
						const objectId = e.get('objectId')
						let obj = ref?.objects.getById(objectId)
						onPlacemarkClick(obj)
					})}
			/>
		</>
	)
}

export default ObjectManagerContainer