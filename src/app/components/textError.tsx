import { Text } from "@chakra-ui/react"

interface Props {
  error?: string
}
export const TextError = ({error}: Props) => {
  return (
    <Text textAlign={'center'} color={'red.400'}>{error}</Text>
  )
}