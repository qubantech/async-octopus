import {ActionIcon, Button, Divider, Drawer, Group, Image, Modal, Select, Space, Tabs, Text, Timeline} from '@mantine/core'
import React, {FC, useState} from 'react'
import {YMaps, Map, Polygon} from 'react-yandex-maps'
import ObjectManagerContainer from './object-manager-container'
import { useMapStyle } from '../map.style'

import  cameraImage  from '../assets/camera.svg'
import {ArrowNarrowRight, Check, Number3, Number4} from 'tabler-icons-react'


interface MapGarbageProps {
	cameras: any,
	state: any,
	districts: any,
	objectManagerFilter: any,
}

const TabEvents = () => {
	const [category, setCategory] = useState('')
	const { classes } = useMapStyle()
	const [isBinOpen, setIsBinOpen] = useState(false)
	const [binPhoto, setBinPhoto] = useState('')

	const onBinEventClick = (photo:string) => {
		setBinPhoto(photo)
		setIsBinOpen(true)
	}

	const BinTimeline = () => {
		return (
			<>
				<Modal
					opened={isBinOpen}
					onClose={() => setIsBinOpen(false)}
					title="Адрес камеры"
					zIndex={ 800 }
				>
					<Text>{ binPhoto }</Text>
				</Modal>
				<Timeline active={2} bulletSize={24} lineWidth={4} sx={{marginTop: '20px',}}>
					<Timeline.Item bullet={<Check size={18}/>}
								   title={
									   <Group align={'center'} position={ 'apart' }>
										   <Text>Урна переполнена</Text>
										   <ActionIcon onClick={ () => onBinEventClick('Фоточка мусорки') } className={classes.arrowButton} size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>
											   <ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>
										   </ActionIcon>
									   </Group>
								   }
					>
						<Space h={ 50 } />
					</Timeline.Item>

					<Timeline.Item bullet={<Check size={18} />} title={
						<Group align={'center'} position={ 'apart' }>
							<Text>Урна пуста</Text>
							<ActionIcon  className={classes.arrowButton}  size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>
								<ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>
							</ActionIcon>
						</Group>
					}>
						<Space h={ 50 } />
					</Timeline.Item>

					<Timeline.Item bullet={<Number3 size={12} />} lineVariant="dashed" title={
						<Group align={'center'} position={ 'apart' }>
							<Text>В урне новый мусор</Text>
							<ActionIcon  className={classes.arrowButton}  size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>
								<ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>
							</ActionIcon>
						</Group>
					}>
						<Space h={ 50 } />
					</Timeline.Item>

					<Timeline.Item title="" bullet={<Number4 size={12} />}>
						<Space h={ 50 } />
					</Timeline.Item>
				</Timeline>
			</>
		)
	}

	return (
		<>
			<Select
				placeholder='Выбрать категорию'
				variant={ 'filled' }
				// rightSection={<ChevronDownIcon />}
				sx={{ width: '', marginTop: '20px'}}
				value={ category }
				//@ts-ignore
				onChange={ setCategory }
				data={[
					{ value: 'full', label: 'Полные' },
					{ value: 'empty', label: 'Пустые' },
				]}
			/>
			<Text weight={ 600 } sx={{marginTop: '20px'}}>Суббота, 14 мая 2022г</Text>
			<Tabs variant="pills" sx={{marginTop: '20px'}}>
				<Tabs.Tab className={classes.periodButton} label="Сегодня" color={'#EEFAEF'} sx={{border: '1px solid #EAEBEF'}}>
					<BinTimeline/>
				</Tabs.Tab>
				<Tabs.Tab className={classes.periodButton} label="Вчера" sx={{border: '1px solid #EAEBEF'}}>
					<BinTimeline/>
				</Tabs.Tab>
				<Tabs.Tab className={classes.periodButton} label="Неделя" sx={{border: '1px solid #EAEBEF'}}>
					<BinTimeline/>
				</Tabs.Tab>
				<Tabs.Tab className={classes.periodButton} label="Месяц" sx={{border: '1px solid #EAEBEF'}}>
					<BinTimeline/>
				</Tabs.Tab>
			</Tabs>

		</>
	)
}

const TabOverview = () => {
	const { classes } = useMapStyle()

	return (
		<>
			{/*<Divider sx={{marginBottom: '20px'}}/>*/}
			<Image
				radius='md'
				src={ cameraImage }
				alt='camera'
				sx={{marginTop: '20px'}}
			/>

			<Button className={ classes.button } sx={{width: '100%', color: '#5EB059', backgroundColor: '#EEFAEF', marginTop: '10px'}}>Посмотреть камеру</Button>
			<Divider size={ 'sm' } sx={{marginTop: '20px'}}/>
			<Group direction={ 'row' } align={ 'center' } position={ 'apart' } sx={{
				border: '1px solid #EAEBEF',
				borderRadius: '6px',
				padding: '20px 16px',
				marginTop: '20px',
			}}>
				<Text weight={ 600 }>Выбросить мусор 14.05</Text>
				<Text color={ '#5EB059' }
					  weight={ 600 }
					  sx={{
						  backgroundColor: '#EEFAEF',
						  padding: '5px 10px',
					  }}>
					Выполнено
				</Text>
			</Group>
		</>
	)
}

export const MapGarbage: FC<MapGarbageProps> =
	({
		cameras,
		state,
		districts,
		objectManagerFilter
	}) => {
		const [selectedPoint, setSelectedPoint] = useState(cameras.features[0])
		const [pointDrawerState, setPointDrawerState] = useState(false)


		const onPlacemarkClick = (point: any) => {
			setSelectedPoint(point)
			setPointDrawerState(true)
			console.log(point)
		}

		return <>
			<YMaps>
				{/* @ts-ignore*/}
				<Map state={ state } width={'100%'} height={'100vh'}>
					<ObjectManagerContainer
						bins={ cameras }
						onPlacemarkClick={ onPlacemarkClick }
						objectManagerFilter={ objectManagerFilter }
					/>
					{
						districts !== undefined &&
						districts.map((district:any) => {
							return (
								<Polygon
									key={district.id}
									geometry={[district.gps]}
									options={{
										fillColor: '#EEFAEF',
										strokeColor: '#5EB059',
										opacity: 0.5,
										strokeWidth: 2,
									}}
									properties={{
										hintContent: district.nameToken
									}}
									modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
								/>
							)
						})
					}
				</Map>
			</YMaps>
			<Drawer
				opened={ pointDrawerState }
				onClose={() => setPointDrawerState(false)}
				title={ <Text size={ 'xl' } weight={ '600' }>{ selectedPoint.properties.title }</Text> }
				padding='xl'
				size='xl'
				zIndex={ 700 }
			>
				<Text>{ selectedPoint.properties.address }</Text>
				<Group>
					<Text
						color={ '#5EB059' }
						weight={ 600 }
						sx={{
							backgroundColor: '#EEFAEF',
							padding: '5px 10px',
							marginTop: '20px',
						}}
					>
						{ selectedPoint.properties.contractor.title }
					</Text>
				</Group>
				<Tabs sx={{marginTop: '40px'}}>
					<Tabs.Tab label="Обзор" sx={{fontWeight: 600}}>
						<TabOverview/>
					</Tabs.Tab>
					<Tabs.Tab label="События" sx={{fontWeight: 600}}>
						<TabEvents/>
					</Tabs.Tab>
					<Tabs.Tab label="Отзывы" sx={{fontWeight: 600}}>Settings tab content</Tabs.Tab>
				</Tabs>

			</Drawer>
		</>
	}