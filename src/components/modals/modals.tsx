import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Backdrop from "./backdrop";
import { useWindowResize } from "../../utils/useWindowResize";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchedPhotosProps: any;
};

const Modals: React.FC<ModalProps> = (props): JSX.Element => {
  const { width } = useWindowResize();
  const { setIsOpen, fetchedPhotosProps } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: "0.1",
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  // Check if image has loaded completely
  const onLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  /** Displays Desktop */
  const desktop = () => {
    return (
      <Backdrop onClick={() => setIsOpen(false)}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[75%] h-[85%] rounded-[10px] bg-white overflow-auto outline-none focus:outline-none"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>
            <div className="max-h-[540px] overflow-hidden bg-cover z-0">
              <img
                onLoad={onLoad}
                src={fetchedPhotosProps.urls.regular}
                alt={fetchedPhotosProps?.user.name}
                className="w-full"
              />
              {imageLoaded ? (
                <span />
              ) : (
                <div className="w-full max-h-[540px] bg-[#f5f5f5]">
                  <div className="absolute bottom-[40%] left-[7%] ">
                    <Skeleton circle height={250} width={250} />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute h-[15%] w-full z-10 bg-white flex items-center justify-start pl-[7%] pt-[2.5%]">
              <div>
                <p className="text-papyrus-blue font-sfProDisplayBold text-2xl leading-[40px]">
                  {fetchedPhotosProps?.user.name.length <= 28
                    ? fetchedPhotosProps?.user.name
                    : `${fetchedPhotosProps?.user.name.slice(0, 28)}...`}
                </p>
                <p className="text-papyrus-gray font-sfProDisplayBold text-base">
                  {fetchedPhotosProps?.user.location?.length <= 28
                    ? fetchedPhotosProps?.user.location
                    : `${fetchedPhotosProps?.user.location?.slice(0, 28)}...`}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Backdrop>
    );
  };

  /** Displays Mobile */
  const mobile = () => {
    return (
      <Backdrop onClick={() => setIsOpen(false)}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={`relative rounded-[10px]  overflow-auto outline-none focus:outline-none ${
            width > 660 ? "w-[75%] h-[65%]" : "w-[90%] h-[55%]"
          }`}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>
            <div className="overflow-hidden  z-0">
              <img
                onLoad={onLoad}
                src={fetchedPhotosProps.urls.regular}
                alt={fetchedPhotosProps?.user.name}
                className={`w-full sm:  ${width > 660 ? "" : "h-[440px]"}`}
              />
              {imageLoaded ? (
                <span />
              ) : (
                <div className="w-full max-h-[240px] bg-[#f5f5f5]">
                  <div className="absolute bottom-[40%] left-[7%] ">
                    <Skeleton circle height={250} width={250} />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute h-[25%] bottom-0 w-full z-10 bg-white flex items-center justify-start pl-[7%]">
              <div>
                <p className="text-papyrus-blue font-sfProDisplayBold text-2xl leading-[40px]">
                  {fetchedPhotosProps?.user.name.length <= 28
                    ? fetchedPhotosProps?.user.name
                    : `${fetchedPhotosProps?.user.name.slice(0, 28)}...`}
                </p>
                <p className="text-papyrus-gray font-sfProDisplayBold text-base">
                  {fetchedPhotosProps?.user.location?.length <= 28
                    ? fetchedPhotosProps?.user.location
                    : `${fetchedPhotosProps?.user.location?.slice(0, 28)}...`}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Backdrop>
    );
  };

  return <div>{width > 1060 ? <>{desktop()}</> : <>{mobile()}</>}</div>;
};

export default Modals;
