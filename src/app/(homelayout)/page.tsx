import RecentServices from "@/components/PopularServices";
import heroImage from "../../assets/car-banner.jpg";
import Image from "next/image";
import PopularServices from "@/components/PopularServices";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import UpcomingServices from "@/components/UpcomingServices";
import News from "@/components/News";
import Overview from "@/components/Overview";
import Category from "@/components/Category";



export default function Home() {
  return (
    <>
      <div className="bg-gray-50 relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Revive Your Ride: Expert Car Repairs, Exceptional Results!
             
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            At Car Repair, we understand the vital role your vehicle plays in your daily life. Our expert team of skilled technicians is here to ensure your car runs smoothly, efficiently, and safely on the road. With a commitment to excellence and a passion for all things automotive, we offer a comprehensive range of car repair services that cater to your specific needs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
      <Image
            className="w-full max-h-[800px]"
            src={heroImage}
            width={10000}
            alt="Hero image"
          />
      </div>
    </div>
      <PopularServices />
      <UpcomingServices />
      <News />
      <Category />
      <Overview />
      <Testimonials />
      <Stats />
      <Gallery />
      <AboutUs />
    </>
  );
}