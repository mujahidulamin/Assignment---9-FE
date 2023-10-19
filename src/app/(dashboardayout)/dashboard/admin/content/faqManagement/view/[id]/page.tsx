"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Image from "next/image";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import { useGetSingleFaqQuery } from "@/redux/api/faqApi";

type IDProps = {
  params: any;
};

const ViewFAQPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleFaqQuery(id);

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
            label: "FAQ",
            link: "/dashboard/admin/content/faqManagement",
          },
          {
            label: "View",
            link: `/dashboard/admin/content/faqManagement/view/${id}`,
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Your Posted FAQ</h1>
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
          <article className="flex transition rounded-md">
            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    {data?.question}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {data?.answer}
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Created: {dayjs(data?.createdAt).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ViewFAQPage;
