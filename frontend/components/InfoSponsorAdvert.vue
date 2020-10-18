<template>
  <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic">

    <!-- cell -->
    <div class="cell small-12 large-5">

      <div v-if="this.$store.state.sponsor === true">
        <div class="text-center">
          <hr/>
        </div>

        <div>
          <p><i class="icon icon-info-circle-hollow"></i> If you enjoy this content and would like to support what I do, please use any of these channels to buy me a coffee: <a href="https://ko-fi.com/lautiamkok" target="_blank">Ko-fi</a>, <a href="https://www.buymeacoffee.com/lautiamkok" target="_blank">Buy Me a Coffee</a>. Or make a donation for however much you feel comfortable with <a href="https://www.paypal.me/lautiamkok" target="_blank">PayPal</a>. Thank you so much for supporting!</p>
        </div>

      </div>

      <div v-if="this.$store.state.advert === true">
        <div class="text-center">
          <hr/>
        </div>

        <div>
          <p><i class="icon icon-info-circle-hollow"></i> This page participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn commissions by linking to Amazon. In other words, this means that whenever you buy a book on Amazon from a link on here, I receive a small percentage of its price.</p>
        </div>
      </div>

       <div v-if="this.$store.state.hire === true">
        <div class="text-center">
          <hr/>
        </div>

        <div>
          <p><i class="icon icon-info-circle-hollow"></i> If you enjoy this content and require my skills, please do not hesitate to <a href="#" class="toggle-get-in-touch">contact me</a> for a quote. Thank you!</p>
        </div>
      </div>

    </div>
    <!-- cell -->

  </div>
</template>
