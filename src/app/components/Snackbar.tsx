import { useMemo, useEffect, useRef } from 'react'

import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Slide, useDisclosure } from '@chakra-ui/react'

import { SnackBarType } from '../context/SnackBarContext'
import { CustomPalette } from '../utils/colors'

interface SnackbarProps {
	icon: SnackBarType
	label: string
	onSnackClose: () => void
}

interface ISnackbarConfig {
	bg: string
	border: string
	color: string
	icon: string
}

export const Snackbar = ({ icon, label, onSnackClose }: SnackbarProps) => {
	const snackBarType = useMemo(() => {
		return snackbarConfig[icon] ?? snackbarConfig['info']
	}, [icon])
	const { isOpen, onClose } = useDisclosure()

	const ref = useRef<HTMLDivElement>(null)

	const hiddenSnackbar = () => {
		onClose()
		ref.current?.setAttribute(
			'style',
			'transform: translateY(-50px); transition: all .25s ease-in-out; opacity: 1'
		)
		setTimeout(() => {
			onSnackClose()
		}, 4000)
	}
	useEffect(() => {
		ref.current?.setAttribute(
			'style',
			'transform: translateY(50px); transition: all .25s ease-in-out; opacity: 0'
		)
		const timeout = setTimeout(() => {
			hiddenSnackbar()
		}, 100)
		return () => clearTimeout(timeout)
	}, [])
	return (
		<Box
			ref={ref}
			position="fixed"
			left={0}
			right={0}
			bottom={10}
			opacity={0}
			width={'100%'}
			zIndex={99999}
		>
			<Slide direction="bottom" in={isOpen} style={{ zIndex: 9999 }}>
				<Flex justifyContent={'center'} alignItems="center">
					<Box
						width={'100%'}
						maxWidth={964}
						height="100%"
						bgColor={snackBarType.bg}
						borderRadius="24px"
						lineHeight="19.5px"
						boxShadow="0px 4px 20px rgb(61 43 112 / 16%)"
						borderWidth="1px"
						borderColor={snackBarType.color}
					>
						<Flex
							paddingBlock={'24px'}
							paddingStart="42px"
							paddingEnd="42px"
							justifyContent={'space-between'}
						>
							<Flex alignItems={'center'} gap="20px">
								<Box>
									<Text color={snackBarType.color} fontWeight="600">
										{label}
									</Text>
								</Box>
							</Flex>
							<Flex
								as="button"
								justifyContent="center"
								alignItems="center"
								onClick={onSnackClose}
							>
								<CloseIcon color={snackBarType.color} width="14px" />
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Slide>
		</Box>
	)
}

const snackbarConfig: Record<SnackBarType, ISnackbarConfig> = {
	success: {
		icon: 'sn_success',
		color: CustomPalette.PALETTE_SUCCESS_MAIN,
		bg: CustomPalette.PALETTE_SUCCESS_LIGHT,
		border: CustomPalette.PALETTE_SUCCESS_MAIN,
	},
	error: {
		icon: 'sn_error',
		color: CustomPalette.PALETTE_ERROR_MAIN,
		bg: CustomPalette.PALETTE_ERROR_LIGHT,
		border: CustomPalette.PALETTE_ERROR_MAIN,
	},
	warning: {
		icon: 'sn_warning',
		color: CustomPalette.PALETTE_WARNING_MAIN,
		bg: CustomPalette.PALETTE_WARNING_LIGHT,
		border: CustomPalette.PALETTE_WARNING_MAIN,
	},
	info: {
		icon: 'sn_info',
		color: CustomPalette.PALETTE_INFO_MAIN,
		bg: CustomPalette.PALETTE_INFO_LIGHT,
		border: CustomPalette.PALETTE_INFO_MAIN,
	},
}
