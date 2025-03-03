import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const BlogListingLayout = ({
  selectedCategories,
  selectedTags,
  toggleCategories,
  toggleTags,
}) => {
  const categories = [
    "Commercial",
    "Office",
    "Shop",
    "Educate",
    "Academy",
    "Single family home",
  ];

  const tags = [
    "Free courses",
    "Marketing",
    "Idea",
    "LMS",
    "LearnPress",
    "Instructor",
  ];

  return (
    <div className="bg-white flex justify-center items-center ">
      <div className=" w-[56rem] flex mt-[50px]">
        <div className=" flex-[3] px-3">
          <Outlet />
        </div>

        <div className="flex-[1] px-3">
          <div>
            <h3 className="mb-3 font-bold">Category</h3>
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
            <h3 className="mb-3 font-bold">Recent Posts</h3>
            {/* picture + title */}
          </div>
          <div>
            <h3 className="mb-3 font-bold">Tags</h3>
            <div className="flex flex-wrap ">
              {tags.map((tag, index) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <div className="w-fit m-[3px]" key={index}>
                    <button
                      className={`outline-none rounded-[8px] px-[20px] py-[3px] border-[1px] hover:font-bold hover:bg-neutral-lightgrey ${
                        isSelected
                          ? "pressed font-bold bg-neutral-whitegrey"
                          : ""
                      }`}
                      onClick={() => toggleTags(tag)}>
                      {tag}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListingLayout;
