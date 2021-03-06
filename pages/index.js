import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
  { id: 1, title: "REact testing", excerpt: "learn react testing" },
  { id: 2, title: "REact with tailwind", excerpt: "learn react with tailwind" },
];

export default function Home() {
  const postsList = () => {
    return posts.map((post) => <PostCard post={post} />);
  };

  return (
    <div className="container mx-auto px-10 mb-8" >
      <Head>
        <title>Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid gird-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-12 col-span-1'>dada</div>
        <div className="lg:col-span-8 col-span-1">{postsList()}</div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
