import { useContext } from 'react'

import { SnackBarContext } from '../context/SnackBarContext'

export const useSnackBar = () => {
	return useContext(SnackBarContext)
}
