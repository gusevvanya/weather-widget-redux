import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/cities';

const weatherIntervalTime = 10 * 60 * 1000;

function addIntervalUpdateWeather(WrappedComponent) {
  class addIntervalUpdateWeatherWrapComponent extends Component {
    componentDidMount() {
      this.setWeatherInterval();
    }
    componentWillUnmount() {
      clearInterval(this.updateWeatherTimerId);
    }
    setWeatherInterval() {
      this.updateWeatherTimerId = setInterval(() => {
        this.props.fetchCity(this.props.currentCity);
      }, weatherIntervalTime);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    fetchCity: (city) => {
      dispatch(fetchCity(city));
    },
  });

  const mapStateToProps = state => ({
    currentCity: state.ui.currentCity,
  });

  addIntervalUpdateWeatherWrapComponent.propTypes = {
    fetchCity: PropTypes.func.isRequired,
    currentCity: PropTypes.string.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(addIntervalUpdateWeatherWrapComponent);
}

export default addIntervalUpdateWeather;
