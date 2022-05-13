import { HeroTitle } from './hero-title.layout'
import { SubGrid } from '../../app.shared/app.layouts/sub-grid.layout'
import React from 'react'
import { Container } from '@mantine/core'
import { StatsRingCard } from '../../app.shared/app.components/stats-ring-card.component'
import { SwitchesCard } from '../../app.shared/app.components/switches-card.component'
import { ContactLayout } from '../../app.shared/app.layouts/contact.layout'
import { CookiesBanner } from '../../app.shared/app.components/cookies-banner.component'
import { EmailBanner } from '../../app.shared/app.components/email-banner.component'


export const About = () => {
	return <>
		<HeroTitle/>
		<SubGrid/>
		<SubGrid/>
	</>
}