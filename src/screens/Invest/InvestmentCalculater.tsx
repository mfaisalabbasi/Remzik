import React, { useState } from 'react';
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
import Slider from '@react-native-community/slider';

const CalculatorScreen = ({ navigation, route }) => {
  const { tokens = 10, tokenPrice = 56 } = route.params || {};
  const [holdingYears, setHoldingYears] = useState(3);

  const ownershipPercent = (tokens / 10000) * 100;
  const investedAmount = tokens * tokenPrice;
  const projectedPayout = investedAmount * (1 + holdingYears * 0.08);

  return (
<View style={{flex:1, backgroundColor:'#ffffff'}}>

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

      <Text style={styles.header}>Investment Calculator</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Holding Period</Text>
        <Text style={styles.value}>{holdingYears} Years</Text>

        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={holdingYears}
          onValueChange={setHoldingYears}
          minimumTrackTintColor="#0B3D2E"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.row}>Ownership</Text>
        <Text style={styles.value}>{ownershipPercent.toFixed(2)}%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.row}>Projected Payout</Text>
        <Text style={styles.value}>${projectedPayout.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() =>
          navigation.navigate('ReviewSign', {
            tokens,
            tokenPrice,
            holdingYears,
          })
        }
      >
        <Text style={styles.primaryText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin:20,
    marginTop:30
  },

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
  },

  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
    marginTop: 6,
  },

  row: {
    fontSize: 14,
    color: '#6B7280',
  },

  item: {
    fontSize: 14,
    marginBottom: 8,
    color: '#374151',
  },

  total: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: '#0B3D2E',
  },

  agreement: {
    marginVertical: 20,
  },

  agreeText: {
    fontSize: 12,
    color: '#6B7280',
  },

  method: {
    backgroundColor: '#F9FAFB',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  methodText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  primaryBtn: {
    backgroundColor: '#D9B676',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
  },

  primaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },

  success: {
    fontSize: 22,
    fontWeight: '700',
    color: '#16A34A',
    textAlign: 'center',
    marginBottom: 12,
  },

  desc: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default CalculatorScreen;