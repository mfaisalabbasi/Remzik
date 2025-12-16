import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {/* Logo */}
        <Image
          source={require('../assets/remzik.png')}
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
        />
        <View>
          <Text style={styles.appName}>Remzik</Text>
          <Text style={styles.subText}>Protocol</Text>
        </View>
      </View>

     <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                 <Ionicons name="notifications-outline" color={colors.background} size={25} />
               </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  subText: {
    color: colors.accent,
    fontSize: 10,
  },
  region: {
    color: 'white',
    fontSize: 13,
  },
  notificationBtn: {
    backgroundColor: '#E6F2EE',
    padding: 5,
    borderRadius: 50,
  },

  notificationText: {
    fontSize: 18,
  },
});

export default Header;