import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import formFields from '../../constants/formFields.json';
import Header from '../../components/Common/Header';
import CustomInput from '../../components/Common/CustomInput';
import CustomButton from '../../components/Common/CustomButton';
import {styles} from './styles';

const ProfileDetails = () => {
  const navigation = useNavigation();
  const [fields, setFields] = useState(formFields.fields);
  const [selectedGender, setSelectedGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
            />
          </View>
        );
      case 'dropdown':
        return (
          <View key={field.label} style={styles.fieldContainer}>
            <Text style={styles.heading}>{field.label}</Text>
            <TouchableOpacity style={styles.button}>
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

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Additional" onPress={() => navigation.goBack()} />
      <ScrollView>
        {fields.map(renderFormField)}
        <CustomButton
          text="Submit"
          onPress={() => console.log('Form submitted!')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetails;
