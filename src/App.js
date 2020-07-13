import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import logo from "./images/logo.png"

class App extends React.Component {
    state = {
        data: {},
        country:"",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <a href="https://github.com/papalino456" title="https://github.com/papalino456"> <img className={styles.image} src={logo}/> </a>
                </div>
                <h1 className={styles.head}>Covid Tracker</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;