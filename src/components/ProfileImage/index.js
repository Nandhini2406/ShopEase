import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {styles} from './styles';
import CustomInput from '../Common/CustomInput';

const FormField = ({
  field,
  value,
  setValue,
  datePickerOpen,
  setDatePickerOpen,
  date = new Date(),
  setDate,
  handleDocument,
  fileResponse, // Make sure to include this prop
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
        <TouchableOpacity
          onPress={() => setDatePickerOpen(true)}
          style={styles.fieldInput}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
          <DatePicker
            modal
            mode="date"
            open={datePickerOpen}
            date={date}
            onConfirm={date => {
              setDatePickerOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setDatePickerOpen(false);
            }}
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
          setvalue={text => setValue(text, field.label)}
        />
      )}
    </View>
  );
};

export default FormField;

// switch (field.type) {
//     case 'text':
//     case 'multiline':
//       return (
//         <View key={field.label} style={styles.fieldContainer}>
//           <Text style={styles.heading}>{field.label}</Text>
//           <CustomInput
//             placeholder={field.placeholder}
//             numberOfLines={field.numberOfLines || 1}
//             setvalue={text => {
//               if (field.label === 'First Name') {
//                 setLocalFullName(text);
//               } else if (field.label === 'Last Name') {
//                 setLocalLastName(text);
//               } else if (field.label === 'Mobile Number') {
//                 setLocalMobileNumber(text);
//               } else if (field.label === 'Address') {
//                 setLocalAddress(text);
//               }
//             }}
//           />
//         </View>
//       );
//     case 'dropdown':
//       return (
//         <View key={field.label} style={styles.fieldContainer}>
//           <Text style={styles.heading}>{field.label}</Text>
//           <View style={styles.button}>
//             <Picker
//               selectedValue={selectedGender}
//               onValueChange={(itemValue, itemIndex) =>
//                 setSelectedGender(itemValue)
//               }
//               mode="dropdown">
//               <Picker.Item label="Select Gender" value="" />
//               {field.options.map((option, index) => (
//                 <Picker.Item key={index} label={option} value={option} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//       );
//     case 'date':
//       return (
//         <View key={field.label} style={styles.fieldContainer}>
//           <Text style={styles.heading}>{field.label}</Text>
//           <TouchableOpacity
//             onPress={() => setOpen(true)}
//             style={styles.button}>
//             <Text style={styles.dateText}>{date.toDateString()}</Text>
//           </TouchableOpacity>
//           <DatePicker
//             modal
//             mode="date"
//             open={open}
//             date={date}
//             onConfirm={date => {
//               setOpen(false);
//               setDate(date);
//             }}
//             onCancel={() => {
//               setOpen(false);
//             }}
//           />
//         </View>
//       );
//     case 'document':
//       return (
//         <View key={field.label} style={styles.fieldContainer}>
//           <Text style={styles.heading}>{field.label}</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleDocumentSelection}>
//             {fileResponse.length === 0 ? (
//               <Text style={[styles.heading, {padding: 10, color: 'gray'}]}>
//                 {field.placeholder}
//               </Text>
//             ) : (
//               fileResponse.map((file, index) => (
//                 <Text
//                   key={index.toString()}
//                   style={[styles.heading, {padding: 10}]}
//                   numberOfLines={2}
//                   ellipsizeMode={'middle'}>
//                   {file?.name}
//                 </Text>
//               ))
//             )}
//           </TouchableOpacity>
//         </View>
//       );
//     default:
//       return null;
//   }
