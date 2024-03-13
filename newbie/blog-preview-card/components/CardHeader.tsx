import Image from 'next/image'
import React from 'react'
import illustrationArticle from '@/public/assets/images/illustration-article.svg'

const CardHeader = () => {
  return (
    <div>
      <Image
        src={illustrationArticle}
        alt='illustration-Article'
        className='w-full object-contain rounded-[10px]'
      />
    </div>
  )
}

export default CardHeader