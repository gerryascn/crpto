<template>
  <div>
    <div class="slide-menu-bg ease"></div>
    <div class="slide-menu">
      <div class="slide-top-wrap pt-4" :class="isLoggedIn ? 'active' : ''">
        <div class="d-flex justify-content-between px-4">
<!--          <span v-if="isLoggedIn" class="text-gold font18 font-weight-bold line-height-1">Hi Lan Doe,</span>-->
          <button type="button" class="icon-slide-close slide-close ml-auto" aria-label="Close"></button>
        </div>
        <div class="px-4 mt-3 mb-4 py-2">
          <!--
          <template v-if="isLoggedIn">
            <div class="level d-flex align-items-center mb-3">
              <div class="level-bar position-relative">
                <div class="level-bar-line position-relative"></div>
                <div class="level-bar-text text-uppercase position-absolute text-white">Vip Level 1</div>
              </div>
              <div class="level-icon m-2">
                <img src="/images/level-icon.png" alt="user level">
              </div>
            </div>

            <button class="btn btn-primary btn-primary-lg text-uppercase d-block mx-auto font18 mb-3" type="primary" data-toggle="modal" data-target="#depositModal">Deposit</button>

            <ul class="slide-nav mx-auto mt-0 mb-0 p-0 pb-4 list-unstyled navbar-nav">
              <li class="nav-item">
                <a href="javascript:" class="nav-link">
                  <span class="nav-ico"> <img src="../images/svg/wallet.svg" width="18" alt="wallet"> </span>
                  <strong class="text-uppercase text-gold">Wallet Balance</strong>
                </a>
                <div class="wallet-list mx-auto pt-2">
                  <div class="mb-1">
                      <span> <img src="../images/btc.png" alt="" width="28"> </span>
                      <span class="text-uppercase ml-3 font-weight-bold">btc <span class="ml-2 text-gold">0.0002341</span> </span>
                  </div>
                  <div class="mb-1">
                    <span> <img src="../images/eth.png" alt="" width="28"> </span>
                    <span class="text-uppercase ml-3 font-weight-bold">etc <span class="ml-2 text-gold">0.0051</span></span>
                  </div>
                  <div class="mb-1">
                    <span> <img src="../images/tether.png" alt="" width="28"> </span>
                    <span class="text-uppercase ml-3 font-weight-bold">usdc <span class="ml-2 text-gold">550.00</span></span>
                  </div>
                  <div class="mb-1">
                    <span> <img src="../images/xmr.png" alt="" width="28"> </span>
                    <span class="text-uppercase ml-3 font-weight-bold">xmr <span class="ml-2 text-gold">0</span></span>
                  </div>
                  <div>
                    <span> <img src="../images/usdc.png" alt="" width="28"> </span>
                    <span class="text-uppercase ml-3 font-weight-bold">usdc <span class="ml-2 text-gold">0</span></span>
                  </div>
                </div>
              </li>
            </ul>
          </template>
           -->
        </div>
      </div>
      <div class="mt-4">
        <ul class="slide-nav mx-auto mt-0 mb-0 p-0 list-unstyled navbar-nav">
<!--          <li class="nav-item">-->
<!--            <a href="#" class="nav-link" data-toggle="modal" data-target="#depositModal">-->
<!--              <span class="nav-ico"> <img src="../images/nav-ico-deposit.png" alt="deposit"> </span>-->
<!--              <strong class="text-uppercase">Deposit</strong>-->
<!--            </a>-->
<!--          </li>-->
          <template v-if="isLoggedIn">
            <li class="nav-item">
              <a href="#" class="nav-link" data-toggle="modal" data-target="#withdrawModal">
                <span class="nav-ico"> <img src="../images/svg/withdrawal.svg" width="18" alt="withdrawal"> </span>
                <strong class="text-uppercase translate-text" data-i18n="withdraw">Withdrawal</strong>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" data-toggle="modal" data-target="#traansctionHistoryModal">
                <span class="nav-ico"> <img src="../images/svg/history.svg" width="18" alt="history"> </span>
                <strong class="text-uppercase translate-text" data-i18n="transactions">Transactions</strong>
              </a>
            </li>
          </template>

          <li class="nav-item">
            <a href="slots.html" class="nav-link dynamic-link active">
              <span class="nav-ico"> <img src="../images/svg/slots.svg" width="18" alt="slots"> </span>
              <strong class="text-uppercase translate-text" data-i18n="slots">Slots</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="live-casino.html" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/live-casino.svg" width="18" alt="live casino"> </span>
              <strong class="text-uppercase translate-text" data-i18n="live-casino">Live Casino</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="sports.html" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/sports.svg" width="18" alt="sports"> </span>
              <strong class="text-uppercase translate-text" data-i18n="sports">Sports</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="cockfight.html" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/cockfight.svg" width="18" alt="live casino"> </span>
              <strong class="text-uppercase translate-text" data-i18n="cockfight">Cockfight</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/cockfight.svg" width="18" alt="fishing"> </span>
              <strong class="text-uppercase translate-text" data-i18n="fishing">Fishing</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="arcade.html" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/arcade.svg" width="18" alt="live casino"> </span>
              <strong class="text-uppercase translate-text" data-i18n="arcade">Arcade</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="lottery.html" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/lottery.svg" width="18" alt="live casino"> </span>
              <strong class="text-uppercase translate-text" data-i18n="lottery">DD/Lottery</strong>
            </a>
          </li>
<!--          <li class="nav-item">-->
<!--            <a href="#" class="nav-link">-->
<!--              <span class="nav-ico"> <img src="../images/svg/providers.svg" width="18" alt="live casino"> </span>-->
<!--              <strong class="text-uppercase">Game Providers</strong>-->
<!--            </a>-->
<!--          </li>-->

          <template v-if="isLoggedIn">
            <li class="nav-item">
              <a href="promotions.html" class="nav-link dynamic-link">
                <span class="nav-ico"> <img src="../images/svg/password.svg" width="18" alt="promotions"> </span>
                <strong class="text-uppercase translate-text" data-i18n="promotions">Promotions</strong>
              </a>
            </li>
          </template>

          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/contact.svg" width="18" alt="contact"> </span>
              <strong class="text-uppercase translate-text" data-i18n="support">Support</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/tnc.svg" width="18" alt="terms and condition"> </span>
              <strong class="text-uppercase translate-text" data-i18n="tnc">Terms and conditions</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/tnc.svg" width="18" alt=""> </span>
              <strong class="text-uppercase translate-text" data-i18n="privacy-policy">Privacy Policy</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/tnc.svg" width="18" alt=""> </span>
              <strong class="text-uppercase translate-text" data-i18n="aml-policy">AML Policy</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/tnc.svg" width="18" alt=""> </span>
              <strong class="text-uppercase translate-text" data-i18n="responsible-gaming">Responsible Gambling</strong>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link dynamic-link">
              <span class="nav-ico"> <img src="../images/svg/tnc.svg" width="18" alt=""> </span>
              <strong class="text-uppercase translate-text" data-i18n="faq">FAQs</strong>
            </a>
          </li>

          <template v-if="isLoggedIn">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="nav-ico"> <img src="../images/svg/logout.svg" width="18" alt="withdrawal"> </span>
                <strong class="text-uppercase">Logout</strong>
              </a>
            </li>
          </template>

          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="langselector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="nav-thumb">
                  <img src="../images/svg/language-selector.svg" width="18" alt="lang">
              </span>
              <strong>English</strong>
            </a>
            <div class="dropdown-menu" aria-labelledby="langselector">
              <a class="dropdown-item ease" href="#">English</a>
              <a class="dropdown-item ease" href="#">Bahasa Indonesia</a>
              <a class="dropdown-item ease" href="#">中文</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type='text/javascript'>
module.exports = {
  props: {
    isLoggedIn: Boolean
  },
  created(){
    console.log('menu',this.isLoggedIn)
  }
}
</script>