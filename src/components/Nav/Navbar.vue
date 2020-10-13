<template>
    <div class="parent">
    <router-link class="logo" to="/"><img src="../../assets/logo.png" lang="logo"></router-link>
    <ul>
    <li>
    <router-link to="/arabicmovies"> Arabic movies </router-link>
    </li>
    <li>
    <router-link to="/englishmovies"> English movies </router-link>
    </li>
    <li>
    <router-link to="/arabicseries"> Arabic series </router-link>
    </li>
    <li>
    <router-link to="/englishseries"> English series </router-link>
    </li>
    </ul>
    </div>
</template>

<style  scoped>
ul{
    text-align: start;
    padding: 0;
    display: inline-block;
    width: 70%;
    text-align: start;
}
li{
    display: inline-block;
    margin: 10px 40px;
    height: 40px;
    list-style: none;
}
li a{
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 19px;
}
.logo{
    display: inline-block;
    vertical-align: top;
    margin: 13px 10px;
}
.logo img{
    width: 80%;
}
.parent{
    text-align: start;
}
</style>
