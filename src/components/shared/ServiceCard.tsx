import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <Image
        src={service?.image_url}
        width={1000}
        height={1000}
        alt="Service image"
      />

      <div className="flex-grow flex flex-col px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          {service?.title}
        </h1>
        <p className="py-2 text-gray-700 font-semibold">{service?.name}</p>
        <p className="text-gray-700 font-semibold">
          Price: <span className="font-normal">${service?.price}</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          <span className="font-normal">
            {(service?.description).slice(0, 180)}...
          </span>
        </p>
        <div className="flex-grow"></div>
        <div className="button_part flex justify-center">
          <Link href={`/services/details/${service?._id}`}>
            <Button htmlType="submit"> View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
