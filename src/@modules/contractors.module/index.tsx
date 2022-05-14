import React from 'react'
import { Module } from '../../app.core'
import {ContractorsPage} from './contractors.module'


export const ContractorsModule = Module(<ContractorsPage/>)({
	routeProps: {
		path: '/contractors/:id'
	},
	name: 'Control'
})
