<template>
  <div class="site-header">
    <div class="top-area d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center">
            <div class="logo">
              <a href="index.html" class="dynamic-link">
                <img src="./images/logo.png" alt="casino 888">
                <span class="sr-only">site logo</span>
              </a>
            </div>
            <!-- menu and user name -->
            <template v-if="isLoggedIn">
              <div class="d-inline-block ml-4 font-weight-bold font15 text-gold">
                <div class="dropdown">
                  <button class="btn dropdown-toggle py-0" type="button" id="userProfileBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../images/svg/user.svg" alt="user" width="18"> <span class="ml-2 text-white">Jhon Doe </span>
                  </button>
                  <div id="userProfileBtn-dropdown" class="dropdown-menu" aria-labelledby="userProfileBtn">
                    <div>
                      <button type="button" class="close" data-dismiss="dropdown" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <p>
                      <span class="img-wrap">
                        <img src="../images/icon-mail.png" alt="mail">
                      </span>
                      <span class="text"> <span class="translate-text" data-i18n="email">Email</span> : abc@mail.com</span>
                    </p>
                      <p>
                        <span class="img-wrap">
                          <img src="../images/icon-phone.png" alt="phone">
                        </span>
                        <span> <span class="translate-text" data-i18n="mobile-number">Mobile Number</span> : 008008008</span>
                      </p>
                      <p>
                        <span class="img-wrap">
                          <img src="../images/icon-change-password.png" alt="mail">
                        </span>
                        <span style="text-decoration: underline" class="translate-text" data-i18n="change-password">Change password</span>
                      </p>
                  </div>
                </div>
              </div>
              <div class="d-inline-block font-weight-bold font15 text-gold">
                <img src="../images/icon-wallet.png" alt="wallet" class="position-relative mt-n2" width="18" style=""> <span class="ml-2 text-white">8888.88 </span>
              </div>
              <div class="d-inline-block ml-4 font-weight-bold font15 text-gold">
                <a href="#" data-toggle="modal" data-target="#depositModal" class="btn btn-primary text-uppercase translate-text" data-i18n="deposit">Deposit</a>
              </div>
            </template>

            <div class="d-flex ml-auto align-items-center">
              <div class="search-area">
                <form action="#">
                  <div class="input-wrap position-relative">
                    <input type="text" aria-label="search bar" class="search-field w-100 d-block translate-placeholder" placeholder="Search" data-i18n="search">
                    <span class="icon-search position-absolute"></span>
                  </div>
                </form>
              </div>
              <template v-if="!isLoggedIn">
                <a href="#" data-toggle="modal" data-target="#loginModal" class="btn btn-primary text-uppercase ml-4 login-btn translate-text" data-i18n="login">Login</a>
                <a href="#" data-toggle="modal" data-target="#signUpModal" class="btn btn-secondary text-uppercase ml-4 logout-btn translate-text" data-i18n="signup">Sign Up</a>
              </template>
              <button id="burger-menu" type="button" class="btn-menu m-0 p-0 border-0 ml-4 ease"></button>
            </div>
            <!-- end menu and user name -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  module.exports = {
    props: {
      currentPage: String,
      isLoggedIn: Boolean
    },
  }
</script>