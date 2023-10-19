"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Image from "next/image";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Loading from "@/app/loading";
import dayjs from "dayjs";

type IDProps = {
  params: any;
};

const ViewBlogPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogQuery(id);

  if (isLoading) return <Loading />;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "Blog",
            link: "/dashboard/admin/content/blogManagement",
          },
          {
            label: "View",
            link: `/dashboard/admin/content/blogManagement/view/${id}`,
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Your Posted Blog</h1>
      </div>

      <div className="mt-10">
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <article className="flex transition  rounded-md">
            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    {data?.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {data?.description}
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Views: {data?.views}K
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Published: {dayjs(data?.createdAt).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogPage;
