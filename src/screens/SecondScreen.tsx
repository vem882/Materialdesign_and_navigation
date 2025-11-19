import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type SecondScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Second'>;

interface Props {
  navigation: SecondScreenNavigationProp;
}

const SecondScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Second Screen</Title>
          <Paragraph style={styles.paragraph}>
            You have successfully navigated to the second screen. 
            Use the back button in the app bar to return to the home screen.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="outlined" 
            onPress={() => navigation.goBack()}
          >
            Go Back
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    elevation: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default SecondScreen;
