import React from 'react'
import {createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Textarea, Button} from '@mantine/core'

const useStyles = createStyles((theme) => ({
	comment: {
		padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
	},

	body: {
		paddingTop: theme.spacing.sm,
		fontSize: theme.fontSizes.md,
	},

	content: {
		'& > p:last-child': {
			marginBottom: 0,
		},
	},
}))

interface CommentHtmlProps {
	postedAt: string;
	body: string;
	author: string,
	answer?: string
}

export function CommentHtml({postedAt, body, author, answer}: CommentHtmlProps) {
	const {classes} = useStyles()
	return (
		<Paper mt={30} radius="md" shadow={'md'} className={classes.comment}>
			<Group>
				<Avatar alt={author} radius="xl">U</Avatar>
				<div>
					<Text weight={600} size="sm">{author}</Text>
					<Text size="xs" color="dimmed">
						{postedAt}
					</Text>
				</div>
			</Group>
			<TypographyStylesProvider className={classes.body}>
				<div className={classes.content} dangerouslySetInnerHTML={{__html: body}}/>
			</TypographyStylesProvider>
			{answer &&
				<Paper ml={50} radius={'md'} p={15} mt={10} mb={20} style={{backgroundColor: '#D3F9D8'}} withBorder>
					<Group>
						<Avatar alt={author} radius="xl">A</Avatar>
						<div>
							<Text weight={600} size="sm">Администрация</Text>
						</div>
					</Group>
					<TypographyStylesProvider className={classes.body}>
						<div className={classes.content} dangerouslySetInnerHTML={{__html: answer}}/>
					</TypographyStylesProvider>
				</Paper>
				|| <Paper ml={50} radius={'md'} p={15} mt={10} mb={20} style={{backgroundColor: '#D3F9D8'}} withBorder>
					<Group>
						<Avatar alt={author} radius="xl">A</Avatar>
						<div>
							<Text weight={600} size="sm">Администрация</Text>
						</div>
					</Group>
					<Text>Отписать ответ</Text>
					<Textarea
						my={10}
						minRows={5}
					/>
					<Group grow>
						<Button color={'red'}>Удалить</Button>
						<Button>Отправить</Button>
					</Group>
				</Paper>

			}
		</Paper>
	)
}