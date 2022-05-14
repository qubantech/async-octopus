import React from 'react'
import { Module } from '../../app.core'
import {Auth} from './auth.module'


export const AuthModule = Module(<Auth/>)({
	routeProps: {
		path: '/auth',
	},
	name: 'Auth'
})
