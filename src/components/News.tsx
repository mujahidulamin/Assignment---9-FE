"use client";

import Loading from "@/app/loading";
import { useGetAllNewsQuery } from "@/redux/api/newsApi";
import dayjs from "dayjs";
import Image from "next/image";

const News = () => {
  const { data, isLoading } = useGetAllNewsQuery({});
  if (isLoading) return <Loading />;
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="container px-6 py-10 mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold mb-20">
            Latest News
          </h1>
    
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {data?.blogs?.map((blog: any, index: any) => (
            <article  key={blog?._id} className="flex flex-col h-full w-full overflow-hidden rounded-lg bg-gray-100 p-5">
              <Image
                alt=""
                height={200}
                width={200}
                className="object-cover w-full h-52 "
                src={blog.image_url}
              />
              <div className="mt-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracki uppercase hover:underline"
                >
                  Car News
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  {(blog?.title).slice(0, 40)}...
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>{dayjs(blog?.createdAt).format("MMM D, YYYY")}</span>
                  <span>{blog?.views}K views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;