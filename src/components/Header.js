import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../theme/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {/* Logo */}
        <Image
          source={require('../assets/remzik.png')}
          style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
        <View>
          <Text style={styles.appName}>Remzik</Text>
          <Text style={styles.subText}>Protocol</Text>
        </View>
      </View>

      <Text style={styles.region}>🇸🇦 KSA/UAE</Text>
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
});

export default Header;