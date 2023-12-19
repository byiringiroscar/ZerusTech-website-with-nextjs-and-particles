import Image from 'next/image'
import Design from '../components/Design'

export default function Home() {
  return (
    <div className='w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-white'>
      <div>
        <Design />
      </div>

    </div>
  )
}
