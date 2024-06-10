import { Link } from 'react-router-dom'
import Whatsapp from '../assets/image/whatsapp.webp'

const FixWhatsapp = () => {
  return (
    <Link to={'https://wa.me/7091506903?text=Hello,Shapoorji Pallonji Real Estate'} target='_black'>
    <img src={Whatsapp} alt="" className='fixed bottom-20 right-5 h-12' />
    </Link>
  )
}

export default FixWhatsapp