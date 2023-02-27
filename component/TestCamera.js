import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const TestCamera =()=> {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  // This function is triggered when the "Select an image" button pressed
 

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    // Explore the result
    // console.log("1====>",result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // console.log("2====>",result.uri);
    }
  }
  
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestMicrophonePermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus === 'granted');

      if (locationStatus === 'granted') {
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      }
    })();
  }, []);









  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        {/* <Button onPress={showImagePicker} title="Select an image from gellery">
        </Button> */}
        <Button onPress={openCamera} title="Take Photo" />
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Text>Image Path: {pickedImagePath}</Text>
        }
      </View>
    </View>
  );
}


// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 350,
    height:90,
    // flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});

export default TestCamera;
