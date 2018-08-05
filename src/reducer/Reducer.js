const initialState = []

const Reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case 'GET_WEATHER': {
        
        state.temperature =Number((action.data.main.temp - 273.15).toFixed(1))
        state.humidity =action.data.main.humidity
        state.country =action.data.sys.country
        state.city =action.data.name
        state.icon =action.data.weather[0].icon
      return {
        ...state,
        loading: false
      };
    } 
    default:
      return state;
  }
}
  export default Reducer;