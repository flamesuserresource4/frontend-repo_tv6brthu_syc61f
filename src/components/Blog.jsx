import React from 'react';

const PostCard = ({ title, excerpt, tag }) => (
  <article className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 ring-1 ring-sky-100 backdrop-blur transition hover:shadow-md">
    <div className="flex items-center gap-2 text-xs text-sky-700">
      <span className="rounded-full bg-sky-100 px-2 py-0.5 ring-1 ring-sky-200">{tag}</span>
      <span className="text-sky-400">•</span>
      <span className="text-sky-800/70">2 min read</span>
    </div>
    <h4 className="mt-3 text-xl font-semibold text-sky-900">{title}</h4>
    <p className="mt-2 text-sky-800/80">{excerpt}</p>
    <a href="#" className="mt-4 inline-flex items-center text-sky-700 hover:text-sky-900">
      Read more →
    </a>
  </article>
);

const Blog = () => {
  const posts = [
    {
      title: '5 calming bedtime rituals for toddlers',
      excerpt: 'Simple, consistent routines help little ones drift to sleep peacefully. Here are our favorites…',
      tag: 'Parent Tips',
    },
    {
      title: 'Inside our play-based curriculum',
      excerpt: 'From sensory bins to story circles, see how we spark curiosity every day in the classroom.',
      tag: 'Classroom',
    },
    {
      title: 'A gentle approach to big feelings',
      excerpt: 'Emotional learning matters. Here’s how we coach children through identifying and expressing feelings.',
      tag: 'Wellbeing',
    },
  ];

  return (
    <section id="blog" className="relative w-full bg-gradient-to-b from-white to-sky-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-inset ring-sky-200">From the Blog</span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-sky-900 md:text-4xl">
            Helpful reads for happy homes
          </h3>
          <p className="mt-3 text-lg text-sky-800/80">
            Short, practical insights from our educators and child development specialists.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <PostCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
