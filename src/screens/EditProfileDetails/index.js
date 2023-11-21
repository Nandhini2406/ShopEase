import React, {useState, useEffect, useCallback} from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import formFields from '../../constants/formFields.json';
import Header from '../../components/Common/Header';
import CustomButton from '../../components/Common/CustomButton';
import FormField from '../../components/ProfileImage';
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

const EditProfileDetails = ({navigation}) => {
  const dispatch = useDispatch();

  const [fields, setFields] = useState(formFields.fields);
  const [errorFields, setErrorFields] = useState([]);

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
    return (
      <FormField
        key={field.label}
        field={field}
        value={getFieldValue(field.label)}
        setValue={value => handleSetValue(field.label, value)}
        datePickerOpen={false}
        setDatePickerOpen={() => {}}
        date={date}
        setDate={setDate}
        handleDocument={handleDocumentSelection}
        fileResponse={fileResponse}
      />
    );
  };

  const handleSetValue = (fieldName, value) => {
    switch (fieldName) {
      case 'First Name':
        setLocalFullName(value);
        break;
      case 'Last Name':
        setLocalLastName(value);
        break;
      case 'Mobile Number':
        setLocalMobileNumber(value);
        break;
      case 'Address':
        setLocalAddress(value);
        break;
      // Add cases for other fields if needed
      default:
        break;
    }
  };

  const getFieldValue = fieldName => {
    switch (fieldName) {
      case 'First Name':
        return localFullName;
      case 'Last Name':
        return localLastName;
      case 'Mobile Number':
        return localMobileNumber;
      case 'Address':
        return localAddress;
      // Add cases for other fields if needed
      default:
        return '';
    }
  };

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
    dispatch(setDateOfBirth(date.toDateString()));
    dispatch(setGender(selectedGender));
    dispatch(setPdfDocument(fileResponse));
    // navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        {fields.map(renderFormField)}
        {errorFields.length > 0 && (
          <Text style={styles.errorText}>Please fill all the fields.</Text>
        )}
        <CustomButton text="Save Changes" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileDetails;
