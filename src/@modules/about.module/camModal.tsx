import React from 'react'
import {Button, Group, Modal, Text} from '@mantine/core'
import {ArrowLeft, ArrowRight, MapPin} from 'tabler-icons-react'

export const CamModal = (props:{isOpen: boolean, setOpen: (b:boolean) => void}) => {


	return(
		<Modal zIndex={1000} title={'Камера онлайн трансляция'} size={'xl'} opened={props.isOpen} onClose={() => props.setOpen(false)}>
			<iframe width={'100%'} height={'600'} src="https://rtsp.me/embed/GsrAG9bN/" frameBorder="0"
				allowFullScreen></iframe>
			<Group mt={20} position={'apart'}>
				<Button variant={'default'}> <Group align={'start'}><ArrowLeft size={22}/>
					<Text>Предыдущая камера</Text></Group></Button>
				<Button><Group align={'start'}> <MapPin size={20}/>
					<Text>Перейти к карте</Text> </Group></Button>
				<Button variant={'default'}><Group align={'start'}>
					<Text>Следующая камера</Text><ArrowRight size={22}/></Group></Button>
			</Group>
		</Modal>
	)
}