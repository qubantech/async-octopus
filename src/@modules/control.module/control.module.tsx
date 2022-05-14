import React, {useEffect, useState} from 'react'
import {Button, Container, Group, Title, Paper, Grid, Text, Select, Progress, ColorSwatch} from '@mantine/core'
import {
	AnimatedAxis, // any of these can be non-animated equivalents
	AnimatedGrid,
	AnimatedLineSeries,
	XYChart,
	Tooltip, buildChartTheme,
} from '@visx/xychart'
import {curveNatural} from '@visx/curve'
import {StatTable} from './components/stat-table'
import {appContractorService} from '../../app.shared/app.services/contractors.service'
import {Contractors} from '../../app.shared/app.models'

const data1 = [
	{x: '2022-04-16', y: 60},
	{x: '2022-04-17', y: 40},
	{x: '2022-04-18', y: 30},
	{x: '2022-04-19', y: 70},
	{x: '2022-04-20', y: 80},
	{x: '2022-04-21', y: 90},
	{x: '2022-04-22', y: 70},
	{x: '2022-04-23', y: 50},
	{x: '2022-04-24', y: 40},
	{x: '2022-04-25', y: 30},
	{x: '2022-04-26', y: 20},
	{x: '2022-04-27', y: 10},
	{x: '2022-04-28', y: 70},
	{x: '2022-04-29', y: 80},
	{x: '2022-04-30', y: 80},
	{x: '2022-05-01', y: 60},
	{x: '2022-05-02', y: 40},
	{x: '2022-05-03', y: 30},
	{x: '2022-05-04', y: 70},
	{x: '2022-05-05', y: 80},
	{x: '2022-05-06', y: 90},
	{x: '2022-05-07', y: 70},
	{x: '2022-05-08', y: 50},
	{x: '2022-05-09', y: 40},
	{x: '2022-05-10', y: 30},
	{x: '2022-05-11', y: 20},
	{x: '2022-05-12', y: 10},
	{x: '2022-05-13', y: 70},
	{x: '2022-05-14', y: 80},
	{x: '2022-05-15', y: 80},
]

const accessors = {
	//@ts-ignore
	xAccessor: d => d.x,
	//@ts-ignore
	yAccessor: d => d.y,
}

const customTheme = buildChartTheme({
	backgroundColor: '#FFFFFF',
	colors: ['#67BD63'],
	tickLength: 10,
	gridColor: '#E8EDF0',
	gridColorDark: '#E8EDF0' // used for axis baseline if x/yxAxisLineStyles not set
})

export const Control = () => {
	const [contactors, setContactors] = useState<Contractors[]>()
	useEffect(() => {
		appContractorService.getContractors()
			.then(resp => {
				setContactors(resp)
				console.log(resp)
			})

	},[])
	return (
		<Container>
			<Group mt={30} mb={20} position={'apart'}>
				<Title order={2}>Панель управления</Title>
				<Button variant={'default'}>Настроить</Button>
			</Group>
			<Paper shadow="xs" p="md" mb={15}>
				<Group position={'apart'}>
					<Group spacing={10}>
						<Title order={3} mr={10}>Факт-план</Title>
						<Button variant={'default'}>Сегодня</Button>
						<Button variant={'default'}>Вчера</Button>
						<Button variant={'default'}>Неделя</Button>
						<Button variant={'filled'}>Месяц</Button>
					</Group>
					<Select data={[
						{value: 'react', label: 'Исполнители'},
						{value: 'ng', label: 'Дворники'},
					]}
					defaultValue={'react'}
					variant={'unstyled'}
					/>
				</Group>
				<Group mx={5}>
					<XYChart height={300} theme={customTheme} xScale={{type: 'band'}} yScale={{type: 'linear'}}>
						<AnimatedAxis orientation="bottom"/>
						<AnimatedAxis orientation="right" label={'Процент выполнения'}/>
						<AnimatedAxis orientation={'left'} label={'Процент выполнения'}/>
						<AnimatedGrid rows={false} numTicks={30}/>
						<AnimatedLineSeries color={'#67BD63'} curve={curveNatural} dataKey="План работы"
							data={data1} {...accessors} />
						<Tooltip
							snapTooltipToDatumX
							snapTooltipToDatumY
							showVerticalCrosshair
							showSeriesGlyphs
							renderTooltip={({tooltipData, colorScale}) => (
								<div>
									{/*//@ts-ignore*/}
									<div style={{color: colorScale(tooltipData.nearestDatum.key)}}>
										{/*//@ts-ignore*/}
										{tooltipData.nearestDatum.key}
									</div>
									{/*//@ts-ignore*/}
									{accessors.yAccessor(tooltipData.nearestDatum.datum)}%
									{/*//@ts-ignore*/}
									({accessors.xAccessor(tooltipData.nearestDatum.datum)})
								</div>
							)}
						/>
					</XYChart>
				</Group>
			</Paper>
			<Paper shadow="xs" p="md" mb={15}>
				<Group mt={10} mb={20} mx={10} spacing={10}>
					<Title order={3} mr={10}>Прогресс</Title>
					<Button variant={'filled'}>Сегодня</Button>
					<Button variant={'default'}>Вчера</Button>
					<Button variant={'default'}>Неделя</Button>
					<Button variant={'default'}>Месяц</Button>
				</Group>
				<Progress mx={5}
						  mt="md"
						  size="xl"
						  radius="xl"
						  sections={[
							  {value: 69, color: 'brand'},
							  {value: 1, color: 'white'},
							  {value: 30, color: '#FF7917'},
						  ]}
				/>
				<Group align={'self-start'} mt={20} mb={10} mx={10}>
					<ColorSwatch size={20} color={'#67BD63'}/>
					<Text weight={600}>Выполненный график</Text>
					<ColorSwatch size={20} color={'#FF7917'}/>
					<Text weight={600}>Просрочено</Text>
				</Group>
			</Paper>
			<Grid align={'stretch'} mb={15}>
				<Grid.Col span={4}>
					<Paper shadow="xs" p="md">
						<Title mx={10} order={3} mt={10}>Рекомендации</Title>
						<Text mx={10} my={20}>
							абоба
						</Text>
						<Group position={'right'}>
							<Button variant={'filled'}>Подробнее</Button>
						</Group>
					</Paper>
				</Grid.Col>
				<Grid.Col span={8}>
					<Paper shadow="xs" p="md">
						<Title mx={10} order={3} mt={10}>Статистика по подрядчикам</Title>
						<Group mx={10} my={20}>
							<StatTable
								data={[{
									title: 'Подрядчик 1',
									reviews: {positive: 90, negative: 10}
								},
								{
									title: 'Подрядчик 2',
									reviews: {positive: 70, negative: 30}
								},
								{
									title: 'Подрядчик 3',
									reviews: {positive: 40, negative: 60}
								},
								{
									title: 'Подрядчик 4',
									reviews: {positive: 80, negative: 20}
								},
								{
									title: 'Подрядчик 5',
									reviews: {positive: 90, negative: 10}
								}
								]}/>
						</Group>
						<Group position={'right'}>
							<Button variant={'filled'}>Подробнее</Button>
						</Group>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	)
}