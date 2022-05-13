import React from 'react'
import { Map } from './map.module'
import { Module } from '../../app.core'


export const MapModule = Module(<Map/>)({
	routeProps: {
		path: '/map',
	},
	name: 'Map'
})
