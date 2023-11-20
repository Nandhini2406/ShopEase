import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles';
import { Images } from '../../constants/images';
import Header from '../../components/Common/Header';
import { updateProfileDetails } from '../../redux/actions/profileActions';

const ViewProfileDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.profileData);

  const [isEditMode, setEditMode] = useState(false);
  const [editedFullName, setEditedFullName] = useState(profileData.fullName);
  const [editedLastName, setEditedLastName] = useState(profileData.lastName);
  const [editedMobileNumber, setEditedMobileNumber] = useState(profileData.mobileNumber);
  const [editedAddress, setEditedAddress] = useState(profileData.address);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    // Save the edited details to Redux state
    dispatch(
      updateProfileDetails({
        fullName: editedFullName,
        lastName: editedLastName,
        mobileNumber: editedMobileNumber,
        address: editedAddress,
      })
    );
    // Exit edit mode
    setEditMode(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile Details"
        onPress={() => navigation.goBack()}
        rightButtonIcon={isEditMode ? 'save' : 'pencil'}
        onRightButtonPress={isEditMode ? handleSaveChanges : handleEditProfile}
      />
      <ScrollView>
        <Image source={{ uri: profileData.profileImage || Images.profile }} style={styles.profileImage} />
        <View style={styles.profileContainer}>
          {isEditMode ? (
            <>
              <TextInput
                style={styles.editInput}
                placeholder="Full Name"
                value={editedFullName}
                onChangeText={text => setEditedFullName(text)}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Last Name"
                value={editedLastName}
                onChangeText={text => setEditedLastName(text)}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Mobile Number"
                value={editedMobileNumber}
                onChangeText={text => setEditedMobileNumber(text)}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Address"
                value={editedAddress}
                onChangeText={text => setEditedAddress(text)}
              />
            </>
          ) : (
            <>
              <Text style={styles.heading}>Full Name: {profileData.fullName} {profileData.lastName}</Text>
              <Text style={styles.heading}>Mobile Number: {profileData.mobileNumber}</Text>
              <Text style={styles.heading}>Address: {profileData.address}</Text>
              <Text style={styles.heading}>Gender: {profileData.gender}</Text>
              <Text style={styles.heading}>Date of Birth: {profileData.dateOfBirth}</Text>
              {profileData.pdfDocument && (
                <Text style={styles.heading}>PDF Document: {profileData.pdfDocument}</Text>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewProfileDetails;



// import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import {styles} from './styles';
// import { Images } from '../../constants/images';
// import Header from '../../components/Common/Header';

// const ViewProfileDetails = ({navigation}) => {

//   const profileData = useSelector(state => state.profileData);

//   const handleEditProfile = () => {

//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header title="Profile Details" onPress={() => navigation.goBack() } rightButtonIcon="pencil"
//         onRightButtonPress={handleEditProfile}/>
//       <ScrollView>
//         <Image source={{ uri: profileData.profileImage || Images.profile }} style={styles.profileImage} />
//       <View style={styles.profileContainer}>
//         <Text style={styles.heading}>Full Name: {profileData.fullName} {profileData.lastName}</Text>
//         <Text style={styles.heading}>Mobile Number: {profileData.mobileNumber}</Text>
//         <Text style={styles.heading}>Address: {profileData.address}</Text>
//         <Text style={styles.heading}>Gender: {profileData.gender}</Text>
//         <Text style={styles.heading}>Date of Birth: {profileData.dateOfBirth}</Text>
//         {profileData.pdfDocument && (
//           <Text style={styles.heading}>PDF Document: {profileData.pdfDocument}</Text>
//         )}
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ViewProfileDetails;
