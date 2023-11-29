<template>
  <div class="site-footer">
    <div class="footer-links pb-3 pt-5 d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <a href="terms-and-condition.html" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="tnc">Terms and Conditions</a>
                <a href="javascript:" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="privacy-policy">Privacy Policy</a>
                <a href="javascript:" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="aml-policy">AML Policy</a>
                <a href="javascript:" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="responsible-gaming">Responsible Gambling</a>
              </div>
              <div>
                <a href="promotion.html" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="promotions">Promotions</a>
                <a href="javascript:" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="faq">FAQs</a>
                <a href="javascript:" class="d-block font-weight-bold text-white mb-3 dynamic-link translate-text" data-i18n="support">Support</a>
              </div>
            </div>
          </div>
          <div class="col-8 offset-1">
            <strong class="text-white mb-3 d-block translate-text" data-i18n="game-providers">Game Providers</strong>
            <div class="provider-slider">
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/playtech.png" alt="playtech"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/pussy888.png" alt="pussy888"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/pragmatic-play.png" alt="pragmatic play"> </span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/ag.png" alt="asia gamin"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/scr888.png" alt="scr888"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/wm-casino.png" alt="wm casino"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/918kaya.png" alt="918kaya"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/habanero.png" alt="habanero"></span>
                </div>
              </div>
              <div>
                <div class="d-flex align-items-center justify-content-center">
                  <span><img src="./images/game-provider/mega888.png" alt="mega888"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0">&copy; CASINO 888 {{ year }}. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data(){
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>