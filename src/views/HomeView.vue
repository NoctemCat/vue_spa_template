<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: 'local' });
</script>

<template>
  <main>

  </main>
</template>

<style lang="scss" scoped>

</style>

<i18n lang="json5" locale="en">
{
  "home.home": "Home",
}
</i18n>
<i18n lang="json5" locale="ru">
{
  "menu.home": "Главная",
}
</i18n>