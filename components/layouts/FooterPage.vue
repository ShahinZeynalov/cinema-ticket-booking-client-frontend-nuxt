<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small  mt-4">
    <mdb-container class="text-left py-5">
      <mdb-row>
        <mdb-col class="text-center mb-3">
          <h5>FOLLOW US</h5>
          <div class="">
            <a href="#">M</a>
            <a href="#">Y</a>
            <a href="#">T</a>
            <a href="#">F</a>
            <a href="#">T</a>
          </div>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col sm="4">
          <h5 class="title mb-3">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
        </mdb-col>
        <mdb-col sm="4">
          <h5 class="title mb-3">ABOUT CINEMAX EXS</h5>
          <ul>
            <li class="list-unstyled"><a href="">Movies</a></li>
            <li class="list-unstyled"><a href="">Showtimes</a></li>
            <li class="list-unstyled"><a href="">Theaters</a></li>
            <li class="list-unstyled"><a href="#">Contact</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm='4'>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        Cinema Networks 2020 | &copy; Copyright:  EXS Team
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
// import mdbGoogleMapsPage from '@/components/cards/MdbGoogleMap'
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
    // mdbGoogleMapsPage,
  }
}
</script>
