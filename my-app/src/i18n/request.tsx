import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '@/shared/services/locale.service';
export default getRequestConfig(async () => {
    // ดึงค่าจาก Cookies
    const locale = await getUserLocale();
    return {
        locale,
        messages: (await import(`../../message/${locale}.json`)).default
    };
});