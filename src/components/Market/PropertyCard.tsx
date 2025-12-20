import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const PropertyCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/onboarding/featured.jpg')}
            style={styles.image}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Al-Mizan Residency</Text>
          <Text style={styles.location}>Dubai, UAE</Text>

          <View style={styles.metrics}>
            <Text style={styles.metric}>ROI 12.4%</Text>
            <Text style={styles.metric}>Yield 8.1%</Text>
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Bottom Info */}
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>72% Funded</Text>
        <Text style={styles.infoText}>Token Price: $100</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MarketDetails')}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    // iOS + Android elevation (very subtle like wireframe)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  topRow: {
    flexDirection: 'row',
  },

  imageWrapper: {
    width: 90,
    height: 90,
    marginRight: 12,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  metrics: {
    flexDirection: 'row',
    gap: 12,
  },
  metric: {
    fontSize: 12,
    color: '#111827',
  },

  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginTop: 12,
  },
  progressFill: {
    width: '72%',
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 3,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  infoText: {
    fontSize: 12,
    color: colors.primary,
  },

  button: {
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },
});
export default PropertyCard;
