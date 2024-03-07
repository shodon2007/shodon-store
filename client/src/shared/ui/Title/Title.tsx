import { FC, ReactNode } from 'react'

import classNames from 'src/shared/lib/classNames/classNames'
import cls from './Title.module.scss'

interface TitleProps {
  className?: string
  children: ReactNode
}
const Title: FC<TitleProps> = ({ className, children }) => {
  return (
    <span className={classNames(cls.Title, {}, [className])}>{children}</span>
  )
}
export default Title
