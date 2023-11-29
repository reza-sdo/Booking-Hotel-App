import React from "react";
import useFetch from "../../hooks/useFetch";

function LocationList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels");

  if (isLoading) return <p> loading...</p>;

  
  return (
    <div className="nearbyLocation">
      <h2>Nearby Location</h2>
      <div className="locationList">
        {data.map((i) => {
          return (
            <div key={i.id} className="locationItem">
              <img src={i.picture_url.url} alt={i.name} />
              <div className="locationItemDesc">
                <p className="location">{i.smart_location}</p>
                <p className="name">{i.name}</p>
                <p className="price">
                  € &nbsp; {i.price} &nbsp; <span>night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
