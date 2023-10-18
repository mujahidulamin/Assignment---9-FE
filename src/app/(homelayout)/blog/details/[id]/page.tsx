"use client";

import Loading from "@/app/loading";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import dayjs from "dayjs";
import Image from "next/image";

type IDProps = {
  params: any;
};
const BlogDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogQuery(id);
  if (isLoading) return <Loading />;
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="mt-6 mx-5">
        <UMBreadCrumb
          items={[
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Blog",
              link: "/blog",
            },
          ]}
        />
      </div>


   <div className ="mt-10">
          
   <Image
            height={800}
            width={480}
            src={data.image_url}
            alt=""
            className="w-full h-96 rounded sm:h-96 lg:col-span-7 "
          />
   </div>



      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {data?.title}
            </h3>
            <span className="text-xs ">
              {dayjs(data?.createdAt).format("MMM D, YYYY")}
            </span>
            <p className="text-justify">{data?.description}</p>
          </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
