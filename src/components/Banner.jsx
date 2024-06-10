import { useContext } from 'react'
import { Mycontext } from '../App'
import IMG from '../assets/image/banner.jpg'

const Banner = () => {
  const {home}=useContext(Mycontext)
  return (
    <div className='h-screen w-full ' ref={home} style={{ background: `url(${IMG})` }}>
 
  </div>
  )
}

export default Banner