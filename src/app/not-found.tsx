"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const NotFoundPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 50000);

  return (
    <div className="hero h-full lg:h-[80vh] bg-base-100">
      <div className="mt-20">
        <div>
          <h1 className="text-5xl font-bold">WE ARE SORRY,PAGE NOT FOUND!</h1>
          <p className="py-4 lg:max-w-2xl">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
        </div>
        <Image
          height={200}
          width={600}
          alt=""
          src="https://i.ibb.co/sWwQ342/error.png"
          className="w-[50%] rounded-lg  shadow-sm mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
