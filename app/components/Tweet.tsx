import React from "react";

import Image from "next/image";
import logo1 from "/public/bilal.jpg";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import Link from "next/link";

const Tweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border-2 bg-white flex">
      <Image src={logo1} alt="my pic" className="w-12 h-12 rounded-full mr-3" />
      <div className="w-full">
        <div className="flex">
          <Link href={"http://twitter.com/heybilal"}>
            <strong className="text-gray-700 mr-1">Bilal sahi</strong>
            <span className="text-gray-500 mr-1">@DasgingDude</span>
          </Link>
          <span className="text-gray-500 mr-1">&middot;</span>
          <span className="text-gray-500 ">Mar 18</span>
          <GoKebabHorizontal className="ml-auto" />
        </div>

        <div>
          You are amazing if you take time to comment on a tweet or Youtube
          video or a blogpost that has helped you!{" "}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FaRegComment className="mr-2 text-gray-600" />
            <span className="text-gray-600">20</span>
          </div>
          <div className="flex items-center">
            <FaRetweet className="mr-2 text-gray-600" />
            <span className="text-gray-600">17</span>
          </div>
          <div className="flex items-center">
            <AiOutlineHeart className="mr-2 text-gray-600" />
            <span className="text-gray-600">215</span>
          </div>
          <div className="flex items-center">
            <BsUpload className="mr-2 text-gray-600" />
          </div>
          <div className="flex items-center">
            <BiBarChart className="mr-2 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
