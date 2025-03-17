import React, { useState } from "react";

const BlogList = ({ selectedCategories, selectedTags, blogs }) => {
  const [displayList, setDisplayList] = useState(2);

  const toggleDisplayList = (type) => {
    setDisplayList((prev) => (prev !== type ? type : prev));
  };

  const categoryBlogs =
    selectedCategories.length === 0
      ? blogs
      : blogs.filter((blog) => selectedCategories.includes(blog.category));
  const filteredBlogs =
    selectedTags.length === 0
      ? categoryBlogs
      : categoryBlogs.filter((blog) =>
          blog.tag.some((tag) => selectedTags.includes(tag))
        );

  return (
    <>
      <div className="flex mb-[30px]">
        <h2 className="font-bold">All Articles</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border-b-2 border-gray-500 outline-none"
        />
        <button className="mx-4 w-12" onClick={() => toggleDisplayList(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 ${
              displayList === 1 ? "text-primary-default" : ""
            }`}>
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="w-12" onClick={() => toggleDisplayList(2)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 ${
              displayList === 2 ? "text-primary-default" : ""
            }`}>
            <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
          </svg>
        </button>
      </div>
      <div
        className={` ${
          displayList === 1
            ? " grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            : "flex flex-col gap-2 flex-wrap"
        }`}>
        {filteredBlogs.map((blog, index) => {
          return (
            <div
              key={index}
              className={`flex  rounded-[20px] border-[#EAEAEA] border-[1px] overflow-hidden mb-[10px] cursor-pointer ${
                displayList === 2 ? "h-[10rem] flex-row" : "flex-col"
              }`}>
              <div
                className={`${
                  displayList === 2 ? "w-1/3" : "w-full"
                } flex items-center justify-center`}>
                <img
                  src="../../../public/hình 1.png"
                  className="w-full  h-full  object-cover"
                  alt=""
                />
              </div>
              <div
                className={`${
                  displayList === 2 ? "flex-1" : "w-full"
                } group hover:bg-neutral-whitegrey`}>
                <h3
                  className={`${
                    displayList === 2 ? "mt-5" : "mt-2"
                  } px-5 font-bold group-hover:text-primary-default`}>
                  {blog.title}
                </h3>
                <div
                  className={`${
                    displayList === 2 ? "mt-2" : "mt-1"
                  } px-5 flex items-center`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline-block h-4 w-4 mr-2 text-primary-default">
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{blog.date}</span>
                </div>
                <div className={`${displayList === 2 ? "mt-2" : ""} px-5 pb-2`}>
                  {blog.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
