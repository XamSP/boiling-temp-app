import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '', 
      scale: 'c'
      };
  }

  getColor = (theCelsius) => {
    let color;
    console.log('here', theCelsius)

    if(theCelsius < 100){
      color = "green";
    } else if(theCelsius >= 100 && theCelsius < 200){
      color = "orange";
    } else if(theCelsius >= 200){
      color = "red";
    } else {
      color = "black";
    }

    return color;
    }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const colorFromMethod = this.getColor(parseFloat(celsius));

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

        <BoilingVerdict celsius={parseFloat(celsius)} color={colorFromMethod} />
      </div>
    );
  }
}

export default Calculator;
