import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Button, ImageBackground, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from '../../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../utils/Loading';

const ProfilScreen = () => {
  const [isLoading, setIsloading] = useState(false);
  const { signout, user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserName, setCurrentUserName] = useState('');
  const usersColl = firestore().collection('users');

  const getCurrentUser = async () => {
    usersColl
      .doc(user.uid)
      .get()
      .then(result => {
        setCurrentUser(result.data());
        setCurrentUserName(result.data().Name);
      });
  };

  useEffect(() => {
    setIsloading(true);
    getCurrentUser();
    setIsloading(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      {isLoading ? (
        <Loading />
      ) : ( 
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => setShowModal(!showModal)}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              margin: 10,
              backgroundColor:"red"
            }}>
            <ImageBackground
              source={{
                uri: currentUser.ImageUrl,
              }}
              imageStyle={{ borderRadius: 50 }}
              style={{
                flex: 1,
              }}></ImageBackground>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 36,
                height: 36,
                borderRadius: 20,
                backgroundColor: '#000',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#fff',
              }}>
              <Icon name="camera" size={16} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={{ fontSize: 24 }}>{currentUser.Name}</Text>

          <Button color="#f00" onPress={() => signout()} title="Cıkıs" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfilScreen;
