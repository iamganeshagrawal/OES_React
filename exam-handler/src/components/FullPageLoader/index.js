import FullPageLoader from './FullPageLoader.js'
import './fullPageLoader.css'
import reducer from './loaderReducer'

export const showLoader = () => ({
      type: "SHOW_LOADER"
});

export const hideLoader = () => ({
      type: "HIDE_LOADER"
});

export const loaderReducer = reducer

export default FullPageLoader