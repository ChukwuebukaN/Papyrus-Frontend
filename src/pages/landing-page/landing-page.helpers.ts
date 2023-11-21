import services from "./services";

/** Handles Search Photos */
export const searchPhotos = async (
  searchTerm: any,
  setPhotos: any,
  setIsSearchingFor: any,
) => {
  try {
    await services.SearchPhotos(searchTerm).then((response) => {
      if (response.status === 200) {
        setPhotos(response.data);
        setIsSearchingFor(false);
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

/** Handles Image Loaded */
export const handleImageLoaded = (
  eachFetchedPhoto: any,
  loadedImages: any,
  setLoadedImages: any,
  setIsLoading: any,
) => {
  const newLoadedImages = {
    ...loadedImages,
    [eachFetchedPhoto]: true,
  };
  // Check if all images are loaded?
  const newLoadedImagesArr = Object.keys(newLoadedImages);
  if (newLoadedImagesArr.length === 1) {
    setIsLoading(false);
  }
  setLoadedImages(newLoadedImages);
};
