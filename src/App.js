import { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Cars, Search, Loading } from "./components";

const url = "https://myfakeapi.com/api/cars";

function App() {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  //   getCars
  const getCars = async () => {
    const response = await fetch(url);
    const allCars = await response.json();
    setCars(allCars.cars);
    setLoading(false);
  };

  useEffect(() => {
    getCars();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // filter cars,color and year

  const search = (data) => {
    return data.filter(
      (item) =>
        item.car.toLowerCase().includes(query) ||
        item.car_model_year.toString().toLowerCase().includes(query) ||
        item.car_color.toLowerCase().includes(query)
    );
  };

  console.log(cars);

  return (
    <div className="App">
      <Navbar />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Search query={query} setQuery={setQuery} />
          <Cars data={search(cars)} />
        </>
      )}
    </div>
  );
}

export default App;
