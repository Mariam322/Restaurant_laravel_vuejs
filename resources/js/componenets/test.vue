<template>

<div>
<div >
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway|Open+Sans">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</div>
 <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
        
          <li class="dropdown"><a href="#"><span>VISAGE</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>




          <li class="dropdown"><a href="#"><span>CORPS</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>CHEVEUX</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>



          <li class="dropdown"><a href="#"><span>SOLAIRES</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>


          <li class="dropdown"><a href="#"><span>HYGIENE</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li class="dropdown"><a href="#"><span>BEBE</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                 <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
        <li><a class="dropdown-item" href="#">Mega Menu Link</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><router-link to="/Contact">Contact</router-link> </li>
        </ul>
      </nav>
	
</div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  .navbar {
  padding: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #637f7b;
  white-space: nowrap;
  transition: 0.3s;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #1bbca3;
}

.navbar .getstarted,
.navbar .getstarted:focus {
  background: #1bbca3;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}

.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
  color: #fff;
  background: #1ed2b6;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 500;
  text-transform: none;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: #1bbca3;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #58716d;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
  </style>