import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import formFields from '../../../constants/formFields.json';
import {Images} from '../../../constants/images';
import Header from '../../../components/Common/Header';
import CustomInput from '../../../components/Common/CustomInput';
import CustomButton from '../../../components/Common/CustomButton';
import {styles} from './styles';
import {validateMobileNumber} from '../../../utils/validation';
import {
  setFullName,
  setLastName,
  setMobileNumber,
  setAddress,
  setGender,
  setDateOfBirth,
  setProfileImage,
  setPdfDocument,
} from '../../../redux/actions/profileActions';

const ProfileDetailsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [fields, setFields] = useState(formFields.fields);
  const [errorFields, setErrorFields] = useState([]);
  const [dateError, setDateError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [open, setOpen] = useState(false);

  // Local state for form fields
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);
  const [localFullName, setLocalFullName] = useState('');
  const [localLastName, setLocalLastName] = useState('');
  const [localMobileNumber, setLocalMobileNumber] = useState('');
  const [localAddress, setLocalAddress] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [date, setDate] = useState(new Date());

  const imageUri = useSelector(state => state.profileData.profileImage);

  useEffect(() => {
    setSelectedImage(imageUri);
  }, [imageUri]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.pdf],
      });
      setFileResponse(response);
      console.log('document response', response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderFormField = field => {
    switch (field.type) {
      case 'text':
      case 'multiline':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <CustomInput
              placeholder={field.placeholder}
              numberOfLines={field.numberOfLines || 1}
              setvalue={text => {
                if (field.label === 'First Name') {
                  setLocalFullName(text);
                } else if (field.label === 'Last Name') {
                  setLocalLastName(text);
                } else if (field.label === 'Mobile Number') {
                  setLocalMobileNumber(text);
                } else if (field.label === 'Address') {
                  setLocalAddress(text);
                }
              }}
            />
            {field.label === 'Mobile Number'
              ? numberError && (
                  <Text style={styles.errorText}>{numberError}</Text>
                )
              : ''}
          </View>
        );
      case 'dropdown':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <View style={styles.button}>
              <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }
                mode="dropdown">
                <Picker.Item label="Select Gender" value="" />
                {field.options.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </View>
        );
      case 'date':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.button}>
              <Text style={styles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                if (
                  date >= new Date('1980-01-01') &&
                  date <= new Date('2003-12-31')
                ) {
                  setDate(date);
                  setDateError('');
                } else {
                  setDateError('Age must be greater than 20 & lesser than 40');
                }
                setOpen(false);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            {dateError && <Text style={styles.errorText}>{dateError}</Text>}
          </View>
        );
      case 'document':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDocumentSelection}>
              {fileResponse.length === 0 ? (
                <Text style={[styles.heading, {padding: 10, color: 'gray'}]}>
                  {field.placeholder}
                </Text>
              ) : (
                fileResponse.map((file, index) => (
                  <Text
                    key={index.toString()}
                    style={[styles.heading, {padding: 10}]}
                    numberOfLines={2}
                    ellipsizeMode={'middle'}>
                    {file?.name}
                  </Text>
                ))
              )}
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const handleUploadImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    Alert.alert(
      'Upload Image',
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

  const handleGallery = response => {
    console.log('Open Gallery...');
    if (response.didCancel) {
      console.log('User canceled image library');
    } else if (response.error) {
      console.log('ImagePicker Error (Library): ', response.error);
    } else {
      // setSelectedImage(response);
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
      // setSelectedImage(response);
      setSelectedImage(response.assets[0]?.uri || response.assets?.uri);
      console.log('Camera Image...', response);
    }
  };

  const handleSubmit = () => {
    // Check for empty fields
    if (!validateMobileNumber(localMobileNumber)) {
      setNumberError('Invalid Mobile Number');
    }
    if (
      !localFullName ||
      !localLastName ||
      !localMobileNumber ||
      !localAddress ||
      !selectedGender ||
      !numberError
    ) {
      setErrorFields('Please fill in all fields.');
      // Alert.alert('Error', 'Please fill in all required fields.');
      return;
    } else {
      dispatch(setProfileImage(selectedImage));
      dispatch(setFullName(localFullName));
      dispatch(setLastName(localLastName));
      dispatch(setMobileNumber(localMobileNumber));
      dispatch(setAddress(localAddress));
      dispatch(setDateOfBirth(date.toDateString()));
      dispatch(setGender(selectedGender));
      dispatch(setPdfDocument(fileResponse));
      Alert.alert('success', 'saved successfully.');

      navigation.navigate('HomeScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Additional" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={handleUploadImage}>
          {selectedImage !== null ? (
            <Image source={{uri: selectedImage}} style={styles.profileImage} />
          ) : (
            <Image source={Images.profile} style={styles.profileImage} />
          )}
        </TouchableOpacity>
        {fields.map(renderFormField)}
        {errorFields.length > 0 && (
          <Text style={styles.errorText}>{errorFields}</Text>
        )}
        <CustomButton text="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;
