function footer(){
    return `<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>FARFETCH APP</h4>
          <ul>
            <li><a href="">Farfetch App for iOS and Android</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>REGION AND LANGUAGE</h4>
          <ul>
            <li><a href="">India, USD $</a></li>
            <li><h4>Follow us</h4></li>
            <li class="social">
              <i class="fab fa-facebook fa-lg"></i>
              <i class="fa fa-twitter fa-lg"></i>
              <i class="fa fa-linkedin fa-lg"></i>
              <i class="fa fa-youtube fa-lg"></i>
            </li>
            <!-- <div class="footer-col"> -->
            <!-- <h4>FOLLOW US</h4>
              <div class="social-links">
                <a href="#"><i class="fa fa-facebook-f"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div> -->
            <!-- </div> -->
          </ul>
        </div>
        <div class="footer-col">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li><a href="">Help & contact us</a></li>
            <li><a href="">Orders & shipping</a></li>
            <li><a href="">Payment & pricing</a></li>
            <li><a href="">Returns & refunds</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Terms & conditions</a></li>
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Accessibility</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="">about us</a></li>
            <li><a href="">Investors</a></li>
            <li><a href="">Boutique Partners</a></li>
            <li><a href="">Affiliate Programme</a></li>
            <li><a href="">Student discount UNiDAYS</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Customer Promise</a></li>
            <li><a href="">FARFETCH App</a></li>
            <li><a href="">Sitemap</a></li>
            <li><a href="">Positively FARFETCH</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>`
}

function navbar(){
    return `<div id="firstNavContainer">
    <div class="show-flex">
      <h4>women</h4>
      <h4>men</h4>
      <h4>kids</h4>
    </div>
    <div id="logo">
      <h1>FARFETCH</h1>
    </div>
    <div class="show-flex">
      <i class="fas fa-user fa-2x"></i>
      <i class="far fa-star fa-2x"></i>
      <i class="fas fa-shopping-bag fa-2x"></i>
      <!-- <input type="search" placeholder="Search fa-2x">
          <button><i class="fas fa-search fa-1.4x"></i></button> -->
    </div>
  </div>
  <div id="secondNavContainer">
    <div id="choose">
      <h4>Please select a gender to shop</h4>
    </div>

    <div id="search">
      <input type="search" placeholder="Search" />
      <button><i class="fas fa-search fa-lg"></i></button>
    </div>
  </div>`
}
export {navbar,footer};