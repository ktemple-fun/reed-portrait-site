import React from "react"
import YouTube from "react-youtube";
import styles from '../styles/Home.module.css'

export default class VideoDisplay
    extends React.Component {
        render() {
          const opts = {
            height: "390",
            width: "640",
            playerVars: {
              autoplay: 1,
            },
          };
        
          return (
            <div className={styles.Video} id="videoCard">
              <h3>SAMPLE VIDEO</h3>
              <div className={styles.videocontainer}>
                <YouTube videoId="sTnm5jvjgjM" 
                    opts={opts} onReady={this._onReady} />
              </div>
            </div>
          );
        }
        
        _onReady(event) {
          event.target.pauseVideo();
        }
  }