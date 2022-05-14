import React, { useState } from 'react'
import { MapGarbage } from './components/map-garbage'
import {Autocomplete, Button, Container, Group, Text} from '@mantine/core'


const initData = [
	{
		coordinates: [44.900510, 37.320609],
		value: 'Cam 1'
	},
	{
		coordinates: [44.898163, 37.317609],
		value: 'Cam 2'
	},

]


export const Map = () => {
	const [mapState, setMapState] = useState({ center: [44.8857, 37.31992], zoom: 12 })
	const [value, setValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const onCameraChange = (value: string) => {
		console.log('here')
		setValue(value)
		const obj = initData.find(o => o.value === value)
		console.log(obj)

		if (obj !== undefined) {
			const newMapState = { center: obj.coordinates, zoom: 15 }
			setMapState(newMapState)
		}
	}

	const onOpenInfo = () => {
		const temp = !isOpen
		setIsOpen(temp)
	}

	return (
		<div style={{position: 'relative'}}>
			<Container
				sx={{
					position: 'absolute',
					zIndex: 500,
					// backgroundColor: 'white',
					// marginTop: "20px",
					marginBottom: '-20px',
					// boxShadow: '0px 10px 15px darkGrey',
					// borderRadius: '0 0 30px 30px',
					width: '30vw',
				}}
			>
				<Group sx={{ alignItems:'end' }}>
					<Autocomplete
						label={'Камера'}
						placeholder="Pick one"
						value={ value }
						data={ initData }
						onChange={ onCameraChange }
					/>
					<Button onClick={ onOpenInfo }>кнопка</Button>
				</Group>
				{
					isOpen &&
						<Container
							size={'xs'}
							sx={{
								backgroundColor: 'white',
								marginTop: '20px',
								// marginBottom: '-20px',
								boxShadow: '0px 10px 15px darkGrey',
								borderRadius: '30px',
								// width: '30vw',
							}}
						>
							<Text>hello</Text>
						</Container>
				}
			</Container>
			<MapGarbage state={ mapState } />
		</div>
	)
}