import {Modal, View, Text, Button} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const InternetModal = ({onClose, isVisible}) => {

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        animated={false}
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Icon name="warning" color="#006D5B" size={30} />
            <Text style={styles.modalText}>No Internet Connection</Text>
            <Button title="Close" style={styles.button} onPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InternetModal;
