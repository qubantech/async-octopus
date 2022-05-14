import React, { useState } from 'react'
import {MapGarbage} from './components/map-garbage'
import {Autocomplete, Container, Group, Select } from '@mantine/core'
import placemark from './assets/Placemark.svg'
import { MapPin, Search } from 'tabler-icons-react'
import { useMapStyles } from './components/map.style'

import  initialDistricts  from './assets/anapa-districts.json'


const initData = [
	{
		coordinates: [44.900510, 37.320609],
		value: 'Cam 1'
	},
	{
		coordinates: [44.898163, 37.317609],
		value: 'Cam 2'
	},
]

const initCameras = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'id': 0,
			'geometry': {
				'type': 'Point',
				'coordinates': [
					44.898163,
					37.317609
				]
			},
			'properties': {
				'hintContent': 'Камера 1',
				'title': 'Камера 1',
				'category': 'Полная',
				'district': 'Район 1',
				'contractor': 'ООО МАЛИНА'
			},
			'options': {
				'iconLayout': 'default#image',
				'iconImageHref': placemark,
				'iconImageSize': [30, 49],
			}
		},
		{
			'type': 'Feature',
			'id': 0,
			'geometry': {
				'type': 'Point',
				'coordinates': [
					44.900510,
					37.320609
				]
			},
			'properties': {
				'hintContent': 'Камера 1',
				'title': 'Камера 1',
				'category': 'Полная',
				'district': 'Район 1',
				'contractor': 'ООО МАЛИНА'

			},
			'options': {
				iconLayout: 'default#image',
				iconImageHref: placemark,
				iconImageSize: [30, 49],
			}
		},
	]
}


export const Map = () => {
	const { classes } = useMapStyles()

	const [mapState, setMapState] = useState({center: [44.8857, 37.31992], zoom: 13})
	const [camera, setCamera] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [districts, setDistricts] = useState(initialDistricts)

	const [cameras, setCameras] = useState(initCameras)

	const [category, setCategory] = useState('')
	const [district, setDistrict] = useState('')
	const [contractor, setContractor] = useState('')

	// useEffect(() => {
	// 	const tempCameras = {
	// 		'type': 'FeatureCollection',
	// 		'features': []
	// 	}
	//
	// 	containerList.watchedObject.forEach((element:any, index:number) => {
	// 		const tempElement = {
	// 			'type': 'Feature',
	// 			'id': index,
	// 			'geometry': {
	// 				'type': 'Point',
	// 				'coordinates': [
	// 					element.location.latitude,
	// 					element.location.longitude
	// 				]
	// 			},
	// 			'properties': {
	// 				'title': element.title,
	// 				'description': element.description,
	// 				'trashTypeIdList': element.trashTypeIdList,
	// 				'address': element.address,
	// 			},
	// 			'options': {
	// 				iconLayout: 'default#image',
	// 				iconImageHref: placemark,
	// 				iconImageSize: [30, 49],
	// 			}
	// 		}
	// 		tempCameras.features.push(tempElement)
	// 	})
	// 	setCameras(tempCameras)
	// 	setObjectManagerFilter(() => (object) => object.properties.trashTypeIdList.includes(0))
	// }, [])

	const data = Object.entries(cameras)[1]
	console.log('data: ', data)


	const onCameraChange = (value: string) => {
		console.log('here')
		setCamera(value)
		const obj = initData.find(o => o.value === value)
		console.log(obj)

		if (obj !== undefined) {
			const newMapState = {center: obj.coordinates, zoom: 15}
			setMapState(newMapState)
		}
	}

	const onOpenInfo = () => {
		const temp = !isOpen
		setIsOpen(temp)
	}

	return (
		<div style={{position: 'relative'}}>
			<Container
				sx={{
					position: 'absolute',
					zIndex: 500,
					backgroundColor: '#FFFFFF',
					padding: '20px',
					marginTop: '10px',
					left: 0,
					right: 0,
					marginLeft: 'auto',
					marginRight: 'auto',
					// boxShadow: '0px 10px 15px darkGrey',
					border: '1.11343px solid #EAEBEF',
					borderRadius: '9px',
					width: '1000px',
				}}
			>
				<Group sx={{alignItems: 'end'}}>
					<Autocomplete
						icon={ <><MapPin color={ 'red' }/>  </> }
						placeholder='Выберите камеру'
						value={camera}
						data={initData}
						zIndex={600}
						onChange={ onCameraChange }
						radius={ 'lg' }
						size={ 'md' }
						sx={{
							width: '300px',
						}}
						rightSection={<Search color={ 'gray' }/>}
						rightSectionWidth={50}

					/>
					<Select
						label='Категория'
						placeholder='Все категории'
						zIndex={600}
						sx={{ width: '200px'}}
						// value={ category }
						// onChange={ () => setCategory(category) }
						data={[
							{ value: '', label: 'Все категории' },
							{ value: 'Полная', label: 'Полные' },
							{ value: 'Пустые', label: 'Пустые' },
						]}
					/>
					<Select
						label='Район'
						placeholder='Все районы'
						sx={{width: '200px'}}
						zIndex={600}
						// value={ district }
						// onChange={ () => setDistrict }
						data={[
							{ value: '', label: 'Все районы' },
							{ value: 'район 1', label: 'район 1' },
							{ value: 'район 2', label: 'район 2' },
							{ value: 'район 3', label: 'район 3' },
							{ value: 'район 4', label: 'район 4' },
						]}
					/>
					<Select
						label='Подрядчик'
						placeholder='Все подрядчики'
						sx={{width: '200px'}}
						zIndex={600}
						// value={ contractor }
						// onChange={ () => setContractor }
						data={[
							{ value: '', label: 'Все подрядчики' },
							{ value: 'ООО МАЛИНА', label: 'ООО МАЛИНА' },
							{ value: 'ООО ВИШНЯ', label: 'ООО ВИШНЯ' },
							{ value: 'ООО ЯГОДА', label: 'ООО ЯГОДА' },
							{ value: 'ООО ЯБЛОКО', label: 'ООО ЯБЛОКО' },
						]}
					/>
				</Group>
			</Container>
			<MapGarbage state={ mapState } cameras={ cameras } districts={ districts }/>
		</div>
	)
}