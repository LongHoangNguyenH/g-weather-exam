import { useContext, useState } from "react";

// import weather from '@/assets/weather.jpg';
import search from "@/assets/search.png";
import location from "@/assets/location.png";
import { AppContext } from "@/context/AppContext";
import { format } from "@/utils/formatter";
import Detail from "../detail/Detail";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { changeCityName, currentLocation, changeLocation } =
    useContext(AppContext);

  const handleSearch = () => {
    changeCityName(format(searchValue));
    setSearchValue("");
  };

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((location) => {
          changeLocation(location.city);
          changeCityName(format(location.city));
        });
    });
  };

  return (
    <div className="flex flex-row h-[660px]  relative ">
      <div className="absolute bg-slate-400 p-10 text-black left-0 right-0 h-full flex flex-col justify-between">
        <div className="flex flex-col justify-between items-center w-full mt-[100px]">
          <div className="flex items-center text-center text-[24px] font-[400] drop-shadow-xl bg-black/20 rounded-[14px] py-2 w-[200px]">
            <img src={location} alt="search" className="size-6 mx-4" />
            {currentLocation !== "" ? (
              <div className="flex flex-col justify-center pr-4">
                <span className="text-[12px] text-center">
                  Current location
                </span>
                <span className="text-[18px] font-bold text-center">
                  {currentLocation}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
        <Detail />
        </div>

        <div className="flex flex-col gap-5 items-center min-h-[100%] pb-[100px] mb-[-15px]">
          <div className="w-[150px]  h-2 bg-slate-400 rounded-full">
            <span>Find your Location</span>
          </div>
          <div className="flex  items-center gap-2 mt-5 max-lg:flex-col max-lg:gap-5">
            <input
              type="text"
              className="p-2 rounded-[5px] text-black outline-none border-none w-[250px] backdrop-blur-[2px] bg-white/30 max-lg:p-4"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              className="text-[18px] p-2 rounded-[5px] bg-white/20 max-lg:w-full max-lg:flex max-lg:p-4 "
              onClick={handleSearch}
              disabled={searchValue === ""}
            >
              <img src={search} alt="search" className="size-6 max-lg:m-auto" />
            </button>
          </div>
          <button
            className="p-2 rounded-[5px] text-black outline-none border-none w-[250px] backdrop-blur-[2px] bg-white/30 max-lg:p-4 mr-12"
            onClick={handleGetCurrentLocation}
          >
            Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
