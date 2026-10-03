import Link from 'next/link';

export default function BlogAuthor() {
  return (
    <p className="mb-6 font-inter text-sm text-muted">
      Von{' '}
      <Link
        href="/facts/holger-peschke"
        rel="author"
        className="inline-flex min-h-11 items-center text-ink underline underline-offset-4 hover:text-magenta-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        Holger Peschke
      </Link>
      <span className="block sm:inline"> · Gründer von AImation</span>
    </p>
  );
}
