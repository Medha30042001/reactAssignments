import { useRef, useState } from "react";

let videos = [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/movie.mp4",
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ];

const VideoPlayer = () => {

    const playVideo = useRef(null);

    const playButton = () => playVideo.current.play();
    const pauseButton = () => playVideo.current.pause();
    const fastForward = () => playVideo.current.currentTime += 5;
    const rewindBtn = () => playVideo.current.currentTime -= 5;

    const [index, setIndex] = useState(0);

    const prevVideo = () => {
        //index === 0 ? setIndex(0) : setIndex(prev => prev -1);
        if(index > 0) setIndex(prev => prev -1);
        else alert("No more videos prior");
    }

    const nextVideo = () => {
        //index === videos.length-1? setIndex(videos.length-1) : setIndex(prev => prev + 1);
        if(index < videos.length-1) setIndex(prev => prev + 1);
        else alert("No more videos ahead");
    }

  return (
    <>
    <div className="videoPlay">
        <video src={videos[index]} ref={playVideo}></video>

        <div className="controls">
            <button onClick={playButton}>▶️ Play</button>
            <button onClick={pauseButton}>⏸ Pause</button>
            <button onClick={fastForward}>⏩ Fast Forward</button>
            <button onClick={rewindBtn}>⏪ Rewind</button>
        </div>
        <div className="controls">
            <button onClick={prevVideo}>⏮ Previous</button>
            <button onClick={nextVideo}>⏭ Next</button>
        </div>
    </div>
        
    </>
  )
}

export default VideoPlayer;