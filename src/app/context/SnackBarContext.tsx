import { createContext } from 'react'

export type SnackBarType = 'success' | 'error' | 'warning' | 'info'

interface SnackBarContextProps {
	snackbar: (props: { type: SnackBarType; message: string }) => void
}

export const SnackBarContext = createContext<SnackBarContextProps>({
	snackbar: () => {
		return
	},
})
