import { connect } from 'react-redux';
import { deleteCity, fetchCity } from '../../actions/cities';
import { deleteMessages } from '../../actions/ui/messages';

const mapStateToProps = state => ({
  cities: state.cities,
  currentWeather: state.currentWeather,
  messages: state.ui.messages,
  currentCity1: state.ui.currentCity,
});

const mapDispatchToProps = dispatch => ({
  onDeleteCityClick: (city) => {
    dispatch(deleteCity(city));
  },
  onCityClick: (city) => {
    dispatch(fetchCity(city));
  },
  onSearchSubmit: (city) => {
    dispatch(fetchCity(city));
  },
  onClearMessageClick: () => {
    dispatch(deleteMessages());
  },
});

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
