<template>
    <div>
       <ul>
          <li v-for="(shop, index) in shop" :key="index">{{shop.id}} {{shop.branch}} {{shop.phoneNumber}}</li>
       </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      shop: [{id: '八方雲集', branch: '新坡', phoneNumber: '03 408 1999'}]
    }
  }

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
