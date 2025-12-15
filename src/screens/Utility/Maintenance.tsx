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
const MaintenanceScreen = () => {
  return (
    <View style={{flex:1}}>
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
      <Text style={styles.title}>Under Maintenance</Text>
      <Text style={styles.desc}>
        We are performing scheduled maintenance. Please come back later.
      </Text>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    textAlign: 'center',
    marginBottom: 12,
  },

  desc: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },

  btn: {
    backgroundColor: '#D9B676',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  text: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 16,
    lineHeight: 22,
  },
});

export default MaintenanceScreen;