import React from 'react'
import { Module } from '../../app.core'
import {FeedbackForm} from './feedbackform.module'


export const FeedbackFormModule = Module(<FeedbackForm/>)({
	routeProps: {
		path: '/feedback',
	},
	name: 'Feedback'
})
