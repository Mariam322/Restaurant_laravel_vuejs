<template>
  <body>

    <div >
     
<div class="container-fluid">
<div class="row main-content bg-white text-center">
  <div class="col-md-4 text-center company__info">
    <span class="company__logo"><h2></h2></span>
   
  </div>
  <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
    <div class="container-fluid">
      <div class="row">
        <h2>Register</h2>
      </div>
      <div class="row">
        <form control="" class="form-group">
          <div class="row">
       
          <input type="text" name="name" id="name" v-model="newUser.name" class="form__input" placeholder="name">
          </div>
          <div class="row">
        
          <input type="text" name="email" id="email" v-model="newUser.email" class="form__input" placeholder="email">
          </div>
       
          <div class="row">
  
            <input type="password" name="password"  v-model="newUser.password" id="password" class="form__input" placeholder="Password">
          </div>

          <button type="submit" class="btn btn-primary" @click="addUser">

ok</button>
     
          <div class="row">
            <p>  <router-link :to="{ name: 'login' }" class="btn">Register
              </router-link></p>
          </div>
        </form>
      </div>
 
  
    </div>
  </div>
</div>
</div>



          
</div>
</body>
</template>

<script setup>

import axios from "axios"
import { useRouter } from 'vue-router';
const router = useRouter()

let newUser= {}




const addUser=async()=>{
     axios.post('http://localhost:8000/api/register',newUser)
     .then(response => {
console.log(response)
router.replace({ name: 'login' })
})
.catch(err => {console.log(err);alert(err) })

}
</script>



<style lang="css" scoped>
.company__logo{
height: 200px;
  
}
.main-content{
  position: center;
	width:50%;
  height: 200spx;
	border-radius: 20px;
	box-shadow: 0 5px 5px rgba(0,0,0,.4);
	margin: 5em auto;
	display: flex;
  border-color:black;
  margin-top: 200p;
}
.company__info{
	background-image:url('../../../../assets//images/gr.png');
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;

	flex-direction: column;
	justify-content:center;
	background-color:#E2E6E4;
  background-size:200px;
  background-repeat:no-repeat;
  background-position:center;
 


}
body{
  background-image: url('../../../../assets/images/rr.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 700px;
  margin: 0;
  padding: 0;
  top:0;

  
 
}
.fa-android{
	font-size:3em;
}
@media screen and (max-width: 640px) {
	.main-content{width: 90%;}
	.company__info{
		display: none;
	}
	.login_form{
		border-top-left-radius:20px;
		border-bottom-left-radius:20px;
	}
}
@media screen and (min-width: 642px) and (max-width:800px){
	.main-content{width: 70%;}
}
.row > h2{
	color:#008080;
}
.login_form{
	background-color: #fff;
	border-top-right-radius:20px;
	border-bottom-right-radius:20px;
	border-top:1px solid #ccc;
	border-right:1px solid #ccc;
}
form{
	padding: 0 2em;
}
.form__input{
	width: 100%;
	border:0px solid transparent;
	border-radius: 0;
	border-bottom: 1px solid #aaa;
	padding: 1em .5em .5em;
	padding-left: 2em;
	outline:none;
	margin:1.5em auto;
	transition: all .5s ease;
}
.form__input:focus{
	border-bottom-color: #008080;
	box-shadow: 0 0 5px rgba(0,80,80,.4); 
	border-radius: 4px;
}
.btn{
	transition: all .5s ease;
	width: 70%;
	border-radius: 30px;
	color:#008080;
	font-weight: 600;
	background-color: #fff;
	border: 1px solid #008080;
	margin-top: 1.5em;
	margin-bottom: 1em;
}
.btn:hover, .btn:focus{
	background-color: #008080;
	color:#fff;
}
.fa-lock{
  margin-left:-200px;
}

</style>