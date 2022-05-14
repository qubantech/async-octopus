import React, {FC, useState} from 'react'
import {YMaps, Map, Polygon} from 'react-yandex-maps'
import ObjectManagerContainer from './object-manager-container'


interface MapGarbageProps {
	cameras: any,
	state: any,
	districts: any,
}

export const MapGarbage: FC<MapGarbageProps> =
	({
		cameras,
		state,
		districts,
	}) => {
		const [selectedPoint, setSelectedPoint] = useState(cameras.features[0])
		const [pointDrawerState, setPointDrawerState] = useState(false)
		// const [bins, use]



		const onPlacemarkClick = (point: any) => {
			setSelectedPoint(point)
			setPointDrawerState(true)
			console.log(point)
		}

		const  generateColor = () => {
			return '#' + Math.floor(Math.random()*16777215).toString(16)
		}

		return <>
			<YMaps>
				{/* @ts-ignore*/}
				<Map state={ state } width={'100%'} height={'100vh'}>
					<ObjectManagerContainer
						bins={ cameras }
						onPlacemarkClick={ onPlacemarkClick }
						// objectManagerFilter={ objectManagerFilter }
					/>
					{
						districts.map((district:any) => {
							return (
								<Polygon
									key={district.id}
									geometry={[district.coordinates]}
									options={{
										fillColor: '#EEFAEF',
										strokeColor: '#5EB059',
										opacity: 0.5,
										strokeWidth: 2,
									}}
									properties={{
										hintContent: district.id
									}}
									modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
								/>
							)
						})
					}
				</Map>
			</YMaps>
		</>
	}