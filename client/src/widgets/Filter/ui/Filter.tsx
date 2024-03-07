import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import classNames from 'src/shared/lib/classNames/classNames'
import cls from './Filter.module.scss'
import { useGetFilter } from 'src/shared/lib/useGetFilter/useGetFilter'
import { useParams, useSearchParams } from 'react-router-dom'
import { FilterType } from 'src/shared/api/filterApi'
import toggleAttribute from '../model/toggleAttribute'
import { Attribute } from 'src/shared/api/productApi'
import Button, { buttonTheme } from 'src/shared/ui/Button/Button'

interface FilterProps {
  className?: string
  filters: FilterType
  setFilters: Dispatch<SetStateAction<FilterType>>
}

const Filter: FC<FilterProps> = ({ filters, setFilters }) => {
  const [, setSearchParams] = useSearchParams()
  const { type } = useParams()

  const { data: attributes, isLoading } = useGetFilter(type)

  useEffect(() => {
    setSearchParams(filters)
  }, [filters])

  if (isLoading) {
    return <div>Загрузка фильтров...</div>
  }

  function toggleAttributeHandler(attribute: Attribute, checked: boolean) {
    setFilters(prev => toggleAttribute(prev, attribute, checked))
  }

  return (
    <div className={classNames(cls.Filter, {}, [])}>
      {Object.entries(attributes).map(([title, descriptions], index) => {
        return (
          <div key={index}>
            <span>{title}</span>
            <div className={cls.attributes}>
              {descriptions.map((description, index) => {
                const checked =
                  !!filters[title] && filters[title].includes(description)
                return (
                  <Button
                    theme={buttonTheme.SMALLEST}
                    key={index}
                    className={classNames(cls.attribute, {
                      [cls.checked]: checked,
                    })}
                    onClick={() =>
                      toggleAttributeHandler({ title, description }, checked)
                    }
                  >
                    <span>{description}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Filter
