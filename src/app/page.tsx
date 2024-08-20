import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegSmile } from 'react-icons/fa'

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl text-red-400">
        Hello Home Page
      </h1>
      <Button
        variant="solid"
        color="primary"
        radius="sm"
        startContent={<FaRegSmile />}
      >Click me</Button>
    </div>
  )
}

export default HomePage
