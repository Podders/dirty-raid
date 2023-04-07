import { combineReducers } from 'redux';
import AppReducer from "./app/AppReducer";
import SessionReducer from "./session/SessionReducer";
import StreamReducer from "./streams/StreamReducer";
import UserReducer from "./users/UserReducer";

// noinspection JSUnusedGlobalSymbols
const reducers = combineReducers({
    app: AppReducer,
    session: SessionReducer,
    streams: StreamReducer,
    users: UserReducer
});

export default reducers;