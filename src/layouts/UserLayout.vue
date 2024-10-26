<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/ic_contact.jpg" class="logo" />
          <div>sion Oj</div>
        </a-space>
      </a-layout-header>
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
  text-align: center;
}

#userLayout .header {
  margin-bottom: 16px;
}

#userLayout .content {
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

#userLayout .logo {
  width: 64px;
  height: 64px;
}
</style>
<script setup lang="ts"></script>
