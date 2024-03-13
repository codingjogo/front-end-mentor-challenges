import React from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

const CardWrapper = () => {
  return (
    <Card>
        <CardHeader />

      <CardContent />

      <CardFooter />
    </Card>
  )
}

export default CardWrapper