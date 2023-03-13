<template>
    <div class="header-wrapper">
      <div className="header-content">
        <div className="logo">
          <img src="../../assets/img/logo.png" alt="" />
        </div>
        <div className="menu-wrapper">
          <input type="checkbox" className="burgermenu" />
        </div>
        <div className="nav">
          <a @click="setCurrent($event)" className="nav-item" href="#section1">
            <div className="item-text current">About Me</div>
          </a>
          <a @click="setCurrent($event)" className="nav-item" href="#section2">
            <div className="item-text">Services</div>
          </a>
          <a @click="setCurrent($event)" className="nav-item" href="#section3">
            <div className="item-text">Models</div>
          </a>
          <a @click="setCurrent($event)" className="nav-item" href="#section4">
            <div className="item-text">Contact</div>
          </a>
        </div>
      </div>
    </div>
</template>

<script src="./Header.js" lang="js"/>
<style src="./Header.css" lang="css"></style>

