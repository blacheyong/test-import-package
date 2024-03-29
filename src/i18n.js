import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale,
    globalInjection: true,
    legacy: false,
    messages,
    runtimeOnly: false
})

export default i18n