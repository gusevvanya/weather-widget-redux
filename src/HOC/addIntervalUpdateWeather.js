import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchCity } from '../actions'

const weatherIntervalTime = 10 * 60 * 1000;

function addIntervalUpdateWeather(WrappedComponent) {
  class addIntervalUpdateWeatherWrapComponent extends Component {
    
    componentDidMount() {
      this.setWeatherInterval();
    };
    componentWillUnmount() {
      clearInterval(this.updateWeatherTimerId);
    };
    setWeatherInterval = () => {
      this.updateWeatherTimerId = setInterval(() => {
        this.props.fetchCity(this.props.currentCity);
      }, weatherIntervalTime);

    };
    render() {
      return <WrappedComponent {...this.props}/>
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCity: (city) => {
        dispatch(fetchCity(city));
      }
    }
  };

  const mapStateToProps = (state) => {
    return {
      currentCity: state.currentCity,
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(addIntervalUpdateWeatherWrapComponent);
};

export default addIntervalUpdateWeather;
