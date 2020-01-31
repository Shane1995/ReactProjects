import {combineReducers} from 'redux'; 

//Static list of songs 
const songsReducer = () => {
    return [ 
        {title: 'No Scrubs', duration : '4:05'},
        {title: 'Macarena', duration : '2:40'},
        {title: 'All Star', duration : '3:15'},
        {title: 'I want it that way', duration : '1:45'}
    ]; 
};

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload; 
    }
    return selectedSong; 
};

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectSongReducer
});