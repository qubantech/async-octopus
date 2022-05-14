import React, {useEffect, useState} from 'react'
import {appContractorService} from '../../app.shared/app.services/contractors.service'
import {Contractors} from '../../app.shared/app.models'
import {useParams} from 'react-router-dom'
import {Breadcrumbs, Container, Group, Stack, Text, Grid, Title, Anchor, Paper, Avatar, ThemeIcon} from '@mantine/core'
import {CalendarTime, Mail, PhoneCalling, PhoneCheck} from 'tabler-icons-react'
import {StatsSegments} from './segmentstat.module'

export const ContractorsPage = () => {
	const items = [
		{title: 'Панель управления', href: '/control'},
		{title: 'Информация о поставщике', href: '#'},
	].map((item, index) => (
		<Anchor href={item.href} key={index}>
			{item.title}
		</Anchor>
	))

	const [contractors, setContractors] = useState<Contractors>({
		id: 0,
		legalEntityName: '',
		contactEmail: '',
		contactPhone: '',
		officialPhone: '',
		workStartTime: '',
		workEndTime: ''
	})
	const {id} = useParams()

	useEffect(() => {
		appContractorService.getContractors()
			.then(resp => {
				//@ts-ignore
				console.log(resp[id])
				setContractors(resp[Number(id) || 0])
			})

	}, [])


	return (
		<Container size={'md'}>
			<Breadcrumbs my={20}>{items}</Breadcrumbs>
			<Paper mb={20} shadow="xs" p="md">
				<Group position={'center'} spacing={10}>
					<Avatar color={'green'} size={50} radius={'xl'}>s</Avatar>
				</Group>
				<Title align={'center'} my={20} order={2}>{contractors.legalEntityName || 'sas'}</Title>
				<Grid>
					<Grid.Col span={3}>
						<Stack align={'center'} spacing={1}>
							<ThemeIcon size={50} my={10} variant="light" color="green">
								<Mail size={30}/>
							</ThemeIcon>
							<Stack spacing={1}>
								<Text size={'sm'} align={'center'} color={'gray'}>Email:</Text>
								<Text align={'center'}>{contractors.contactEmail}</Text>
							</Stack>
						</Stack>
					</Grid.Col>
					<Grid.Col span={3}>
						<Stack align={'center'} spacing={1}>
							<ThemeIcon size={50} my={10} variant="light" color="green">
								<PhoneCalling size={30}/>
							</ThemeIcon>
							<Stack spacing={1}>
								<Text size={'sm'} align={'center'} color={'gray'}>Телефон для официальных обращений:</Text>
								<Text align={'center'}>{contractors.officialPhone}</Text>
							</Stack>
						</Stack>
					</Grid.Col>
					<Grid.Col span={3}>
						<Stack align={'center'} spacing={1}>
							<ThemeIcon size={50} my={10} variant="light" color="green">
								<PhoneCheck/>
							</ThemeIcon>
							<Stack spacing={1}>
								<Text size={'sm'} color={'gray'}>Для взаимодействия с компанией:</Text>
								<Text align={'center'}>{contractors.contactPhone}</Text>
							</Stack>
						</Stack>
					</Grid.Col>
					<Grid.Col span={3}>
						<Stack align={'center'} spacing={1}>
							<ThemeIcon size={50} my={10} variant="light" color="green">
								<CalendarTime />
							</ThemeIcon>
							<Stack spacing={1}>
								<Text size={'sm'} align={'center'} color={'gray'}>Время работы:</Text>
								<Text align={'center'}>{contractors.workStartTime} - {contractors.workEndTime}</Text>
							</Stack>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper mb={20} shadow="xs" p="md">
				<StatsSegments
					total={'Общее количество исполенной работы'}
					diff={10}
					data={[{
						label: 'Выполнено успешно',
						count: '147650',
						part: 60,
						color: '#67BD63',
					}, {
						label: 'Выполнено с задержкой',
						count: '45600',
						part: 36,
						color: '#FF7917',
					},
					{
						label: 'Срыв нормативов',
						count: '6400',
						part: 4,
						color: 'red',
					}]
					}/>
			</Paper>
			<Paper shadow="xs" p="md">
				advice
			</Paper>
		</Container>
	)
}
