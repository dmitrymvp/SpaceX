import { Image, Text } from '@mantine/core'

import Modal from '../shared/ui/modal/Modal'

function LaunchDetails({isOpenModal, onClose, image,missionName, rocketName}) {
  return (
<>
{isOpenModal ? <Modal onClose ={onClose}> 
    <Text>{missionName}</Text>
    <Image src={image}></Image>
    {/* <Text>{details}</Text> */}

</Modal> : false} 
</>
  )
}

export default LaunchDetails
