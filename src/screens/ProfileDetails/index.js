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
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import IconButton from '../../components/Common/IconButton';
import formFields from '../../constants/formFields.json';
import Header from '../../components/Common/Header';
import CustomInput from '../../components/Common/CustomInput';
import CustomButton from '../../components/Common/CustomButton';
import {styles} from './styles';
import {validateMobileNumber} from '../../utils/validation';
import {
  setFullName,
  setLastName,
  setMobileNumber,
  setAddress,
  setGender,
  setDateOfBirth,
  setProfileImage,
  setPdfDocument,
} from '../../redux/actions/profileActions';

const ProfileDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [fileResponse, setFileResponse] = useState([]);

  const [fields, setFields] = useState(formFields.fields);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorFields, setErrorFields] = useState([]);

  // Local state for form fields
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
      // setSelectImage(false);
    } else if (response.error) {
      console.log('ImagePicker Error (Library): ', response.error);
      // setSelectImage(false);
    } else {
      setSelectedImage(response.assets[0]?.uri || response.uri);
      console.log('Gallery Image...', response);
    }
  };

  const handleCamera = response => {
    console.log('Open Camera...');
    if (response.didCancel) {
      console.log('User canceled taking a photo');
      // setSelectImage(false);
    } else if (response.error) {
      console.log('Camera Error: ', response.error);
      // setSelectImage(false);
    } else {
      setSelectedImage(response.assets[0]?.uri || response.uri);
      console.log('Camera Image...', response.assets[0]?.uri);
    }
  };

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
          </View>
        );
      case 'dropdown':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <TouchableOpacity style={styles.button}>
              <Picker
              style={{width: 300, height:200}}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }>
                <Picker.Item label="Select Gender" value="" />
                {field.options.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </TouchableOpacity>
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
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        );
      default:
        return null;
    }
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.pdf],
      });
      setFileResponse(response);
      console.log('document response', fileResponse[0]?.uri);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleSubmit = () => {
    // Check for empty fields
    const isFieldEmpty = value => {
      return value.trim() === '';
    };
    const emptyFields = fields.filter(field => {
      const value =
        field.label === 'First Name'
          ? localFullName
          : field.label === 'Last Name'
          ? localLastName
          : field.label === 'Mobile Number'
          ? localMobileNumber
          : localAddress;
      return field.type !== 'date' && isFieldEmpty(value);
    });
    if (emptyFields.length > 0) {
      setErrorFields(emptyFields);
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    // dispatch the details to the state
    dispatch(setProfileImage(selectedImage));
    dispatch(setFullName(localFullName));
    dispatch(setLastName(localLastName));
    dispatch(setMobileNumber(localMobileNumber));
    dispatch(setAddress(localAddress));
    dispatch(setDateOfBirth(date));
    dispatch(setGender(selectedGender));
    dispatch(setPdfDocument(fileResponse[0]?.uri));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Additional" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <IconButton
            iconName="pencil"
            iconSize={30}
            buttonStyle={styles.editIcon}
            onPress={handleUploadImage}
          />
          {selectedImage ? (
            <Image source={{uri: selectedImage}} style={styles.profileImage} />
          ) : (
            <View style={styles.profileImage}>
              <Icon name="person-circle-outline" size={200} color="gray" />
            </View>
          )}
        </View>
        {fields.map(renderFormField)}
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={[styles.button, styles.heading, {padding: 10}]}
            numberOfLines={2}
            ellipsizeMode={'middle'}>
            {file?.name}
          </Text>
        ))}
        <CustomButton text="Select file" onPress={handleDocumentSelection} />
        {errorFields.length > 0 && (
          <Text style={styles.errorText}>
            Please fill in all required fields.
          </Text>
        )}
        <CustomButton text="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetails;
