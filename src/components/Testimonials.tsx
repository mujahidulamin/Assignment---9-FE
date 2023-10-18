/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useGetFeedbackQuery } from "@/redux/api/feedbackApi";

const Testimonials = () => {

    const { data, isLoading } = useGetFeedbackQuery({});

  return (

    <section className="bg-white my-10 max-w-[1200px] mx-auto">

<div className  ="text-center mb-6">

    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold text-center">
            Client Reviews
          </h1> 
    </div>

      {
		data?.map((feedback: any , index: any) => <div key={feedback?._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
		<div className="flex justify-between p-4">
			<div className="flex space-x-4">
				<div>
					<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
				</div>
				<div>
					<h4 className="font-bold">{feedback.name}</h4>
					<span className="text-xs dark:text-gray-400">{feedback.createdAt}</span>
				</div>
			</div>
			<div className="flex items-center space-x-2 dark:text-yellow-500">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
					<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
				</svg>
				<span className="text-xl font-bold">{feedback.rating}</span>
			</div>
		</div>
		<div className="p-4 space-y-2 text-sm dark:text-gray-400">
			<p>{feedback.feedback}</p>
		</div>
	</div>)
	  }					
    </section>
  );
};

export default Testimonials;





// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { useGetFeedbackQuery } from "@/redux/api/feedbackApi";

// const Testimonials = () => {

// 	const { data, isLoading } = useGetFeedbackQuery({});
// 	console.log(data);

// 	const [feedBack, setFeedBack] = useState(null)

// 	console.log(feedBack)

// 	const datas = data?.map(data => setFeedBack(data))

//   const [reviews, setReviews] = useState(feedBack);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   return (
//     <section className="bg-white my-10 max-w-[1200px] mx-auto">
//       <div className="px-6 py-10">
//         <div className="text-center">
//           <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
//             Clients <span className="text-teal-600">Review</span>
//           </h1>

//           <p className="max-w-lg mx-auto mt-4 text-gray-500">
//             What our clients say about us
//           </p>
//         </div>

//         <div className="mt-8 md:mt-10">
//           <div className="flex items-start max-w-6xl mx-auto mt-16">
//             <button
//               onClick={handlePrev}
//               title="left arrow"
//               className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>

//             <div>
//               <p className="flex items-center text-center text-gray-500 lg:mx-8">
//                 {reviews[currentIndex].text}
//               </p>

//               <div className="flex flex-col items-center justify-center mt-8">
//                 <Image
//                   height={56}
//                   width={56}
//                   className="object-cover rounded-full w-14 h-14"
//                   src={reviews[currentIndex].image}
//                   alt=""
//                 />

//                 <div className="mt-4 text-center">
//                   <h1 className="font-semibold text-gray-800 dark:text-white">
//                     {reviews[currentIndex].author}
//                   </h1>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     {reviews[currentIndex].role}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleNext}
//               title="right arrow"
//               className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;