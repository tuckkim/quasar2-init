import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export default boot(({ app }) => {
  const numberFormats = {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: true,
      },
    },
    'zh-CN': {
      currency: {
        style: 'currency',
        currency: 'RMB',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: true,
      },
    },
  };

  const i18n = createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    numberFormats,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
