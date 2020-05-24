<template>
  <mdb-navbar expand="small" dark color="blue" position="top">
    <nuxt-link to="/">
      <mdb-navbar-brand>
        Cinema exs
      </mdb-navbar-brand>
    </nuxt-link>
    <QuickTicket class='mr-5' />
    <mdb-navbar-toggler>
      <mdb-navbar-nav left>
        <nuxt-link to="/movies"><mdb-nav-item >Movies</mdb-nav-item></nuxt-link>
        <nuxt-link to="/showtimes"><mdb-nav-item >Showtimes</mdb-nav-item></nuxt-link>
        <nuxt-link to="/theaters"><mdb-nav-item >Theaters</mdb-nav-item></nuxt-link>
      </mdb-navbar-nav>
      <mdb-navbar-nav center>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <nuxt-link to="/auth/register"><mdb-nav-item >Signin</mdb-nav-item></nuxt-link>
        <nuxt-link to="/auth/login"><mdb-nav-item >Login</mdb-nav-item></nuxt-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>

  </mdb-navbar>
</template>
<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarNav } from 'mdbvue'
import QuickTicket from '~/components/forms/QuickTicket'
// import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue'
export default {
  name: 'HelloWorld',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarNav,
    QuickTicket
    // mdbNavbarToggler,
    // mdbNavItem,
    // mdbContainer,
    // mdbDropdown,
    // mdbDropdownToggle,
    // mdbDropdownMenu,
    // mdbDropdownItem
  }
}
</script>

<style lang="css" scoped>
</style>
