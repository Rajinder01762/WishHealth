import React, { useState, useEffect } from "react";
import { Button, FormGroup, Input } from "reactstrap";

import Geolocation from "../../../assets/images/autoDetectLocation.png";
import { ClickAwayListener } from "../../../util";
import Loader from "../../../loader/index";
import { withRouter } from "react-router-dom";
import { doctorLocation } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
const searchData = [
  // { id: 1, name: "Mohit" },
  // { id: 2, name: "Baljeet" },
  // { id: 3, name: "Mohan" },
  // { id: 4, name: "Raman" },
  // { id: 5, name: "Gamini" },
  // { id: 6, name: "Isha" },
  // { id: 7, name: "Kapil" },
  // { id: 8, name: "Chaavi" },
];
const SearchDoctorForm = (props) => {
  const [cities, setCities] = useState([]);
  const [isLocationDropDown, setIsLocationDropDown] = useState(false);
  const [updatedData, setUpdatedData] = useState(searchData);
  const [updatedDataLocation, setUpdatedDataLocation] = useState([]);
  const [isSearchDropDown, setIsSearchDropDown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedSearch, setSelectedSearch] = useState(0);
  const [location, setLocation] = useState(
    props.location && props.location.state && props.location.state.location
      ? props.location.state.location
      : ""
  );
  const [search, setSearch] = useState(props.search ? props.search : "");
  // const [searchLocation, setSearchLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latLong, setLatLong] = useState({ latitude: 0, longitude: 0 });

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(
      doctorLocation("cities", (value) => {
        setCities(value);
      })
    );
  }, []);
  const locationClickAway = () => {
    if (isLocationDropDown) {
      setIsLocationDropDown(false);
    }
  };
  const searchClickAway = () => {
    if (isSearchDropDown) {
      setIsSearchDropDown(false);
    }
  };
  const handleCurrentLocation = () => {
    setIsLoading(true);

    if (navigator.geolocation) {
      setIsLoading(false);
      setIsLocationDropDown(false);
      setLocation("Near Me");
      navigator.geolocation.watchPosition(function (position) {
        setIsLoading(false);
        setLatLong({
          latitude: position && position.coords && position.coords.latitude,
          longitude: position && position.coords && position.coords.longitude,
        });
        setLocation("Near Me");
        setIsLocationDropDown(false);
        setIsLoading(false);
      });
    }
  };
  const handleLocationInput = (e) => {
    setLocation(e.target.value);
    const cityArray = cities.filter((data) => {
      return data.name.toLowerCase().startsWith(e.target.value);
    });

    setUpdatedDataLocation(cityArray);
  };

  const getCitiesNames = () => {
    if (location === "") {
      if (cities && cities.length) {
        let arr = [],
          sorted_cities = [];
        for (let i = 0; i < cities.length && i < 5; i++) {
          arr.push(cities[i]);

          sorted_cities = [
            ...arr.sort(function (a, b) {
              if (a.name < b.name) return -1;
              else if (a.name > b.name) return 1;
              return 0;
            }),
          ];
        }

        return sorted_cities.map((city, index) => {
          return (
            <li key={index}>
              <button onClick={() => handleDropDownList(city.id)}>
                {city.name || ""}
              </button>
            </li>
          );
        });
      } else {
        return null;
      }
    } else {
      if (updatedDataLocation && updatedDataLocation.length) {
        return updatedDataLocation.map((data, index) => {
          return (
            <li key={index}>
              <button onClick={() => handleDropDownList(data.id)}>
                {data.name || ""}
              </button>
            </li>
          );
        });
      } else {
        return null;
        // return (
        //   <li>
        //     <p className="text-center py-2 mb-0">No Matches Found!</p>
        //   </li>
        // );
      }
    }
    return null;
  };

  // React.useEffect(() => {
  //   // const searchTerm = location.trim().replace(/ +/g, " ");
  //   // const results = locationData.filter((item) =>
  //   //   item.name.toLowerCase().includes(searchTerm)
  //   // );
  //   // setUpdatedDataLocation(results);
  // }, [location]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    const searchTerm = search.trim().replace(/ +/g, " ");
    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setUpdatedData(results);
  }, [search]);

  const handleDropDownList = (id) => {
    setIsLocationDropDown(false);
    setSelectedLocation(id);
    const value = cities.filter((data) => data.id === id);
    setLocation(value[0].name);
  };
  const handleSearchList = (id) => {
    setIsSearchDropDown(false);
    setSelectedSearch(id);
    const value = searchData.filter((data) => data.id === id);
    setSearch(value[0].name);
  };
  const handleSearch = (aa) => {
    console.log("kdfjgjdkgjkdjgkdfjg", aa);
    setIsLoading(true);

    // window.location.href = `${oldWebsiteUrl}index.php/patient/searchDoctorsMain/${search}/${location}`;

    props.history.push({
      pathname: "/search",
      state: { location, search },
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="search-wrapper">
      <FormGroup className="location">
        <div className="search-wrap">
          <ClickAwayListener onClickAway={locationClickAway}>
            <Input
              type="search"
              onChange={handleLocationInput}
              onClick={() => setIsLocationDropDown(true)}
              value={location}
              placeholder="Location"
            />
            <button
              color="primary"
              onClick={handleCurrentLocation}
              className="gps-input-btn"
            >
              <img src={Geolocation} alt="" />
            </button>

            {isLocationDropDown && (
              <div className="search-list">
                {isLoading && (
                  <div className="location-loader">
                    <Loader />
                  </div>
                )}
                <button
                  color="primary"
                  onClick={handleCurrentLocation}
                  className="gps-btn"
                >
                  <img src={Geolocation} alt="" />{" "}
                  <span className="pl-3">Use my location</span>
                </button>
                <ul>{getCitiesNames()}</ul>
              </div>
            )}
          </ClickAwayListener>
        </div>
      </FormGroup>

      <FormGroup className="search">
        <div className="search-wrap">
          <ClickAwayListener onClickAway={searchClickAway}>
            <Input
              onClick={() => setIsSearchDropDown(true)}
              type="search"
              placeholder="Enter name or speciality e.g. dentist"
              value={search}
              onChange={handleSearchInput}
            />

            {isSearchDropDown && updatedData.length > 0 && (
              <div className="search-list">
                <ul>
                  {updatedData.map(({ id, name }, index) => (
                    <li key={index}>
                      <button onClick={() => handleSearchList(id)}>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ClickAwayListener>
        </div>
      </FormGroup>
      <div className="position-relative">
        {isLoading && <Loader />}
        <Button
          color="primary"
          className="text-uppercase search-btn"
          onClick={() =>
            handleSearch(props.SearchDoctors ? props.SearchDoctors : null)
          }
        >
          <span style={isLoading ? { opacity: 0 } : {}}>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(SearchDoctorForm);
