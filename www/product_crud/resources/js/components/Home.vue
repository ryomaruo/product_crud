<template>
  <div class="main">
    <b-link
      to="/products"
      router-tag="div"
      class="to-products">Manage</b-link>
    <b-link
      to="/products"
      router-tag="div"
      class="to-products">Products</b-link>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.to-products {
  font-size: 50px;
  font-weight: 700;
  cursor: pointer;
}
</style>
