import React from 'react';
import './Track.css';

class Track extends React.Component {
  
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
}

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track) 
  }

  renderAction() {
    if (this.props.isRemoval === true) {
      return <button className="Track-action"onClick={this.removeTrack}>-</button>
    } else {
      return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }

  render() {
    return (
        <div className="Track">
          <img alt="album art" src={this.props.track.image.url}></img>
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album} </p>
            </div>
            {this.renderAction()}
            <audio className="player" src={this.props.track.preview} />
        </div>
    );
  }
}


export default Track;