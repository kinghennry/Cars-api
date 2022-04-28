import React from "react";

const Cars = ({ data }) => {
  return (
    <section className="cars">
      <div className="container">
        <div className="cars-list">
          {data &&
            data.map((item) => {
              const {
                id,
                car_model,
                car,
                car_color,
                price,
                car_model_year,
                car_vin,
              } = item;
              return (
                <div key={id} className="car">
                  <div className="car-details">
                    <h1 className="car-name">{car}</h1>
                    <h4>
                      Car-Model: <span>{car_model}</span>
                    </h4>
                    <h4>
                      Price: <span>{price}</span>
                    </h4>
                    <h4>
                      Car-Model-Year: <span>{car_model_year}</span>
                    </h4>
                    <h4>
                      Color: <span>{car_color}</span>
                    </h4>
                    <h4>
                      Vin: <span>{car_vin}</span>
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Cars;
