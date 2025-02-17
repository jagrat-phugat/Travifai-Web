

import Bloghero from "../components/Bloghero/Bloghero.jsx";
import FeaturedBlog from "../components/FeaturedBlog/FeaturedBlog.jsx";
import AllBlogs from "../components/AllBlogs/AllBlogs.jsx";
const BlogPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Bloghero />
        <FeaturedBlog/>
        <AllBlogs />
      </>
    </main>
  );
};

export default BlogPage;
