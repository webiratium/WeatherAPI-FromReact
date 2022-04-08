
import React from "react";

const api = {
  key: "f13ad93756fbadc14a5a500b211a8fef",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {
    let months = [
      "Yanvar", "Fevral", "Mart", "April", "May", "Iyun", "Iyul", "Avgust", "Sentabr","Oktabr","Noyabr","Dekabr"
    ];
    let days = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",

    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}  ${date} ${month} ${year}`
  }
  // console.log(dateBuilder(new Date()));

  return (
    <div className="app ">
      <main>
        <div className="Search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search....."
          />
        </div>
        <div className="location-box">
          <div className="location">Tashkent , Uzbekistan</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
       <div className="weather-box">
         <div className="temp"> 15 <sup>'</sup> </div>
        <div className="weather"> Quyoshli </div>
       </div>
      </main>
    </div>
  );
}

export default App;
