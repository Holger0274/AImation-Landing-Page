import { createNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: ['de', 'en'],
  localePrefix: 'as-needed',
});
