import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {Images} from '../../constants/images';
import {setProfileImage} from '../../redux/actions/profileActions';

const ProfileImageScreen = () => {
  const navigation = useNavigation();
  const imageUri = useSelector(state => state.profileData.profileImage);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setSelectedImage(imageUri);
  }, [imageUri]);

  const handleGallery = response => {
    console.log('Open Gallery...');
    if (response.didCancel) {
      console.log('User canceled image library');
    } else if (response.error) {
      console.log('ImagePicker Error (Library): ', response.error);
    } else {
      dispatch(setProfileImage(response.assets[0]?.uri || response.uri));
      setSelectedImage(response.assets[0]?.uri || response.uri);
      console.log('Gallery Image...', response);
    }
  };

  const handleCamera = response => {
    console.log('Open Camera...');
    if (response.didCancel) {
      console.log('User canceled taking a photo');
    } else if (response.error) {
      console.log('Camera Error: ', response.error);
    } else {
      dispatch(setProfileImage(response.assets[0]?.uri || response.uri));
      setSelectedImage(response.assets[0]?.uri || response.assets?.uri);
      console.log('Camera Image...', response);
    }
  };

  const handleChangeImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    Alert.alert(
      'Change Image',
      'Select an image source:',
      [
        {
          text: 'Gallery',
          onPress: () => {
            launchImageLibrary(options, handleGallery);
          },
        },
        {
          text: 'Camera',
          onPress: () => {
            launchCamera(options, handleCamera);
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handleRemoveImage = () => {
    dispatch(setProfileImage(null));
  };
  const handleClose = () => {
    console.log('Closed...');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Closed...')}
        style={styles.header}>
        <Icon name="close" size={30} color="white" />
      </TouchableOpacity>
      {selectedImage !== null ? (
        <Image source={{uri: selectedImage}} style={styles.fullScreenImage} />
      ) : (
        <Image source={Images.profile} style={styles.fullScreenImage} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChangeImage}>
          <Icon name="image-edit" size={24} color="white" />
          <Text style={styles.buttonText}>Change Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRemoveImage}>
          <Icon name="delete" size={24} color="white" />
          <Text style={styles.buttonText}>Remove Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileImageScreen;
