"use client";

import Loading from "@/app/loading";
import { useGetAllFaqQuery } from "@/redux/api/faqApi";

const FAQPage = () => {
  const { data, isLoading } = useGetAllFaqQuery({});
  if (isLoading) return <Loading />;
  return (
    <section className=" text-gray-800 min-h-screen">
      <div className="container flex flex-col justify-center px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl lg:font-bold mt-10">
           Frequently Asked Questions
          </h1>
        </div>
        <div className="text-left mt-20 w-96 mx-auto text-lg">
          {data?.faq?.map((item: any) => (
            <div key={item?._id}>
             	<details>
				<summary className="py-4 outline-none cursor-pointer focus:underline">{item?.question}</summary>
				<div className="px-4 pb-4 text-justify">
					<p>{item?.answer}</p>
				</div>
			</details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
