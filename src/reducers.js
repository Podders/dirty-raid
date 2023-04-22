import { combineReducers } from 'redux';
import AppReducer from "./app/AppReducer";
import SessionReducer from "./session/SessionReducer";
import StreamReducer from "./streams/StreamReducer";
import UserReducer from "./users/UserReducer";
import RaidPalReducer from "./raidpal/RaidPalReducer";
import FollowerReducer from "./followers/FollowerReducer";
import TeamsReducer from "./teams/TeamsReducer";

// noinspection JSUnusedGlobalSymbols
const reducers = combineReducers({
    app: AppReducer,
    session: SessionReducer,
    streams: StreamReducer,
    users: UserReducer,
    raidpal: RaidPalReducer,
    followers: FollowerReducer,
    teams: TeamsReducer
});

export default reducers;