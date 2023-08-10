import { ReactNode, useState } from 'react'

import { Snackbar } from '../components/Snackbar'
import { SnackBarContext, SnackBarType } from '../context/SnackBarContext'

interface Props {
	children: ReactNode
}

export const SnackBarProvider = ({ children }: Props) => {
	const [open, setOpen] = useState<{
		open: boolean
		type: SnackBarType
		message: string
	}>({
		open: false,
		type: 'success',
		message: 'Horarios establecidos con éxito',
	})

	const snackbar = ({
		type,
		message,
	}: {
		type: SnackBarType
		message: string
	}) => {
		setOpen({
			open: true,
			type: type,
			message: message,
		})
	}
	const handleClose = () => {
		setOpen({
			open: false,
			type: 'success',
			message: '',
		})
	}

	return (
		<SnackBarContext.Provider
			value={{
				snackbar,
			}}
		>
			{children}
			{open.open && (
				<Snackbar
					icon={open.type}
					label={open.message}
					onSnackClose={() => handleClose()}
				/>
			)}
		</SnackBarContext.Provider>
	)
}
