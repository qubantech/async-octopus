import {Button, createStyles, Paper, Title, Text, Group, ColorSwatch} from '@mantine/core'
import React from 'react'
import './animate.css'

const useStyles = createStyles((theme) => ({
	card: {
		height: 300,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	maintitle: {
		fontFamily: `${theme.fontFamily}`,
		fontWeight: 600,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 24,
		marginTop: theme.spacing.xs,
	},

	title: {
		fontFamily: `${theme.fontFamily}`,
		fontWeight: 700,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 30,
		marginTop: theme.spacing.xs,
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase',
	},
}))

export const CamCard = (props:{img:any, subtitle: string, title: string}) => {

	const { classes } = useStyles()

	return(
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(${props.img})` }}
			className={classes.card}
		>
			<div>
				{/*//@ts-ignore*/}
				<Text className={classes.category} size='xs'>
					{props.subtitle}
				</Text>
				<Title order={3} className={classes.title}>
					{props.title}
				</Title>
			</div>
			<Group position={'right'} align={'center'}>
				<Button fullWidth variant="white" color="dark">
					<ColorSwatch mr={15} size={12} className={'blink_me'} color={'red'}/>
					Просмотреть прямой эфир
				</Button>
			</Group>
		</Paper>
	)
}