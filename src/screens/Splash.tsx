import { AVPlaybackStatus,ResizeMode,Video } from "expo-av"
import { hideAsync } from "expo-splash-screen"
import { useState, useEffect } from "react"
import {StyleSheet} from "react-native"

type Props = {
    onComplete : (status: boolean) => void;
}


export default function Splash({onComplete}: Props){
        const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus)
    function onPlaybackStatusUpdate(status: AVPlaybackStatus){
        if(status.isLoaded){
            if(lastStatus.isLoaded !== status.isLoaded ){
                hideAsync();
            }
            if(status.didJustFinish){
                onComplete(false)
            }
        }
    }

    return(
        <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../../assets/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
        />
    )
}