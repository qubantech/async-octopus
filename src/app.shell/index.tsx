import React, { FC, PropsWithChildren } from 'react'
import { useRecoilValue } from 'recoil'
import {
	AppShell,
	MantineTheme
} from '@mantine/core'
import { NavbarState } from './shell.state'
import {
	BrandInstagram,
	BrandTwitter,
	BrandYoutube, Camera,
	FileAnalytics,
	Plus,
	Receipt2
} from 'tabler-icons-react'
import {
	FooterLinks,
	HeaderMenu,
	NavbarSegmented
} from './shell.layouts'
import { FabButton } from './shell.components/fab.component'
import { useNavigate } from 'react-router-dom'


const DATA = [
	{
		label: 'Demo',
		link: '',
		links: [
			{ link: '/map', label: 'Карта', icon: Receipt2 },
		]
	},
	{
		label: 'Template',
		link: '/template',
		links: [
			{ link: '/template', label: 'Template', icon: FileAnalytics },
		]
	},
]

const Styles = (theme: MantineTheme) => ({
	main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
})

export const Shell: FC<PropsWithChildren<any>> = ({ children }) => {

	const navigate = useNavigate()

	const showNavbar = useRecoilValue(NavbarState)

	const logoutCallback = () => console.log('Logout')

	const Header = <HeaderMenu links={DATA}/>

	const Footer = <FooterLinks
		data={DATA}
		copyrightText='© 2022 quban.tech. No rights reserved.'
		socialMedia={[
			{ link: 'twitter.com', icon: BrandTwitter },
			{ link: 'youtube.com', icon: BrandYoutube },
			{ link: 'instagram.com', icon: BrandInstagram },
		]}
	/>

	const Navbar = showNavbar
		? <NavbarSegmented
			data={DATA}
			logoutCallback={logoutCallback}
			userEmail={'example@email.com'}
			showTabs
		/>
		: undefined

	const FabWidget = showNavbar
		? undefined
		: <FabButton {...{
			root: {
				icon: Plus,
			},
			data: [
				{onClick: () => {navigate('/camera')}, icon: Camera, title: 'Camera'},
				{onClick: () => {navigate('/template/hello')}, icon: Plus, title: 'Create something'},
			]
		}}/>


	return <AppShell header={Header} aside={Navbar} footer={Footer} styles={Styles} fixed padding={0}>
		{FabWidget}
		{children}
	</AppShell>

}