import * as APIUtil from '../util/playlist_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

export const receiveAlbum = (payload) => ({
    type: RECEIVE_ALBUM,
    payload
});


export const fetchAlbums = (shouldFetchAll) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchAlbums(shouldFetchAll).then(albums => {
        return dispatch(receiveAlbums(albums));});
    };
    
export const fetchAlbum = (albumId) => (dispatch) => {
    dispatch(startLoading());
    return APIUtil.fetchAlbum(albumId).then(playlist => {
        return dispatch(receiveAlbum(playlist));
    });
};