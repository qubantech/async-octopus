import React from 'react'
import {ActionIcon, Badge, Button, Card, Group, Popover, SimpleGrid, Spoiler, Text, Title} from '@mantine/core'
import { useState } from 'react'
import {Bell, Notification, Settings} from 'tabler-icons-react'
import { Link, useNavigate } from 'react-router-dom'


export const Notifications = () => {

	const [ opened, setOpened ] = useState(false)
	const navigate = useNavigate()

	const NotificationButton = <ActionIcon onClick={() => setOpened((o) => !o)}>
		<Bell/>
	</ActionIcon>

	const DATA = [
		{
			title: 'Мусорка по адресу "Красноармейская 3" заполнена более 24 часов.',
			description: 'Ситуация поставлена на особый контроль системой, так как мусор должен был вынесен по расписанию.',
			time: 'Сегодня 11:12',
			link: 'Рассмотреть рекомендации'
		},
		{
			title: 'Мусорка по адресу "Красноармейская 3" уже более 12 часов заполнена.',
			description: 'Ситуация уже стоит на контроле. В частности рекомендуем увеличить количество людей вблизи этого направления.',
			time: 'Вчера 23:12',
			link: 'Подробности'
		},
		{
			title: 'Новая жалоба жителя по поводу мусорки "Северная 40".',
			description: 'Необходимо сформировать ответ в течении 3 дней.',
			time: 'Вчера 19:01',
			link: 'Посмотреть'
		},
	]

	const NotificationCard = ({
		title,
		description,
		time,
		link
	}: { title: string, description: string, time: string, link: string }) => {

		return <Card shadow={'md'} withBorder style={{cursor: 'pointer' }} >
			<Text size={'md'} weight={700} style={{ lineHeight: '1.1' }}>{title}</Text>
			<Text size={'sm'} style={{ lineHeight: '1.1' }} mt={'xs'}>{description}</Text>
			<Text size={'xs'} my={5} color={'gray'}>{time}</Text>
			<Button onClick={()=>navigate('/recommend')}>
				{link}
			</Button>
		</Card>
	}

	const onSettingsClick = () => {
		setOpened(false)
		navigate('/settings/notifications')
	}

	return <Popover
		opened={opened}
		onClose={() => setOpened(false)}
		target={NotificationButton}
		width={330}
		position="bottom"
		withArrow
	>
		<Group direction={'row'} position={'apart'} mb={'md'} style={{fontFamily: 'Greycliff CF'}}>
			<Group>
				<Title order={4} style={{verticalAlign: 'top' }}>
					Уведомления
				</Title>
			</Group>
			<ActionIcon onClick={onSettingsClick}>
				<Settings/>
			</ActionIcon>
		</Group>
		<Spoiler maxHeight={230} showLabel="Ещё уведомления" hideLabel="Скрыть уведомления">
			<Group direction={'column'}>
				{DATA.map(notification => <NotificationCard key={notification.link} {...notification}/>)}
			</Group>
		</Spoiler>
	</Popover>
}