import React, {useMemo, useState} from 'react'
import {Header, Menu, Group, Tabs, Center, Burger, Container, Button} from '@mantine/core'
import { ChevronDown } from 'tabler-icons-react'
import { ReactComponent as Logo } from '../../../app.shared/app.assets/images/logo.svg'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {AuthState, NavbarState} from '../../shell.state'
import { useId, useScrollLock } from '@mantine/hooks'
import { useHeaderStyles } from './header.style'


interface HeaderSearchProps {
	links: {
		link: string;
		label: string;
		links?: {link: string; label: string}[]
	}[];
}


export const HeaderMenu = ({ links }: HeaderSearchProps) => {

	const [ show, toggleShow ] = useRecoilState(NavbarState)
	const [ auth, setAuth] = useRecoilState(AuthState)
	const [ scrollLocked, setScrollLocked ] = useScrollLock()
	const { classes } = useHeaderStyles()
	const uuid = useId()
	const navigate = useNavigate()
	const location = useLocation()
	console.log(auth)
	const [activeTab, setActiveTab] = useState(() => {
		// @ts-ignore
		const el:any = links.filter((el:any) =>
			el.link == location.pathname)
		console.log(el)
		console.log(links.indexOf(el[0]))
		// @ts-ignore
		return links.indexOf(el[0])
	})
	const onChange = (active: number, tabKey: string) => {
		//setActiveTab(active)
		if (active || active == 0) {
			// @ts-ignore
			navigate(links.at(active).link)
			setActiveTab(active)
			console.log('tabKey', tabKey)
		}
	}


	const menuItems = useMemo(
		() => links.map((link) => {
			const nestedMenuItems = link.links?.map((item) => (
				<NavLink key={link.link + item.link + uuid} to={link.link + item.link}>
					<Menu.Item>
						{item.label}
					</Menu.Item>
				</NavLink>
			))

			return nestedMenuItems
				?
				<Menu key={link.label + uuid} trigger="hover" delay={0} transitionDuration={0} placement="end" gutter={1} control={
					<NavLink to={link.link} className={classes.link}>
						<Center>
							<span className={classes.linkLabel}>{link.label}</span>
							<ChevronDown size={12}/>
						</Center>
					</NavLink>
				}>
					{nestedMenuItems}
				</Menu>
				:
				<Tabs.Tab color={'brand'} label={link.label} className={classes.tab}>
					{/*<NavLink to={link.link}>*/}
					{/*{link.label}*/}
					{/*</NavLink>*/}
				</Tabs.Tab>

		}),
		[]
	)

	const unauthMenuItems = useMemo(
		() => links.slice(0,-3).map((link) => {
			const nestedMenuItems = link.links?.map((item) => (
				<NavLink key={link.link + item.link + uuid} to={link.link + item.link}>
					<Menu.Item>
						{item.label}
					</Menu.Item>
				</NavLink>
			))

			return nestedMenuItems
				?
				<Menu key={link.label + uuid} trigger="hover" delay={0} transitionDuration={0} placement="end" gutter={1} control={
					<NavLink to={link.link} className={classes.link}>
						<Center>
							<span className={classes.linkLabel}>{link.label}</span>
							<ChevronDown size={12}/>
						</Center>
					</NavLink>
				}>
					{nestedMenuItems}
				</Menu>
				:
				<Tabs.Tab color={'brand'} label={link.label}>
					{/*<NavLink to={link.link}>*/}
					{/*{link.label}*/}
					{/*</NavLink>*/}
				</Tabs.Tab>

		}),
		[]
	)

	const toggleNavbar = () => {
		toggleShow(() => !show)
		setScrollLocked(() => !scrollLocked)
	}

	return <Header fixed height={56}>
		<Container>
			<div className={classes.inner}>
				<NavLink to={'/'}>
					<Logo/>
				</NavLink>

				<Group position={'right'}>
					<Tabs active={activeTab} onTabChange={onChange} variant="pills">
						{auth && menuItems || unauthMenuItems}
					</Tabs>
					{!auth &&
						<Button size={'sm'} variant={'filled'} onClick={()=> navigate('/auth')}>Авторизация</Button>
						||
						<Button size={'sm'} variant={'default'} onClick={()=> setAuth(false)}>Выйти</Button>
					}
				</Group>
				{/*<Group spacing={5} className={classes.links}>*/}
				{/*	{menuItems}*/}
				{/*</Group>*/}
				<Burger opened={show} onClick={toggleNavbar} className={classes.burger} size="sm"/>
			</div>
			{/*<Button variant={'filled'}>Авторизация</Button>*/}
		</Container>
	</Header>
}