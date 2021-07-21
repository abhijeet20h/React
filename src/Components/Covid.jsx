import React, { useEffect, useState } from "react";

function Covid() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
  <h1 > <marquee>  🛑Live</marquee> </h1>
      <h2 className="heading-style "> COVID - 19 CORONA VIRUS TRACKER</h2>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">Our</span> COUNTRY
                </p>

                <h3 className="card_title m-4">INDIA</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">TOTAL</span> RECOVERED
                </p>

                <h3 className="card_title m-4">{data.recovered}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">TOTAL</span> CONFIRMED
                </p>

                <h3 className="card_title m-4">{data.confirmed}</h3>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">TOTAL</span> DEATH
                </p>

                <h3 className="card_title m-4">{data.deaths}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">TOTAL</span> ACTIVE
                </p>

                <h3 className="card_title m-4">{data.active}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card">
              <div className="card_info">
                <p className="card_title">
                  <span className="card_category">Our</span> UPDATED
                </p>

                <h3 className="card_title m-4">{data.lastupdatedtime}</h3>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Covid;
