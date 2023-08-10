import { Button, Flex, Image } from "@chakra-ui/react"

interface Props {
  onClick: () => void
}
export const WhitUserView = ({onClick}:Props) => {
  return (
    <Flex direction={"column"} gap={'2rem'}>
      <Image src={"/descarga.jpg"} alt="img" width={400} height={400}/>
      <Button onClick={onClick}>Volver</Button>
    </Flex>
  )
}