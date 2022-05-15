import {ActionIcon, Button, Divider, Drawer, Group, Image, Modal, Select, Space, Tabs, Text, Timeline} from '@mantine/core'
import React, {FC, useEffect, useState} from 'react'
import {YMaps, Map, Polygon} from 'react-yandex-maps'
import ObjectManagerContainer from './object-manager-container'
import { useMapStyle } from '../map.style'

import  cameraImage  from '../assets/camera.svg'
import {ArrowNarrowRight, Check, Number3, Number4} from 'tabler-icons-react'
import {appCamerasService} from '../../../app.shared/app.services/cameras.service'
import {CommentHtml} from './comment'
import {CamModal} from '../../about.module/camModal'
import {useRecoilState} from 'recoil'
import {AuthState} from '../../../app.shell/shell.state'


interface MapGarbageProps {
	cameras: any,
	state: any,
	districts: any,
	objectManagerFilter: any,
}

const TabEvents = (props:{events:any}) => {
	console.log('evetn: ', props.events)

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
					title={ props.events[0] ? props.events[0].camera : '' }
					zIndex={ 800 }
					size={ 'xl' }
				>
					<Image src={ binPhoto } />


				</Modal>
				<Timeline active={5} bulletSize={24} lineWidth={4} sx={{marginTop: '20px',}}>

					{
						props.events.map((event:any) => {
							return (
								<Timeline.Item key={ event.id }
											   title={
												   <Group align={'center'} position={ 'apart' }>
													   <Text> { event.snapshot.name } </Text>
													   <ActionIcon onClick={ () => onBinEventClick(event.snapshot.imageUrl) } className={classes.arrowButton} size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>
														   <ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>
													   </ActionIcon>
												   </Group>
											   }
								>
									<Text color="dimmed" size="sm">Дата: { event.snapshot.time } </Text>
									{/*<Text size="xs" mt={4}>2 hours ago</Text>*/}
									<Space h={ 50 } />
								</Timeline.Item>
							)
						})
					}


					{/*<Timeline.Item bullet={<Check size={18}/>}*/}
					{/*			   title={*/}
					{/*				   <Group align={'center'} position={ 'apart' }>*/}
					{/*					   <Text>Урна переполнена</Text>*/}
					{/*					   <ActionIcon onClick={ () => onBinEventClick('Фоточка мусорки') } className={classes.arrowButton} size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>*/}
					{/*						   <ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>*/}
					{/*					   </ActionIcon>*/}
					{/*				   </Group>*/}
					{/*			   }*/}
					{/*>*/}
					{/*	<Space h={ 50 } />*/}
					{/*</Timeline.Item>*/}

					{/*<Timeline.Item bullet={<Check size={18} />} title={*/}
					{/*	<Group align={'center'} position={ 'apart' }>*/}
					{/*		<Text>Урна пуста</Text>*/}
					{/*		<ActionIcon  className={classes.arrowButton}  size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>*/}
					{/*			<ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>*/}
					{/*		</ActionIcon>*/}
					{/*	</Group>*/}
					{/*}>*/}
					{/*	<Space h={ 50 } />*/}
					{/*</Timeline.Item>*/}

					{/*<Timeline.Item bullet={<Number3 size={12} />} lineVariant="dashed" title={*/}
					{/*	<Group align={'center'} position={ 'apart' }>*/}
					{/*		<Text>В урне новый мусор</Text>*/}
					{/*		<ActionIcon  className={classes.arrowButton}  size={'lg'} variant={ 'filled' } sx={{backgroundColor: '#F6F6F6'}}>*/}
					{/*			<ArrowNarrowRight size={ 28 }  color={ '#75CC72' }/>*/}
					{/*		</ActionIcon>*/}
					{/*	</Group>*/}
					{/*}>*/}
					{/*	<Space h={ 50 } />*/}
					{/*</Timeline.Item>*/}

					{/*<Timeline.Item title="" bullet={<Number4 size={12} />}>*/}
					{/*	<Space h={ 50 } />*/}
					{/*</Timeline.Item>*/}
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
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			{/*<Divider sx={{marginBottom: '20px'}}/>*/}
			<Image
				radius='md'
				src={ cameraImage }
				alt='camera'
				sx={{marginTop: '20px'}}
			/>
			<CamModal isOpen={isOpen} setOpen={setOpen}/>
			<Button onClick={() => setOpen(true)} className={ classes.button } sx={{width: '100%', color: '#5EB059', backgroundColor: '#EEFAEF', marginTop: '10px'}}>Посмотреть камеру</Button>
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
		const [selectedPoint, setSelectedPoint] = useState<any>()
		const [pointDrawerState, setPointDrawerState] = useState<boolean>(false)

		const [events, setEvents] = useState([{id: 0, snapshots:{id: 0, name: '', imageUrl: '', time: ''}}])
		const [ auth, setAuth] = useRecoilState(AuthState)

		const onPlacemarkClick = (point: any) => {
			setSelectedPoint(point)
			setPointDrawerState(true)
			console.log(point)
		}

		useEffect(() => {
			if (selectedPoint){
				const tempEvents: any[] = []
				console.log('11111: ', selectedPoint.properties.events)
				selectedPoint.properties.events.map((event:any) => {
					appCamerasService.getEvents(selectedPoint.id)
						.then((respEvent) => {
							appCamerasService.getSnapshot(respEvent.snapshots[0].id)
								.then((respSnap) => {
									const tempEvent = {
										'id': respEvent.id,
										'camera': selectedPoint.properties.title,
										'snapshot': {
											'id': respSnap.id,
											'name': respSnap.objectClasses[0].nameToken,
											'imageUrl': respSnap.time,
											'time': respSnap.imageUrl
										}
									}
									tempEvents.push(tempEvent)
								})
						})
				})

				setEvents(tempEvents)
				console.log('useeff: ', tempEvents)
			}
		}, [pointDrawerState])

		return <>
			<YMaps>
				{/* @ts-ignore*/}
				<Map state={ state } width={'100%'} height={'100vh'}>
					{

						cameras.features.length > 2 &&
						<ObjectManagerContainer
							bins={ cameras }
							onPlacemarkClick={ onPlacemarkClick }
							objectManagerFilter={ objectManagerFilter }
						/>
					}
					{
						districts  &&
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
			{
				selectedPoint &&
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
							<TabEvents events={ events }/>
						</Tabs.Tab>
						<Tabs.Tab label="Отзывы" sx={{fontWeight: 600}}>
							{auth &&
								<CommentHtml postedAt={'3 дня назад'}
											 body={'Живу рядом с этой мусоркой и вечно на выходных она заполнена мусором. Прошу разобраться в этой ситуации.'}
											 author={'Иван Иванов'}
								/>
							||
							<CommentHtml postedAt={'3 дня назад'}
										 body={'Живу рядом с этой мусоркой и вечно на выходных она заполнена мусором. Прошу разобраться в этой ситуации.'}
										 author={'Иван Иванов'}
										 answer={'По результатам Вашего обращения проведена проверка и изменено расписание коммунальных служб. Спасибо за обращение!'}
							/>}
						</Tabs.Tab>
					</Tabs>

				</Drawer>
			}
		</>
	}