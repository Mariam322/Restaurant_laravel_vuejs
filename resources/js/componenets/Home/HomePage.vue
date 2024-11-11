<template>
  <div  class="background-container">
    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">

  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="ff">Welcome to <span>Restaurantly</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>
      </div>

          <div class="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
        </div>

    </div>
  </section>
   </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ff{
  margin-top: 500px;
}
#hero {
    width: 100%;
    height: 100vh;
    background: url(../img/hero-bg.jpg) top center;
    background-size: cover;
    position: relative;
    padding: 0;
}
.align-items-center {
    align-items: center!important;
}
.d-flex {
    display: flex!important;
}
section {
    padding: 60px 0;
    overflow: hidden;
}
*, ::after, ::before {
    box-sizing: border-box;
}
section {
    display: block;
}
@media (max-width: 992px){
#hero .container {
    padding-top: 98px;
}
}
#hero .container {
    padding-top: 110px;
}
#hero h1 span {
    color: #cda45e;
}
@media (max-width: 768px){
#hero h2 {
    font-size: 18px;
    line-height: 24px;
}
}
#hero h2 {
    color: #eee;
    margin-bottom: 10px 0 0 0;
    font-size: 22px;
}
#hero .btns {
    margin-top: 30px;
}
div {
    display: block;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
}


#hero .btn-menu, #hero .btn-book {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.3s;
    line-height: 1;
    color: white;
    border: 2px solid #cda45e;
}
a {
    color: #cda45e;
    text-decoration: none;
}
[data-aos].aos-animate {
    pointer-events: auto;
}


#hero .btn-menu, #hero .btn-book {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.3s;
    line-height: 1;
    color: white;
    border: 2px solid #cda45e;
}
a {
    color: #cda45e;
    text-decoration: none;
}
a {
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline;
}
*, ::after, ::before {
    box-sizing: border-box;
}
feuille de style user-agent
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
}
[data-aos].aos-animate {
    pointer-events: auto;
}

.text-center {
    text-align: center!important;
}
a {
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline;
}
*, ::after, ::before {
    box-sizing: border-box;
}
#hero .btn-menu, #hero .btn-book {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.3s;
    line-height: 1;
    color: white;
    border: 2px solid #cda45e;
}
#hero .btn-book {
    margin-left: 15px;
}
a {
    color: #cda45e;
    text-decoration: none;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
a {
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline;
}
.background-container {
  background-image: url('../../../../assets/images/dish.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height as needed */
  opacity: 0.7;
  background-color:linear-gradient(180deg, rgba(255, 255, 255, 0.15) , rgba(255, 255, 255, 0))
  
}
@media screen and (max-width: 768px) {
[data-aos-delay] {
    transition-delay: 0 !important;
  }

 
}
h2{
   padding-top: 250px;
   padding-left: 60px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
#hero .btns {
    margin-top: 8x;
    margin-bottom: 500px;
}

  .btn {
    background: #34bf49;
    display: inline-block;
    font-size: 16px;
    text-transform: capitalize;
    padding: 10px 30px;
    font-weight: normal;
    border-radius: 0px;
    color: #fff;
    position: relative;
    overflow: hidden;
    border: none;
    font-family: "Josefin Sans";
    text-align: center;
    opacity: 1;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    z-index: 1;
    position: relative;
}
.btn:before {
    top: 0;
    height: 100%;
    width: 0%;
    left: auto;
    right: 0;
    z-index: -1;
    content: "";
    position: absolute;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.purchase-button .btn {
    font-size: 20px;
}
</style>