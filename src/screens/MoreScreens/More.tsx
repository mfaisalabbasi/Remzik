import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import colors from '../../theme/colors';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const items = [
  { title: 'Profile', screen: 'Profile' },
  { title: 'Documents', screen: 'Documents' },
  { title: 'Help Center', screen: 'HelpCenter' },
  { title: 'Settings', screen: 'Settings' },
];

const MoreScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
      <SafeAreaView
                      edges={['top']}
                      style={{ backgroundColor: colors.primary , paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0}}
                    >
                      <StatusBar
                        barStyle="light-content"
                        translucent={false}
                        backgroundColor="#0F5F3A"
                      />
                    </SafeAreaView>
                    <Header
                    title="Remzik"
                    onProfilePress={() => navigation.navigate('Profile')}
                    onNotifPress={() => navigation.navigate('Notifications')}
                    left={
                      <TouchableOpacity onPress={() => navigation.toggleDrawer?.()}>
                        <Ionicons name="menu-outline" size={26} color={colors.card} />
                      </TouchableOpacity>
                    }
                  />
      
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>More</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item.title}
          style={styles.item}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 , margin:20,marginTop:30},

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#F9FAFB',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});

export default MoreScreen;