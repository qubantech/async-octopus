import {HeroTitle} from './hero-title.layout'
import {SubGrid} from '../../app.shared/app.layouts/sub-grid.layout'
import React, {useState} from 'react'
import {Button, Container, Grid, Group, Modal, Title, Text} from '@mantine/core'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import {CamCard} from './cam.card'
import {PrevIcon} from '@mantine/core/lib/components/Pagination/icons'
import {ArrowLeft, ArrowRight, MapPin} from 'tabler-icons-react'


export const About = () => {
	const cards = [
		{
			img: image2,
			title: 'Калинина-Набережная',
			subtitle: 'Камера 1'
		},
		{
			img: image1,
			title: 'Банкомат',
			subtitle: 'Камера 6'
		},
		{
			img: image3,
			title: 'Краснодар-Терская',
			subtitle: 'Камера 5'
		},
		{
			img: image4,
			title: 'Краснодар-Терская',
			subtitle: 'Камера 4'
		},
		{
			img: image5,
			title: 'Набережная',
			subtitle: 'Камера 3'
		},
		{
			img: image6,
			title: 'Сабурова-Ленина',
			subtitle: 'Камера 2'
		},
		{
			img: image7,
			title: 'Старинная Анапа',
			subtitle: 'Камера 7'
		}
	]
	const [isOpen, setOpen] = useState<boolean>(false)

	return <>
		<HeroTitle/>
		<Container>
			<Modal title={'Камера онлайн трансляция'} size={'xl'} opened={isOpen} onClose={() => setOpen(false)}>
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
			<Title order={2} my={30}>Камеры города </Title>
			<Grid mb={30}>
				{cards.map((el, index) => {
					return (
						<Grid.Col key={index} span={4}>
							<CamCard setOpen={setOpen} img={el.img} subtitle={el.subtitle} title={el.title}/>
						</Grid.Col>
					)
				}
				)}
			</Grid>
		</Container>
	</>
}