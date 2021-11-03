import { combineReducers } from "redux";

const songReducer = () => {
    return[
        { title:'Song1', duration: '4:05'},
        { title: 'Song2', duration: '2:30'},
    ]
};

const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED' ){
        return action.payload;
    }
        return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
})