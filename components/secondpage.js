function navbar(){
    return `<div id="firstNavContainer">
    <div class="show-flex">
      <h6>women</h6>
      <a href="men.html"><h6>men</h6></a>
      <h6>kids</h6>
    </div>
    <div id="logo">
     <a href="/"><h1>FARFETCH</h1></a>
    </div>
    <div class="show-flex">
      <a href="signin.html"><i class="fas fa-user fa-2x"></i></a>
      <i class="far fa-star fa-2x"></i>
      <a href="cart.html"><i class="fas fa-shopping-bag fa-2x"></i></a>
      <!-- <input type="search" placeholder="Search fa-2x">
          <button><i class="fas fa-search fa-1.4x"></i></button> -->
    </div>
  </div>
  <div id="secondNavContainer">
    <div class="show-flex">
      <h6 id="off">20% Off</h6>
      <h6 id="sale">Sale</h6>
      <a href="newin.html"><h6 id="new">New In</h6></a>
      <h6 id="shop">Shop By</h6>
      <h6 id="Designers">Designers</h6>
      <h6 id="cloth">Clothing</h6>
      <h6 id="show">Shows</h6>
      <h6 id="sneaker">Sneakers</h6>
      <h6 id="bag">Bags</h6>
      <h6 id="accer">Accessories</h6>
      <h6 id="watch">Watches</h6>
    </div>

    <div id="search">
      <input type="search" placeholder="Search" />
      <button><i class="fas fa-search fa-lg"></i></button>
    </div>
  </div>`
}

function footer(){
    return `<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4 class="display-1">FARFETCH APP</h4>
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
export {navbar , footer} 