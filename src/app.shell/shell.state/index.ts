import { atom } from 'recoil'


export const NavbarState = atom({
	key: 'showNavbarState',
	default: false,
})

export const AuthState = atom({
	key: 'auth',
	default: false
})