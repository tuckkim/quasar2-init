<template>
  <q-page class="flex column justify-center items-center">
    <h3>Hellow World!</h3>
    <div>{{ $t('failed') }}</div>
    <div>{{ $n(10000.9876, 'currency') }}</div>
    <div>{{ $n(10000.9876, 'decimal') }}</div>
    <div>{{ $n(10000.9876, 'percent') }}</div>
    <q-select
      v-model="locale"
      :options="localeOptions"
      label="Quasar Language"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const $q = useQuasar();
    const { locale } = useI18n({ useScope: 'global' });
    const ua = $q.platform.userAgent;

    return {
      ua,
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'zh-CN', label: 'Chinese' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
