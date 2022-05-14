import { createStyles } from '@mantine/core'


export const useMapStyle = createStyles((theme) => ({

	periodButton: {
		'&:focus': {
			color: '#5EB059',
			backgroundColor: '#EEFAEF',
			borderColor: '#EEFAEF',
		},
		'&:hover': {
			color: '#5EB059',
			backgroundColor: '#EEFAEF',
			borderColor: '#EEFAEF',
		},
		'&:active': {
			color: '#5EB059',
			backgroundColor: '#EEFAEF',
			borderColor: '#EEFAEF',
		}
	},

	arrowButton: {
		'&:hover': {
			color: '#5EB059',
			backgroundColor: '#EEFAEF'
		}
	},

	button: {


		'&:focus': {
			color: '#5EB059',
			backgroundColor: '#F6F6F6'
		},
		'&:hover': {
			color: '#5EB059',
			backgroundColor: '#F6F6F6'
		}
	}
}))
