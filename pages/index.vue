<template>
  <div class="container">
    <div class="breadcrumbs">
      Главная / Системы хранения /
      <span class="breadcrumbs--current-item">Комплекты стеллажных систем</span>
    </div>
    <h1 class="title">Комплекты стеллажных систем</h1>
    <div class="filters">
      <div class="filter">
        <div class="filter__title">Сортировать по:</div>
        <select
          v-model="sortingParam"
          class="filter__select"
          @change="sortingParam = $event.target.value"
        >
          <option class="filter__option" :value="'price-asc'">
            Цена по возрастанию
          </option>
          <option class="filter__option" :value="'price-desc'">
            Цена по убыванию
          </option>
        </select>
      </div>
      <div class="filter">
        <div class="filter__title">Материал</div>
        <select
          v-model="filterParam"
          class="filter__select"
          @change="filterParam = $event.target.value"
        >
          <option class="filter__option" :value="0">Любой</option>
          <option
            v-for="material in materials"
            :key="material.id"
            class="filter__option"
            :value="material.id"
          >
            {{ material.name }}
          </option>
        </select>
      </div>
    </div>
    <ul class="items" @click="handleItemButtons">
      <li
        v-for="item in preparedItems"
        :key="item.id"
        class="item"
        :item="JSON.stringify(item)"
      >
        <div v-if="item.price.old_price" class="item__discount">Скидка</div>
        <img
          :src="'/test__shop_frontend' + item.image.url"
          :alt="`${item.code}-${item.name}`"
          class="item__image"
        />
        <div class="item__info">
          <div class="item__code">{{ item.code ? item.code : 'Нет кода' }}</div>
          <div class="item__name">{{ item.name }}</div>
          <div class="item__price">
            <span v-if="item.price.old_price" class="item__old-price"
              >{{ item.price.old_price }}&#8381;</span
            >
            <span class="item__current-price"
              >{{ item.price.current_price }}&#8381;</span
            >
          </div>
        </div>
        <div class="item__buttons">
          <button
            class="item__button"
            :class="[
              storageCart.some((cartItem) => cartItem.id === item.id)
                ? 'item__button--in-cart'
                : 'item__button--not-in-cart',
            ]"
          />
          <button
            class="item__button"
            :class="[
              storageFavorit.some((favoritItem) => favoritItem.id === item.id)
                ? 'item__button--in-favorit'
                : 'item__button--not-in-favorit',
            ]"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import { IItem } from '../store/items'
import { getStorageItems, filterItems, sortItems } from '../assets/utils'

export default Vue.extend({
  data() {
    return {
      sortingParam: 'price-asc' as string,
      filterParam: 0 as number,
      storageCart: getStorageItems('cart'),
      storageFavorit: getStorageItems('favorit'),
    }
  },
  computed: {
    ...mapGetters({
      items: 'items/getItems',
      materials: 'materials/getMaterials',
    }),
    preparedItems(): IItem[] {
      const items = Array.from(this.items) as IItem[]

      const filteredItems = filterItems(items, this.filterParam)
      sortItems(filteredItems, this.sortingParam)

      return filteredItems
    },
  },
  mounted() {
    this.fetchMaterials()
    this.fetchItems()
  },
  methods: {
    ...mapActions({
      fetchItems: 'items/fetchItems',
      fetchMaterials: 'materials/fetchMaterials',
    }),
    handleItemButtons(e: MouseEvent) {
      const button = e.target

      if (!(button instanceof HTMLButtonElement)) {
        return
      }

      const cart = getStorageItems('cart')
      const favorit = getStorageItems('favorit')

      const itemFromAttribute = button.parentElement!.parentElement!.getAttribute(
        'item'
      )
      if (!itemFromAttribute) {
        return
      }
      const item = JSON.parse(itemFromAttribute) as IItem

      const isItemInCart = button.classList.contains('item__button--in-cart')
      const isItemNotInCart = button.classList.contains(
        'item__button--not-in-cart'
      )
      const isItemInFavorit = button.classList.contains(
        'item__button--in-favorit'
      )
      const isItemNotInFavorit = button.classList.contains(
        'item__button--not-in-favorit'
      )

      if (isItemInCart) {
        button.classList.replace(
          'item__button--in-cart',
          'item__button--not-in-cart'
        )
        const cartItemIndex = cart.findIndex(
          (element) => element.id === item.id
        )
        cart.splice(cartItemIndex, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
      } else if (isItemNotInCart) {
        button.classList.replace(
          'item__button--not-in-cart',
          'item__button--in-cart'
        )
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
      } else if (isItemInFavorit) {
        button.classList.replace(
          'item__button--in-favorit',
          'item__button--not-in-favorit'
        )
        const favoritItemIndex = favorit.findIndex(
          (element) => element.id === item.id
        )
        favorit.splice(favoritItemIndex, 1)
        localStorage.setItem('favorit', JSON.stringify(favorit))
      } else if (isItemNotInFavorit) {
        button.classList.replace(
          'item__button--not-in-favorit',
          'item__button--in-favorit'
        )
        favorit.push(item)
        localStorage.setItem('favorit', JSON.stringify(favorit))
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  width: 1488px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    width: 1401px;
  }
  @media (max-width: 1024px) {
    width: 985px;
  }
  @media (max-width: 768px) {
    width: 728px;
  }
  @media (max-width: 425px) {
    width: 386px;
  }
  @media (max-width: 375px) {
    width: 336px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
}

.breadcrumbs {
  color: #727783;
  margin-top: 32px;
  line-height: 16px;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
}
.breadcrumbs--current-item {
  color: #000000;
}

.title {
  font-weight: 600;
  margin-top: 32px;
  font-size: 36px;
  line-height: 48px;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 425px) {
    line-height: 36px;
  }
}

.filters {
  margin-top: 32px;
  display: flex;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
}

.filter {
  position: relative;
}
.filter::before {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 32px;
  right: 16px;
  content: url('/test__shop_frontend/icons/chevron-bottom.svg');
  pointer-events: none;
}
.filter:not(:first-child) {
  margin-left: 24px;
  @media (max-width: 425px) {
    margin: 10px 0 0 0;
  }
}
.filter__title {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 3%;
  margin-left: 16px;
  color: #4f4f4f;
}
.filter__select {
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
  width: 288px;
  height: 40px;
  background-color: #f2f2f2;
  padding: 0 56px 0 16px;
  appearance: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 40px;
  @media (max-width: 425px) {
    width: 385px;
  }
  @media (max-width: 375px) {
    width: 336px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
}

.items {
  display: grid;
  grid-template-columns: repeat(4, 336px);
  column-gap: 48px;
  row-gap: 40px;
  margin-top: 41px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 339px);
    column-gap: 15px;
    row-gap: 15px;
    margin-top: 20px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 318px);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 356px);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 385px);
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 336px);
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 280px);
  }
}

.item {
  width: 336px;
  height: 352px;
  position: relative;
  outline: solid 1px #eeeeee;
  @media (max-width: 1440px) {
    width: 339px;
  }
  @media (max-width: 1024px) {
    width: 318px;
  }
  @media (max-width: 768px) {
    width: 356px;
  }
  @media (max-width: 425px) {
    width: 385px;
  }
  @media (max-width: 375px) {
    width: 336px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
}
.item__discount {
  width: 81px;
  height: 24px;
  background-color: #eb5757;
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  top: 8px;
  text-align: center;
}
.item__image {
  display: block;
  margin: 9px auto 0 auto;
}
.item__info {
  float: left;
  margin: 23px 0 0 12px;
}
.item__code {
  color: #888888;
  font-size: 10px;
  letter-spacing: 2%;
}
.item__name {
  font-weight: 500;
  letter-spacing: 2%;
  margin-top: 5.83px;
}
.item__price {
  margin-top: 10px;
}
.item__old-price {
  color: #888888;
  text-decoration: line-through;
  letter-spacing: 2%;
}
.item__current-price {
  letter-spacing: 2%;
}
.item__buttons {
  float: right;
  margin: 66px 14px 0 0;
  display: flex;
}
.item__button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 36px;
  height: 36px;
}
.item__button:not(:last-child) {
  margin-right: 11px;
}
.item__button--not-in-cart::before {
  content: url('/test__shop_frontend/icons/not-in-cart.svg');
}
.item__button--in-cart::before {
  content: url('/test__shop_frontend/icons/in-cart.svg');
}
.item__button--not-in-favorit::before {
  content: url('/test__shop_frontend/icons/not-in-favorit.svg');
}
.item__button--in-favorit::before {
  content: url('/test__shop_frontend/icons/in-favorit.svg');
}
</style>
