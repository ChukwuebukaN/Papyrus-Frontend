import React, { useEffect, useState } from "react";
import { StaggeredGrid, StaggeredGridItem } from "react-staggered-grid";
import { AnimatePresence } from "framer-motion";
import Inputs from "../../components/inputs/inputs";
import { useWindowResize } from "../../utils/useWindowResize";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import Cards from "../../components/card/cards";
import { searchPhotos } from "./landing-page.helpers";
import Modals from "../../components/modals/modals";

function LandingPage() {
  const { width } = useWindowResize();
  const [searchTerm, setSearchTerm] = useState("");
  const [photoDetails, setphotoDetails] = useState(undefined);
  const [photos, setPhotos] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingFor, setIsSearchingFor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    const getData = async () => {
      await searchPhotos("African", setPhotos, setIsSearchingFor);
    };
    getData();
    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Displays Desktop */
  const desktop = () => {
    return (
      <div className="">
        <div className="absolute w-full ">
          {isSearching ? (
            <div className="mt-[120px] mb-[90px] flex items-center justify-right px-[10%]">
              <p className="text-6xl text-papyrus-blue tracking-wide font-sfProDisplayMedium">
                {isSearchingFor ? "Searching for" : "Search Results for"}{" "}
                <span className="text-papyrus-gray">“{searchTerm}”</span>
              </p>
            </div>
          ) : (
            <div className="mt-[120px] mb-[90px] flex items-center justify-center">
              <Inputs
                label="Search"
                placeholder="Search for photo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={
                  <div className="flex items-center">
                    <SearchIcon className="w-[30px] ml-[25px] absolute" />
                  </div>
                }
                styling="w-[80%] h-[80px] bg-white rounded-[10px] pl-[85px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearchTerm(searchTerm);
                    setIsSearching(true);
                    setIsSearchingFor(true);
                    setIsLoading(true);
                    searchPhotos(searchTerm, setPhotos, setIsSearchingFor);
                  }
                }}
              />
            </div>
          )}

          <div className=" px-[18%] mb-20">
            <StaggeredGrid
              horizontalGap={35}
              verticalGap={30}
              columns={3}
              useElementWidth={true}
            >
              {photos?.results
                ?.slice(0, 8)
                .map((fetchedPhotos: any, index: number) => {
                  return (
                    <div
                      key={fetchedPhotos.id}
                      onClick={() => {
                        setphotoDetails(fetchedPhotos);
                        setIsOpen(!isOpen);
                      }}
                    >
                      <StaggeredGridItem
                        index={index}
                        style={{ transition: "left 0.3s ease,top 0.3s ease" }}
                      >
                        <Cards
                          fetchedPhotos={fetchedPhotos}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                        />
                      </StaggeredGridItem>
                    </div>
                  );
                })}
            </StaggeredGrid>
          </div>
        </div>

        <div className="absolute z-10 overscroll-contain">
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {isOpen && (
              <Modals setIsOpen={setIsOpen} fetchedPhotosProps={photoDetails} />
            )}
          </AnimatePresence>
        </div>

        <div className="h-[350px] bg-[#dde2ea] top-0 -z-10" />
      </div>
    );
  };

  /** Displays Mobile */
  const mobile = () => {
    return (
      <div>
        <div className="absolute w-full ">
          {isSearching ? (
            <div className="mt-[120px] mb-[90px] flex items-center justify-right px-[10%]">
              <p className="text-6xl text-papyrus-blue tracking-wide font-sfProDisplayMedium">
                {isSearchingFor ? "Searching for" : "Search Results for"}{" "}
                <span className="text-papyrus-gray">“{searchTerm}”</span>
              </p>
            </div>
          ) : (
            <div className="mt-[120px] mb-[90px] flex items-center justify-center">
              <Inputs
                label="Search"
                placeholder="Search for photo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={
                  <div className="flex items-center">
                    <SearchIcon className="w-[30px] ml-[25px] absolute" />
                  </div>
                }
                styling="w-[80%] h-[80px] bg-white rounded-[10px] pl-[85px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearchTerm(searchTerm);
                    setIsSearching(true);
                    setIsSearchingFor(true);
                    setIsLoading(true);
                    searchPhotos(searchTerm, setPhotos, setIsSearchingFor);
                  }
                }}
              />
            </div>
          )}

          <div
            className={
              width > 660 ? "px-[18%] mb-20 " : "px-[10%] mb-20 -mt-[2%]"
            }
          >
            <StaggeredGrid
              horizontalGap={width > 660 ? 35 : 25}
              verticalGap={width > 660 ? 30 : 20}
              columns={width > 660 ? 2 : 1}
              useElementWidth={true}
            >
              {photos?.results
                ?.slice(0, 8)
                .map((fetchedPhotos: any, index: number) => {
                  return (
                    <div
                      key={fetchedPhotos.id}
                      onClick={() => {
                        setphotoDetails(fetchedPhotos);
                        setIsOpen(!isOpen);
                      }}
                    >
                      <StaggeredGridItem
                        index={index}
                        style={{ transition: "left 0.3s ease,top 0.3s ease" }}
                      >
                        <Cards
                          fetchedPhotos={fetchedPhotos}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                        />
                      </StaggeredGridItem>
                    </div>
                  );
                })}
            </StaggeredGrid>
          </div>
        </div>
        <div className="absolute z-10 overscroll-contain">
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {isOpen && (
              <Modals setIsOpen={setIsOpen} fetchedPhotosProps={photoDetails} />
            )}
          </AnimatePresence>
        </div>
        <div className="h-[350px] bg-[#dde2ea] top-0 -z-10" />
      </div>
    );
  };

  return <div>{width > 1060 ? <>{desktop()}</> : <>{mobile()}</>}</div>;
}

export default LandingPage;
