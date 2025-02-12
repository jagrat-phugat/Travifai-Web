

import Bloghero from "../components/Bloghero/Bloghero.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";

const BlogPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Bloghero />
        <Blogs/>
      </>
    </main>
  );
};

export default BlogPage;
