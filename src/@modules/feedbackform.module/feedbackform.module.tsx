import React from 'react'
import {Button, Container, Group, Paper, Textarea,Text, TextInput, Title} from '@mantine/core'
import {At} from 'tabler-icons-react'

export const FeedbackForm = () => {
	return(
		<Container mt={'lg'} style={{maxWidth: '640px'}}>
			<Paper radius="md" p="xl" withBorder>
				<Title mb={20} order={2}>Оставить обращение</Title>
				<TextInput
					placeholder="Иван Иванов"
					label="Имя и фамилия"
					required
					my={10}
				/>
				<TextInput label="Электронная почта" placeholder="mail@mail.ru" required my={10} icon={<At size={14} />} />
				<Textarea
					placeholder="..."
					label="Суть обращения"
					required
					my={10}
					minRows={10}
				/>
				<Group my={20} position={'apart'}>
					<Text>Загрузить дополнительные вложения</Text>
					<Button variant={'default'}>Добавить файл</Button>
				</Group>
				<Button mt={30} fullWidth >Отправить форму</Button>
			</Paper>
		</Container>
	)
}