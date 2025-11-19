import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

const CustomAppBar = ({ navigation, back, options, route }: any) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action 
          icon="arrow-right" 
          onPress={() => navigation.navigate('Second')} 
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
