import React from 'react'
import { Module } from '../../app.core'
import {Control} from './control.module'


export const ControlModule = Module(<Control/>)({
	routeProps: {
		path: '/control',
	},
	name: 'Control'
})
