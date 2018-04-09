import React from 'react';
import { closePlaylistForm } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { createPlaylist, fetchPlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';

class NewPlaylistModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleInput(e) {
      this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
      e.preventDefault(); 
      this.props.createPlaylist(this.state).then(playlist => this.redirect());
  }

  redirect() {
    this.props.closePlaylistForm();
    this.props.history.push(`/collection/playlists/${this.props.playlistId}`);
  }

  handleCancel() {
    this.setState({ playlistName: '' });
    this.props.closePlaylistForm();
  }


  render() {
    if (!this.props.isModalOpen) {
      return null;
    }

    return (
      <div className="new-playlist-page">
        <div className="new-playlist-wrapper">
            <button className="close-modal-button" onClick={this.props.closePlaylistForm}>
                <i className="fa fa-times"></i>
            </button>
            <h1 className="create-new-playlist-h1">Create new playlist</h1>
            <form className="new-playlist-form" onSubmit={this.handleSubmit}>
                <section className="new-playlist-form-input">
                    <label className="new-playlist-label" htmlFor="playlist-name">Playlist Name</label>
                    <input
                    id="playlist-name" 
                    className="new-playlist-input"
                    value={this.state.playlistName}
                    onChange={this.handleInput}
                    placeholder="Start typing..."
                    autoComplete="off"
                    />
                </section>
                <section className="new-playlist-form-buttons">
                    <button onClick={this.handleCancel} className="new-playlist-cancel playlist-modal-button new-playlist-button">Cancel</button>
                    <input className="playlist-modal-button new-playlist-button" type="submit" value="Submit"/>
                </section>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlistId;
  if (state.entities.playlists.newId) {
    playlistId = state.entities.playlists.newId;
  } else {
    playlistId = null;
  }
  return {
    isModalOpen: state.ui.modals.newPlaylistModal.isOpen,
    currentUser: state.session.currentUser,
    playlistId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePlaylistForm: () => dispatch(closePlaylistForm()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPlaylistModal));
