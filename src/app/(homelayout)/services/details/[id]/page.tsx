"use client";

import Loading from "@/app/loading";
import BreadCrumb from "@/components/ui/BreadCumb";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "@/redux/api/reviewApi";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { Rate, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";

type IDProps = {
  params: any;
};
const ServiceDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const { userId } = getUserInfo() as any;
  const [value, setValue] = useState(1);

  const { data, isLoading } = useSingleServiceQuery(id);
  const { data: reviews, isLoading: isReviewLoading } = useGetReviewsQuery(id);
  console.log(reviews);

  const [addReview] = useAddReviewMutation();
  const handleAddComment = async (e: any) => {
    e.preventDefault();
    const comment = e.target.message.value;
    const options = {
      user_id: userId,
      service_id: data?._id,
      comment: comment,
      rating: value,
    };
    const response = await addReview(options).unwrap();
    if (response?._id) {
      message.success("Review added successfully");
    } else {
      message.error("Failed to add review");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <section className="bg-white my-10 max-w-[1200px] mx-auto">
      <div className="md:mb-2 mb-0 mx-5 md:mx-0">
        <BreadCrumb
          items={[
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Services",
              link: "/services",
            },
            {
              label: "Details",
              link: `/services/details/${data?._id}`,
            },
          ]}
        />
      </div>

      <div className="">
                <Image
                  height={100}
                  width={100}
                  alt=""
                  src={data?.image_url}
                  className="w-[50%] rounded-lg  shadow-sm mx-auto"
                />
              </div>



      <div>
        <div className="flex justify-center pt-10 pb-20 mx-5 md:mx-0">
          <div className="rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 w-[50%] shadow-md">
            <div className="">
              <div>
                <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {data?.name}
                </h1>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  Price: ${data?.price}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 text-justify">
                <span className="font-semibold">Description:</span>{" "}
                {data?.description}
              </p>
            </div>
            <dl className="mt-6 flex gap-4 sm:gap-6 justify-between">
              <dd className="text-xs text-gray-500">
                Status: {data?.availability ? "Available" : "Not Available"}
              </dd>
            </dl>
            {
              data?.availability ?

              <>
              <div className="flex justify-center">
              <Link href={`/appointment/${id}`}>
                <Button htmlType="submit"> Book Service</Button>
              </Link>
            </div>
              </>

              :

            <>
            <div className="flex justify-end">
            Please see the other services
            </div>
            
            </>
              
            }
          </div>
        </div>
        <div className="mx-4 md:mx-20">
          {" "}
          <hr />

           <div>
           <form onSubmit={handleAddComment} className=" md:mt-5 mt-6">
              {" "}
              <textarea
                id="message"
                name="message"
                className="block p-2.5 w-[100%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600"
                placeholder="Write your thoughts here..."
              ></textarea>
 <div className="m-3 flex justify-center my-6">
                <Rate onChange={setValue} value={value} />
              </div>

              {userId ? (
                <div className="flex justify-center mt-6">
                  <Button htmlType="submit"> Submit</Button>
                </div>
              ) : (
                <div className="flex justify-center mt-2">
                  <small className="text-blue-400">
                    Please Login First
                  </small>
                </div>
              )}
            </form>
           </div>



          <div className="my-5 md:my-10 flex flex-col gap-5 md:gap-20">
            <div className="md:mt-3">
              {" "}
              {reviews?.map((review: any, index: any) => (
                <article
                  key={index}
                  className="rounded-xl shadow-sm border border-gray-200 p-4 my-3 w-[100%]"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      height={100}
                      width={100}
                      alt="Developer"
                      src={`https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?${index}`}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-md font-medium text-gray-800">
                        {review?.user_id?.name?.firstName}{" "}
                        {review?.user_id?.name?.lastName}
                      </h3>
                      <div className="flow-root">
                        <p className="py-2 leading-none text-md font-medium text-gray-400">
                          {review?.comment}
                        </p>
                        <div className="text-xs">
                          <Rate disabled defaultValue={review?.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;