"use client";

import Loading from "@/app/loading";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});
  if (isLoading) return <Loading />;
  return (
    <section className="min-h-screen max-w-[1200px] mx-auto">
      <div className="container px-6 py-10 mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-6xl lg:font-bold mb-16">
            Blogs
          </h1>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {data?.blogs?.map((blog: any, index: any) => (
            <Link key={blog?._id} href={`/blog/details/${blog?._id}`}>
              <article className="flex flex-col h-full w-full overflow-hidden rounded-lg bg-gray-100 p-5 ">
                <Image
                  alt=""
                  height={200}
                  width={200}
                  className="object-cover w-full h-52 "
                  src={blog.image_url}
                />
                <div className="flex flex-col flex-1">
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    {(blog?.title).slice(0, 40)}...
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 text-xs ">
                    <span>{dayjs(blog?.createdAt).format("MMM D, YYYY")}</span>
                    <span>{blog?.views}K views</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
