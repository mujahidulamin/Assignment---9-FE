"use client";

import React from "react";
import CategoryCard from "./shared/CategoryCard";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";

const Category = () => {
  const { data, isLoading } = useGetAllCategoryQuery({});
  return (
    <section className="bg-white max-w-[1200px] mx-auto my-10">
      <div className="px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Featured <span className="text-teal-600">Category</span>
          </h1>
          <p className="mt-4 text-gray-500">Our product Featured Category!</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3 xl:grid-cols-3">
          {data?.map((card: any) => (
            <CategoryCard key={card?._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;