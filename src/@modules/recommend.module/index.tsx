import React from 'react'
import { Module } from '../../app.core'
import {Recommend} from './recommend.module'


export const RecommendModule = Module(<Recommend/>)({
	routeProps: {
		path: '/recommend',
	},
	name: 'Recommend'
})
