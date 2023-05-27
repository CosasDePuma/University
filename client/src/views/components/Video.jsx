import React, { Component }                 from 'react';
import ReactPlayer                          from 'react-player';
import { FaHeart, FaComment, FaShareAlt }   from 'react-icons/fa'

import '../../styles/Video.css';
class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            setIsPlaying: (val) => this.state.isPlaying = val
        };
    }

    render() {
        let icons = null;
        if(!this.props.viewonly) {
            icons = <div className="icons">
                        <FaHeart />
                        <FaComment />
                        <FaShareAlt />
                    </div>;
        }

        return (
            <div className="player">
                <ReactPlayer
                    url={this.props.src}
                    width="300px" height="530px"
                    volume={0} muted={true}
                    loop={true} playing={true}
                    />

                {icons}
                
                <span className="user">{this.props.user}</span>
                <span className="desc">{this.props.desc}</span>
            </div>
        );
    }
}

export default Video;