/**
 * Remember we make our action creators which will return an action
 */

export const selectSong = (song) => {
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};