import { StatusBar, PermissionsAndroid } from 'react-native';
import {useState, useEffect} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';
import Splash from './src/screens/Splash';
import { SAMLAuthProvider } from 'firebase/auth';
export default function App() {

  const[splashComplete, setSplashComplete] = useState(true)

  useEffect(()=>{
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the number');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
      requestCameraPermission();
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'}></StatusBar>
         {splashComplete ? 
      <Splash onComplete={setSplashComplete}/>
      : <Routes/>}
      </SafeAreaView>
       
    </SafeAreaProvider>
  
  );
}
