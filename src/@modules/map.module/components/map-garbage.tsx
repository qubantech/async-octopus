import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

export const MapGarbage = (props:{ state: object }) => {

	return <>
		<YMaps>
			{/* @ts-ignore*/}
			<Map state={ props.state } width={ '100%' } height={ '100vh' }>

			</Map>
		</YMaps>
	</>
}