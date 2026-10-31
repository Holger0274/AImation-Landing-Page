import { setRequestLocale } from 'next-intl/server';
import GermanOnlyNotice from '@/components/GermanOnlyNotice';
import EngineeringArticle, { engineeringArticleMetadata } from '@/components/blog/EngineeringArticle';
import { ENGINEERING_ARTICLES } from '@/lib/data/engineering-articles';
export const dynamic = 'force-static';
const article = ENGINEERING_ARTICLES.find(item => item.key === 'changes')!;
export const metadata = engineeringArticleMetadata(article);
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === 'en') return <GermanOnlyNotice namespace="enBlogNotice" href={`/blog/${article.slug}`} />;
  return <EngineeringArticle article={article} />;
}
