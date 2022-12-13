import React, { memo, useState } from "react";
import Layout from "./layout";
import ExampleComponent from "./ShowExample";

const HomePage = () => {
    const [numberCount, setNumberCount] = useState(0);
    const [fakeCount, setFakeCount] = useState(10)
    const handdleCount = () => {
        setNumberCount(numberCount + 1);
    }

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar((preValue) => {
            return { ...preValue, color: 'blue' }
        })
    }

    return (
        <div className="container-content">

            <h1>
                Home Page
            </h1>
            <h1>
                {numberCount}
            </h1>

            <h1>
                {fakeCount}
            </h1>

            <ExampleComponent fakeCount={fakeCount} />

            <button type="submit" onClick={handdleCount} > Click</button>

            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>
        </div>
    )
}

export default memo(HomePage);