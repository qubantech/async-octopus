import React from 'react'
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core'
import { BrandGithub } from 'tabler-icons-react'

const BREAKPOINT = '@media (max-width: 1060px)'

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},

	inner: {
		position: 'relative',
		paddingTop: 200,
		paddingBottom: 140,

		[BREAKPOINT]: {
			paddingBottom: 80,
			paddingTop: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 48,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 42,
			lineHeight: 1.2,
		},
	},

	description: {
		marginTop: theme.spacing.xl,
		fontSize: 24,

		[BREAKPOINT]: {
			fontSize: 18,
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 2,

		[BREAKPOINT]: {
			marginTop: theme.spacing.xl,
		},
	},

	control: {
		height: 54,
		paddingLeft: 38,
		paddingRight: 38,

		[BREAKPOINT]: {
			height: 54,
			paddingLeft: 18,
			paddingRight: 18,
			flex: 1,
		},
	},

	githubControl: {
		borderWidth: 2,
		borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

		'&:hover': {
			backgroundColor: `${
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
			} !important`,
		},
	},
}))

export function HeroTitle() {
	const { classes, cx } = useStyles()
	const theme = useMantineTheme()

	return (
		<div className={classes.wrapper}>
			<Container className={classes.inner}>
				<h1 className={classes.title}>
					Вместе мы сделаем город чище
				</h1>

				<Text className={classes.description} color="dimmed">
					Оставьте отзыв - внесите свой вклад в чистое будущее
				</Text>

				<Group className={classes.controls}>
					<Button
						size="xl"
						className={classes.control}
					>
                        Открыть карту
					</Button>
					<Button
						size={'xl'}
						component="a"
						href="https://github.com"
						variant="outline"
						color={'dark'}
						className={cx(classes.control, classes.githubControl)}
					>
						Сообщить о правонарушении
					</Button>
				</Group>
			</Container>
		</div>
	)
}