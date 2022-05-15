import React, {useEffect, useState} from 'react'
import {MapGarbage} from './components/map-garbage'
import {Autocomplete, Container, Group, Select } from '@mantine/core'
import placemark from './assets/Placemark.svg'
import { MapPin, Search } from 'tabler-icons-react'

import  initialDistricts  from './assets/anapa-districts.json'
import {appCamerasService} from '../../app.shared/app.services/cameras.service'
import {appContractorService} from '../../app.shared/app.services/contractors.service'
import {Zone} from '../../app.shared/app.models'


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
				'category': 'empty',
				'district': '2',
				'contractor': '2',
				'address': 'Анапа, Краснодарский край, Россия'
			},
			'options': {
				'iconLayout': 'default#image',
				'iconImageHref': placemark,
				'iconImageSize': [30, 49],
			}
		},
		{
			'type': 'Feature',
			'id': 1,
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
				'category': 'full',
				'district': '2',
				'contractor': '9',
				'address': 'Анапа, Краснодарский край, Россия'

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
	function getRandomInt(max:number) {
		return Math.floor(Math.random() * max) + 1
	}

	const [objectManagerFilter, setObjectManagerFilter] = useState(() => (object:any) => true)

	const [districts, setDistricts] = useState<Zone[]>()
	const [filterDistricts, setFilterDistricts] = useState([{value: '', label: 'Все районы'}])

	const [filterContractors, setFilterContractors] = useState([{value: '', label: 'Все подрядчики'},{value: 'admin', label: 'Администрация'}])

	const [cameras, setCameras] = useState(initCameras)

	useEffect(() => {
		appCamerasService.getZones()
			.then((resp)=> {
				setDistricts(resp)
				const tempFilter = resp.map((item) => {
					return {
						value: item.id.toString(),
						label: item.nameToken
					}
				})
				const dist = filterDistricts.concat(tempFilter)
				setFilterDistricts(dist)

				appContractorService.getContractors()
					.then(resp => {
						const tempFilter = resp.map((item) => {
							return {
								value: item.id.toString(),
								label: item.legalEntityName
							}
						})
						const contr = filterContractors.concat(tempFilter)
						setFilterContractors(contr)

						appCamerasService.getCameras()
							.then((resp) => {
								const tempCameras = {
									'type': 'FeatureCollection',
									'features': []
								}
								resp.map((item:any) => {
									const categoryID = getRandomInt(2) == 1 ?  'full' : 'empty'
									const districtID = getRandomInt(13)
									const contractorID = getRandomInt(9)

									console.log('5555555: ', item.events )


									const tempElement = {
										'type': 'Feature',
										'id': item.id,
										'geometry': {
											'type': 'Point',
											'coordinates': [
												item.latitude,
												item.longitude
											]
										},
										'properties': {
											'title': 'Камера ' + item.id,
											'description': item.description,
											'address': item.address,
											'category':{
												'id': categoryID,
											},
											'district': {
												'id': districtID.toString(),
												//@ts-ignore
												'title': dist[districtID].nameToken
											},
											'contractor': {
												'id':  contractorID.toString(),
												'title': contr[contractorID].label
											},
											'events': item.events,
											'hintContent': item.address,
										},
										'options': {
											iconLayout: 'default#image',
											iconImageHref: placemark,
											iconImageSize: [30, 49],
										}
									}
									// @ts-ignore
									tempCameras.features.push(tempElement)
								})
								setCameras(tempCameras)
							})

					})
			})


	},[])


	const onDistrictChange = (district: string) => {
		setObjectManagerFilter( () => (object:any) => {
			const isCategory = category === '' || object.properties.category.id === category
			const isDistrict = district === '' || object.properties.district.title === district
			const isContractor = contractor === '' || object.properties.contractor.title === contractor
			return isCategory && isDistrict && isContractor
		})

		setDistrict(district)
	}

	const onContractorChange = (contractor: string) => {
		setObjectManagerFilter( () => (object:any) => {
			const isCategory = category === '' || object.properties.category === category
			const isDistrict = district === '' || object.properties.district === district
			const isContractor = contractor === '' || object.properties.contractor === contractor
			return isCategory && isDistrict && isContractor
		})

		setContractor(contractor)
	}

	const onCategoryChange = (category: string) => {
		setObjectManagerFilter( () => (object:any) => {
			const isCategory = category === '' || object.properties.category === category
			const isDistrict = district === '' || object.properties.district === district
			const isContractor = contractor === '' || object.properties.contractor === contractor
			return isCategory && isDistrict && isContractor
		})

		setCategory(category)
	}


	const [mapState, setMapState] = useState({center: [44.8857, 37.31992], zoom: 13})
	const [camera, setCamera] = useState('')
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

	const [category, setCategory] = useState('')
	const [district, setDistrict] = useState('')
	const [contractor, setContractor] = useState('')

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
						value={ category }
						//@ts-ignore
						onChange={ onCategoryChange }
						data={[
							{ value: '', label: 'Все категории' },
							{ value: 'full', label: 'Полные' },
							{ value: 'empty', label: 'Пустые' },
						]}
					/>
					<Select
						label='Район'
						placeholder='Все районы'
						sx={{width: '200px'}}
						zIndex={600}
						value={ district }
						//@ts-ignore
						onChange={ onDistrictChange }
						data={ filterDistricts }
					/>
					<Select
						label='Подрядчик'
						placeholder='Все подрядчики'
						sx={{width: '200px'}}
						zIndex={600}
						value={ contractor }
						//@ts-ignore
						onChange={ onContractorChange }
						data={ filterContractors }
					/>
				</Group>
			</Container>
			<MapGarbage
				state={ mapState }
				cameras={ cameras }
				districts={ districts }
				objectManagerFilter={ objectManagerFilter }
			/>
		</div>
	)
}