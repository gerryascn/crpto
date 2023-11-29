<template>
  <div class="page">
    <c-header :current-page="currentPage" :is-logged-in="isLoggedIn"></c-header>
      <div class="content pt-1">
        <slot></slot>
      </div>
    <c-footer></c-footer>
    <c-menu :is-logged-in="isLoggedIn"></c-menu>
    <c-modal></c-modal>
  </div>
</template>

<script type='text/javascript'>
module.exports = {
  components: {
    'c-header': httpVueLoader('./header.vue'),
    'c-footer': httpVueLoader('./footer.vue'),
    'c-menu': httpVueLoader('./menu.vue'),
    'c-modal': httpVueLoader('./modals.vue'),
  },
  props: {
    currentPage: String,
    isLoggedIn: Boolean
  },
  created(){
    console.log('layout', this.isLoggedIn)
  }
}
</script>