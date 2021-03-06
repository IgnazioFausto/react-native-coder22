import { colors } from './Styles/Colors';
import { StyleSheet, View } from 'react-native';
import Layout from './Screens/Layout';

export default function App() {
  return (
    <View style={styles.container}>
      <Layout/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  }
});
