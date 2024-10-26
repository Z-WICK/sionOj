<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> 用户布局</a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        Sion ©2024 Created by Ant Design
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#userLayout {
}

#userLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #f5f5f5, #fff);
  padding: 20px;
  margin-bottom: 16px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
