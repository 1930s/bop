import merge from 'lodash/merge';

import { RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST,
    RECEIVE_CREATED_PLAYLIST
} from '../actions/playlist_actions';

import { 
    RECEIVE_PLAYLIST_SONG_SAVE,
    // REMOVE_PLAYLIST_SONG_SAVE
 } from '../actions/song_actions';

const playlistsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            return ({}, oldState, {[action.playlist.id]: action.playlist} );
        case REMOVE_PLAYLIST:
            const newState = merge({}, oldState);
            delete newState[action.playlistId];
            return newState;
        case RECEIVE_CREATED_PLAYLIST:
            let newPlaylist = { [action.playlist.id]: action.playlist };
            let newId = { 'newId': [action.playlist.id] };
            return merge({}, oldState, newPlaylist, newId);
        case RECEIVE_PLAYLIST_SONG_SAVE:
            // debugger;
        // case REMOVE_PLAYLIST_SONG_SAVE:
        //     debugger;
        default:
            return oldState;
    }
};

export default playlistsReducer;