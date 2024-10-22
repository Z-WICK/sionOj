<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
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
#basicLayout {
}

#basicLayout .header {
  background: red;
}

#basicLayout .content {
  background: linear-gradient(to right, #f5f5f5, #fff);
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
