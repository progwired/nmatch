import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaRegSmile } from 'react-icons/fa'

function HomePage() {
  return (
    <div>
      <h3 className='text-3xl capitalize'>
        home page
      </h3>
      <Button color='primary' variant='bordered'
        as={Link} href='/members'
        startContent={<FaRegSmile size={20} />}>
        Go to Members page
      </Button>
    </div>
  )
}

export default HomePage
