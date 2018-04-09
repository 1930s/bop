import MediaPlayer from './media_player';
import { connect } from 'react-redux';

import { play, pause } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        playing: state.ui.playbar.playing,
        currentSong: state.ui.playbar.currentSong
    });
};

const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);
