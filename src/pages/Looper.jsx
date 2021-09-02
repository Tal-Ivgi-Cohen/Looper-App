import React, { useState, useEffect } from 'react'
import Music1Url from '../assets/sound/Bass-Warwick-heavy.mp3'
import Music2Url from '../assets/sound/Stompy-Slosh.mp3'
import Music3Url from '../assets/sound/Groove-Tanggu.mp3'
import Music4Url from '../assets/sound/Maze-Politics.mp3'
import Music5Url from '../assets/sound/PAS-GROOVE.mp3'
import Music6Url from '../assets/sound/Silent-Star.mp3'
import Music7Url from '../assets/sound/electric-guitar.mp3'
import Music8Url from '../assets/sound/future-funk.mp3'
import Music9Url from '../assets/sound/stutter-breakbeats.mp3'
import Play from '../assets/image/play.png'
import Stop from '../assets/image/stop.png'

var interval = null

export const Looper = () => {
    const Music1 = { "src": new Audio(Music1Url), "name": "Bass - Heavy" }
    const Music2 = { "src": new Audio(Music2Url), "name": "Stompy Slosh" }
    const Music3 = { "src": new Audio(Music3Url), "name": "Groove Tangu" }
    const Music4 = { "src": new Audio(Music4Url), "name": "Maze Politics" }
    const Music5 = { "src": new Audio(Music5Url), "name": "PAS GROOVE" }
    const Music6 = { "src": new Audio(Music6Url), "name": "Silent Star Fu" }
    const Music7 = { "src": new Audio(Music7Url), "name": "Electric Guita" }
    const Music8 = { "src": new Audio(Music8Url), "name": "Future -  Funk " }
    const Music9 = { "src": new Audio(Music9Url), "name": "Stutter Break" }
    const sounds = [Music1.src, Music2.src, Music3.src, Music4.src, Music5.src, Music6.src, Music7.src, Music8.src, Music9.src];
    const names = [Music1.name, Music2.name, Music3.name, Music4.name, Music5.name, Music6.name, Music7.name, Music8.name, Music9.name]
    const [bpm, setBpm] = useState(0);

    const [state, setState] = useState([[{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }],
    [{ isOn: false }, { isOn: false }]])

    const setBoxOn = (i, j) => {
        setState((prevState) => {
            return prevState.map((instrument, idx) => {
                if (idx === i) return instrument.map((beat, idx) => {
                    if (idx === j) return { isOn: !beat.isOn }
                    return beat
                })
                return instrument
            })
        })
    }

    const [index, setIndex] = useState(1)

    //clear Interval for stopping the music
    const stop = () => {
        clearInterval(interval)
        interval = null
        setIndex(1)
    }

    //Set Interval for start playing the loop
    const play = () => {
        if (interval) return
        interval = setInterval(() => {
            setIndex((prevIndex) => {
                return prevIndex > 1 ? 1 : prevIndex + 1
            })
        }, bpm);
    }

    //if the squer is on its start to play the sound
    useEffect(() => {
        state.forEach((loop, idx) => {
            if (loop[index - 1].isOn) sounds[idx].play()
        });
        // eslint-disable-next-line
    }, [index])

    //calculation of the BPM
    useEffect(() => {
        setBpm((60 * 1000) / 120);
        // eslint-disable-next-line
    }, [])

    
    useEffect(() => {
        if (!interval) return
        clearInterval(interval)
        interval = null
        play()
        // eslint-disable-next-line
    }, [bpm])

    return (
        <div className="looper-container">
            <div className="actions">
                <button onClick={play}>
                    <img className="play-btn" src={Play} alt="play Music" />
                </button>
                <button onClick={stop} >
                    <img className="stop-btn" src={Stop} alt="stop Music" />
                </button>
            </div>
            {state.map((loop, i) => {
                return <div className="drum-section flex">
                    <div className="title">
                        <p>{names[i]}</p>
                    </div>
                    <div className="boxes flex">
                    {loop.map((bar, j) => {
                        return <div onClick={() => setBoxOn(i, j)}
                            className={`box ${index === j + 1 ? 'fill' : ''} ${bar.isOn && 'on'}`}
                            key={j}></div>
                    })}
                    </div>
                </div>
            })}

        </div>
    )
}