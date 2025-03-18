import React from "react";
import BlogGridItem from "./BlogGridItem";

function BlogSection() {
  return (
    <div className="text-center md:py-20 border-b mx-6 px-4 py-8 font-inter md:mx-[60px]">
      <h1 className="font-bold text-2xl mb-2 text-[35px]">
        Recent Updates & <span className="text-[#FC9713]">Blog Post</span>
      </h1>
      <h2 className="md:mx-60 hidden md:inline-block">
        We bring you the latest trends and expert opinions all in one place,
        helping you stay ahead and make informed decisions.
      </h2>

      <div className="grid md:grid-flow-col grid-flow-row items-center justify-center gap-[25px]">
        <BlogGridItem
          icon="/bg-01.png"
          heading="Trends and innovation in best Construction
"
          description="Building components are constructed offsite and then assembled onsite,reducing construction
"
        />
        <BlogGridItem
          icon="/bg-02.png"
          heading="Stories of Construction Our world Creativity"
          description="The creative process in architecture involves blend of engineering aesthetic,and environmental"
        />
        <BlogGridItem
          icon="/bg-03.png"
          heading="Innovative trends transform Construction"
          description="Theconstruction of philosophical System like Immanuel kants critique of pure resonor japan "
        />
      </div>
      <button className="bg-[#FC9713] text-black px-6 py-2 rounded-md mt-10 md:mt-[100px] md:h-[48px] md:w-[180px] cursor-pointer font-semibold">
        More Articles
      </button>
    </div>
  );
}

export default BlogSection;
