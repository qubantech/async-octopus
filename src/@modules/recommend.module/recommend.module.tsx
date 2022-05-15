import React from 'react'
import {Container, Grid, Paper, Title, Image, ThemeIcon, List, Divider, Group, Text} from '@mantine/core'
import image1 from '../about.module/images/1.jpg'
import image2 from '../about.module/images/2.jpg'
import image3 from '../about.module/images/3.jpg'
import {CircleCheck, CircleDashed} from 'tabler-icons-react'

export const Recommend = () => {
	return (
		<Container>
			<Title my={20} order={2}>Рекомендации по оптимизации работы</Title>
			<Grid mb={20	}>
				<Grid.Col span={6}>
					<Paper style={{height: '435px'}} shadow="xs" p="md" py={15}>
						<Grid my={10}>
							<Grid.Col span={6}>
								<Image src={image1}/>
								<Text size={'sm'} color={'gray'} mt={10}>Камера 2</Text>
							</Grid.Col>
							<Grid.Col span={6}>
								<Title order={3}>Банкомат</Title>
								<List
									my={15}
									spacing="xs"
									size="md"
									center
									icon={
										<ThemeIcon color="teal" size={28} radius="xl">
											<CircleCheck size={20} />
										</ThemeIcon>
									}
								>
									<List.Item
										icon={
											<ThemeIcon color="orange" size={28} radius="xl">
												<CircleDashed size={20} />
											</ThemeIcon>
										}
									>3% уборок не в срок</List.Item>
									<List.Item
										icon={
											<ThemeIcon color="orange" size={28} radius="xl">
												<CircleDashed size={20} />
											</ThemeIcon>
										}>Достаточное количество дворников на районе</List.Item>
									<List.Item
										icon={
											<ThemeIcon color="red" size={28} radius="xl">
												<CircleDashed size={20} />
											</ThemeIcon>
										}
									>
										4 жалобы за последний месяц
									</List.Item>
								</List>
							</Grid.Col>
						</Grid>
						<Divider mt={20}/>
						<Group mt={20} position={'apart'}>
							<Text size={'lg'}>Итог: </Text>
							<Text weight={600} size={'lg'} color={'red'}>требует особого внимания</Text>
						</Group>
						<Divider label={'Рекомендация'} mt={20}/>
						<Text mt={20} mb={30} size={'sm'}>
							<List size={'sm'}>
								<List.Item> Стоит разобраться в каждом случае вывоза мусора не в срок</List.Item>
								<List.Item> Добавить вывоз в определенное время суток (утром по выходным)</List.Item>
							</List>
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Paper style={{height: '435px'}} shadow="xs" p="md" py={15}>
						<Grid my={10}>
							<Grid.Col span={6}>
								<Image src={image2}/>
								<Text size={'sm'} color={'gray'} mt={10}>Камера 3</Text>
							</Grid.Col>
							<Grid.Col span={6}>
								<Title order={3}>Набережная</Title>
								<List
									my={15}
									spacing="xs"
									size="md"
									center
									icon={
										<ThemeIcon color="teal" size={28} radius="xl">
											<CircleCheck size={20} />
										</ThemeIcon>
									}
								>
									<List.Item>0% уборок не в срок</List.Item>
									<List.Item>Оптимальное количество дворников на районе</List.Item>
									<List.Item
										icon={
											<ThemeIcon color="orange" size={28} radius="xl">
												<CircleDashed size={20} />
											</ThemeIcon>
										}
									>
										2 жалобы за последний месяц
									</List.Item>
								</List>
							</Grid.Col>
						</Grid>
						<Divider mt={20}/>
						<Group mt={20} position={'apart'}>
							<Text size={'lg'}>Итог: </Text>
							<Text weight={600} size={'lg'} color={'orange'}>требует внимания</Text>
						</Group>
						<Divider label={'Рекомендация'} mt={20}/>
						<Text mt={20} mb={30} size={'sm'}>
							<List size={'sm'}>
								<List.Item>
								Стоит переустановить мусорку или добавить их в более удобном месте на этом участке
								</List.Item>
							</List>
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Paper style={{height: '435px'}} shadow="xs" p="md" py={15}>
						<Grid my={10}>
							<Grid.Col span={6}>
								<Image src={image3}/>
								<Text size={'sm'} color={'gray'} mt={10}>Камера 7</Text>
							</Grid.Col>
							<Grid.Col span={6}>
								<Title order={3}>Красноармейская</Title>
								<List
									my={15}
									spacing="xs"
									size="md"
									center
									icon={
										<ThemeIcon color="teal" size={28} radius="xl">
											<CircleCheck size={20} />
										</ThemeIcon>
									}
								>
									<List.Item icon={
										<ThemeIcon color="orange" size={28} radius="xl">
											<CircleDashed size={20} />
										</ThemeIcon>
									}>2% уборок не в срок</List.Item>
									<List.Item>Оптимальное количество дворников на районе</List.Item>
									<List.Item>
										0 жалоб за последний месяц
									</List.Item>
								</List>
							</Grid.Col>
						</Grid>
						<Divider mt={20}/>
						<Group mt={20} position={'apart'}>
							<Text size={'lg'}>Итог: </Text>
							<Text weight={600} size={'lg'} color={'orange'}>требует внимания</Text>
						</Group>
						<Divider label={'Рекомендация'} mt={20}/>
						<Text mt={20} mb={30} size={'sm'}>
							<List size={'sm'}>
								<List.Item>
									Добавить вывоз в определенное время суток (утром по выходным)
								</List.Item>
							</List>
						</Text>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	)
}