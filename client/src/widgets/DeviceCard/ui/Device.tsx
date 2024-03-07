import { FC } from 'react'
import { Product } from 'src/shared/api/productApi'
import cls from './Device.module.scss'
import Title from 'src/shared/ui/Title/Title'
import Button from 'src/shared/ui/Button/Button'
import { serverUrl } from 'src/shared/api/generalApi'

interface DeviceProps {
  product: Product
}

const Device: FC<DeviceProps> = ({ product }) => {
  const { img, name, price, attributes } = product

  return (
    <div className={cls.device} data-testid='device-item'>
      <div className={cls.left}>
        <img className={cls.image} src={`${serverUrl}/img${img}`} />
      </div>
      <div className={cls.center}>
        <Title>{name}</Title>
        <div className={cls.attributes}>
          {attributes.map(elem => {
            return (
              <div key={elem.id} className={cls.attribute}>
                <span className={cls.attribute_title}>{elem.title}</span>:
                <span className={cls.attribute_description}>
                  {elem.description}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={cls.right}>
        <Title>{price}₽</Title>
        <Button>В корзину</Button>
      </div>
    </div>
  )
}

export default Device
