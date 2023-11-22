import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {styles} from './styles';
import CustomInput from '../Common/CustomInput';
import theme from '../../constants/theme';

const FormField = ({
  field,
  value,
  setValue,
  datePickerOpen,
  cancelDatePicker,
  handleDatePicker,
  date = new Date(),
  setDate,
  handleDocument,
  fileResponse,
}) => {
  return (
    <View key={field.label} style={styles.fieldContainer}>
      <Text style={styles.heading}>{field.label}</Text>
      {field.type === 'dropdown' ? (
        <View style={styles.fieldInput}>
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
            mode="dropdown">
            <Picker.Item label="Select Gender" value="" />
            {field.options.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        </View>
      ) : field.type === 'date' ? (
        <TouchableOpacity onPress={handleDatePicker} style={styles.fieldInput}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
          <DatePicker
            modal
            mode="date"
            open={datePickerOpen}
            date={date}
            onConfirm={date => {
              setDate(date);
            }}
            onCancel={cancelDatePicker}
          />
        </TouchableOpacity>
      ) : field.type === 'document' ? (
        <TouchableOpacity style={styles.fieldInput} onPress={handleDocument}>
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
      ) : (
        <CustomInput
          placeholder={field.placeholder}
          numberOfLines={field.numberOfLines || 1}
          value={value}
          setvalue={text => setValue(text, field.label)}
        />
      )}
    </View>
  );
};

export default FormField;
