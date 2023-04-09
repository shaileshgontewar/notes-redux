import { createStore } from "redux";
import Reducer from "./features/Reducer";

const store = createStore(Reducer);
export default store;
