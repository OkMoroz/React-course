import React from "react";
// function getWeatherIcon(wmoCode) {
//   const icons = new Map([
//     [[0], "☀️"],
//     [[1], "🌤"],
//     [[2], "⛅️"],
//     [[3], "☁️"],
//     [[45, 48], "🌫"],
//     [[51, 56, 61, 66, 80], "🌦"],
//     [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
//     [[71, 73, 75, 77, 85, 86], "🌨"],
//     [[95], "🌩"],
//     [[96, 99], "⛈"],
//   ]);
//   const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
//   if (!arr) return "NOT FOUND";
//   return icons.get(arr);
// }
class App extends React.Component {
  constructor(props) {
    this.state = { location: "lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    console.log("Loading data...");
    console.log(this);
  }
  render() {
    return (
      <div className="app">
        <h1>Classy weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search fro location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={() => this.fetchWeather()}>Get weather</button>
        {this.state.weather.weathercode && (
          <Weather
            weather={this.setState.weather}
            location={this.setState.displayLocation}
          />
        )}
      </div>
    );
  }
}

export default App;

class Weather extends React.Component {
  render() {
    // console.log(this.props);
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date) => (
            <Day />
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    return <li>Day</li>;
  }
}
