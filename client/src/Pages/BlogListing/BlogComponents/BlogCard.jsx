import React from "react";

const BlogCard = ({title,date,description,imgUrl}) => {
  return (
    <div className="flex h-[10rem] rounded-[20px] border-[#EAEAEA] border-[1px] overflow-hidden mb-[30px]">
      <div className="flex-[2]">
        <img
          src="../../../public/hình 1.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex-[3] group hover:bg-neutral-whitegrey">
        <h3 className="mt-5 px-5 font-bold group-hover:text-primary-default">
          {title}
        </h3>
        <div className="mt-2 px-5 flex items-center">
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
          <span>{date}</span>
        </div>
        <div className="mt-2 px-5">{description}</div>
      </div>
    </div>
  );
};

export default BlogCard;
