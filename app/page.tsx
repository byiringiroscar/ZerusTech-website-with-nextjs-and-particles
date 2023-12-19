import Image from 'next/image'
import Design from '../components/Design'

export default function Home() {
  return (
    <div className='w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-white'>
      <div className='w-full h-screen absolute top-0 left-0'>
        <Design />
      </div>

    </div>
  )
}
