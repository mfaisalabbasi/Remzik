import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import MarketOverview from '../../components/Market/MarketOverview';
import MarketFilters from '../../components/Market/MarketFilters';
import PropertyCard from '../../components/Market/PropertyCard';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function MarketScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MarketOverview />
        <MarketFilters />

        {[1, 2, 3].map(item => (
          <PropertyCard key={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
