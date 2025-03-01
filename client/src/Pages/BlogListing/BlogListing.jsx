import React, { useState } from "react";
import BlogCard from "./BlogComponents/BlogCard";

const BlogListing = () => {
  const blogs = [
    {
      title: "random",
      description: "desc",
      date: "dd/mm/yyyy",
      category: "Commercial",
    },

    {
      title: "random",
      description: "desc",
      date: "dd/mm/yyyy",
      category: "Shop",
    },

    {
      title: "random",
      description: "desc",
      date: "dd/mm/yyyy",
      category: "Educate",
    },
  ];

  const categories = [
    "Commercial",
    "Office",
    "Shop",
    "Educate",
    "Academy",
    "Single family home",
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategories = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredBlogs =
    selectedCategories.length === 0
      ? blogs
      : blogs.filter((blog) => selectedCategories.includes(blog.category));

  return (
    <div className="bg-white flex justify-center items-center">
      <div className="bg-blue-300 w-[56rem] flex">
        <div className=" flex-[3] px-3">
          <div className="flex mb-[30px] mt-[50px]">
            <h2 className="font-bold">All Articles</h2>
            <input
              type="text"
              placeholder="Search..."
              className="border-b-2 border-gray-500 outline-none"
            />
            <button className="mx-4 w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6">
                <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
              </svg>
            </button>
          </div>
          {filteredBlogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                date={blog.date}
              />
            );
          })}
        </div>

        <div className="flex-[1] px-3">
          <div className="mt-[50px]">
            <h3 className="mb-3">Category</h3>
            <ul className="my-3">
              {categories.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <li key={category} className="flex">
                    <div
                      className={`flex-[4] cursor-pointer ${
                        isSelected ? "font-bold" : ""
                      }`}
                      onClick={() => toggleCategories(category)}>
                      {category}
                    </div>
                    <span className="flex-[1] text-right">15</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Recent Posts</h3>
            {/* picture + title */}
          </div>
          <div>
            <h3 className="mb-3">Tags</h3>
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
