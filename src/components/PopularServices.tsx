"use client";
import { useState } from "react";
import SkeletonCard from "./shared/SkeletonCard";
import { useServicesQuery } from "@/redux/api/serviceApi";
import ServiceCard from "./shared/ServiceCard";
import Link from "next/link";
import { Button } from "antd";

const PopularServices = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useServicesQuery({ ...query });
  return (
    <section className="bg-white my-10 max-w-[1200px] mx-auto">
      <div className="px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold mb-10">
            Available Services
          </h1>
        </div>

        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {isLoading && [1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)}
          {data?.services?.map((service: any) => (
            <ServiceCard service={service} key={service?._id} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <Link href={`/services`}>
            <Button htmlType="submit">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
