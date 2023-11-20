import {Modal, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const InternetModal = ({onClose, isVisible}) => {
  return (
    <View style={styles.container}>
      <Modal
        // animationType="slide"
        animated={false}
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Icon name="warning" color="gold" size={50} />
            <Text style={styles.modalText}>Login requires Internet Connection</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.closeText}> Close </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InternetModal;
