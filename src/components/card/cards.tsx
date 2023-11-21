import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { handleImageLoaded } from "../../pages/landing-page/landing-page.helpers";

type CardProps = {
  fetchedPhotos: {
    alt_description: string;
    user: { name: string; location: string };
    urls: { regular: string };
  };
  isLoading?: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cards: React.FC<CardProps> = (props): JSX.Element => {
  const { fetchedPhotos, isLoading, setIsLoading } = props;
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <>
      <div
        className={
          isLoading
            ? "rounded-[10px] cursor-pointer bg-[#f5f5f5] h-[400px]"
            : "hidden"
        }
      >
        <div className="absolute bottom-7 left-7">
          <Skeleton width={150} />
          <Skeleton width={80} />
        </div>
      </div>
      <div className={isLoading ? "hidden" : ""}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-[10px] overflow-hidden cursor-pointer"
        >
          <div className="bg-gradient-to-t from-neutral-900 via-neutral-500 to-neutral-500 ">
            <div className="absolute bottom-5 left-4">
              <p className="text-white font-sfProDisplayRegular text-2xl leading-normal">
                {fetchedPhotos?.user?.name.length <= 28
                  ? fetchedPhotos?.user?.name
                  : `${fetchedPhotos?.user?.name.slice(0, 28)}...`}
              </p>

              <p className="text-white font-sfProDisplayRegular text-base">
                {fetchedPhotos?.user?.location?.length <= 28
                  ? fetchedPhotos?.user?.location
                  : `${fetchedPhotos?.user?.location?.slice(0, 28)}...`}
              </p>
            </div>
            <img
              src={fetchedPhotos?.urls?.regular}
              className="mix-blend-overlay w-full h-full"
              alt={fetchedPhotos?.alt_description}
              title={fetchedPhotos?.alt_description}
              onLoad={() =>
                handleImageLoaded(
                  fetchedPhotos,
                  loadedImages,
                  setLoadedImages,
                  setIsLoading,
                )
              }
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
