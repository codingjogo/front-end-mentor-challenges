import React from 'react'
import Tag from './Tag'
import ArticleDate from './ArticleDate'
import Link from 'next/link'

const CardContent = () => {
  return (
    <Link href='https://www.frontendmentor.io/challenges' className='flex flex-col items-start justify-start gap-3'>
        <Tag />
        <ArticleDate />
        <h1 className='desktop:text-heading mobile:text-heading-m hover:text-yellow'>HTML & CSS foundations</h1>
        <p className='desktop:text-body-m mobile:text-body-sm text-grey'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
    </Link>
  )
}

export default CardContent