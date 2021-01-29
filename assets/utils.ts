import { IItem } from '../store/items'

export const getStorageItems = (storageKey: string) => {
  const storageItems = localStorage.getItem(storageKey)

  if (storageItems) {
    return JSON.parse(storageItems) as IItem[]
  } else {
    return []
  }
}

export const filterItems = (items: IItem[], filterParam: string | number) => {
  let filteredItems = []

  if (Number(filterParam) === 0) {
    filteredItems = items
  } else {
    filteredItems = items.filter((item) => {
      return item.material === Number(filterParam)
    })
  }

  return filteredItems
}

export const sortItems = (filteredItems: IItem[], sortingParam: string) => {
  if (sortingParam === 'price-asc') {
    filteredItems.sort((currentItem, nextItem) => {
      if (currentItem.price.current_price > nextItem.price.current_price) {
        return 1
      } else {
        return -1
      }
    })
  } else if (sortingParam === 'price-desc') {
    filteredItems.sort((currentItem, nextItem) => {
      if (currentItem.price.current_price < nextItem.price.current_price) {
        return 1
      } else {
        return -1
      }
    })
  }
}
