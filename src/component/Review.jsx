import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaQuoteRight } from "react-icons/fa6";
import { reviewList } from "../utils/Const";
const Review = () => {
  const userReviewList = reviewList;
  return (
    <div
      className="bg-primaryColorLight dark:bg-darkColorLight py-20"
      id="Review"
    >
      <div className="container">
        <div className="max-w-md mx-auto text-center mb-4">
          <p className="uppercase text-2xl">customer review</p>
          <div className="seperator mx-auto"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            recusandae debitis ipsum corporis? Quo, eligendi.
          </p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          spaceBetween={30}
          // navigation={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {userReviewList.map((item) => (
            <SwiperSlide>
              <div className="review-card bg-primaryColor dark:bg-darkColor p-5 rounded-lg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  esse similique laborum! Ut, placeat dolore?
                </p>
                <div className="flex my-5 gap-4">
                  <div>
                    <img
                      src={`${item.imagePath}`}
                      className="w-12 h-12 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <p className="uppercase">{item.userName}</p>
                    <p>Designer</p>
                  </div>
                  <FaQuoteRight className="text-secondaryColor text-3xl ml-auto"></FaQuoteRight>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
