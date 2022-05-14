import React from 'react'
import {createStyles, Table, Progress, Anchor, Text, Group, ScrollArea} from '@mantine/core'

const useStyles = createStyles((theme) => ({
	progressBar: {
		'&:not(:first-of-type)': {
			borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
		},
	},
}))

interface TableReviewsProps {
	data: {
		title: string;
		reviews: { positive: number; negative: number };
	}[];
}

export function StatTable({data}: TableReviewsProps) {
	const {classes, theme} = useStyles()

	const rows = data.map((row, index) => {
		const totalReviews = row.reviews.negative + row.reviews.positive
		const positiveReviews = (row.reviews.positive / totalReviews) * 100
		const negativeReviews = (row.reviews.negative / totalReviews) * 100

		return (
			<tr key={row.title}>
				<td>
					<Text color={'brand'}>№{index+1}</Text>
				</td>
				<td>
					{row.title}
				</td>
				<td>
					<Group position="apart">
						<Text size="xs" color="teal" weight={700}>
							{positiveReviews.toFixed(0)}%
						</Text>
						<Text size="xs" color="red" weight={700}>
							{negativeReviews.toFixed(0)}%
						</Text>
					</Group>
					<Progress
						classNames={{bar: classes.progressBar}}
						sections={[
							{
								value: positiveReviews,
								color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
							},
							{
								value: negativeReviews,
								color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
							},
						]}
					/>
				</td>
			</tr>
		)
	})

	return (
		/*<ScrollArea>*/
		<Table verticalSpacing="sm">
			{/*<thead>*/}
			{/*	<tr>*/}
			{/*		<th>Book title</th>*/}
			{/*		<th>Reviews distribution</th>*/}
			{/*	</tr>*/}
			{/*</thead>*/}
			<tbody>{rows}</tbody>
		</Table>
		/*</ScrollArea>*/
	)
}