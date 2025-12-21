import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const PropertyDetailsScreen = ({ navigation, route }) => {
  const property = route.params?.property || {
    title: 'Luxury Apartment in Riyadh',
    price: 'SAR 1,200,000',
    location: 'Riyadh, Saudi Arabia',
    images: [
      'https://via.placeholder./400x250',
      'https://via.placeholder.com/400x250',
      'https://via.placeholder.com/400x250',
    ],
    area: '200 sqm',
    bedrooms: 3,
    bathrooms: 2,
    tokenAvailable: true,
    roi: '8% Annual',
    description:
      'A luxurious apartment with stunning views, fully furnished, located in the heart of Riyadh. Perfect for investors and residents looking for modern amenities.',
  };

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#0F5F3A"
      />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Property Details</Text>
          <Ionicons name="bookmark-outline" size={24} color={colors.primary} />
        </View>

        {/* Image Carousel */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {property.images.map((img, index) => (
            <Image
              key={index}
              source={require('../../assets/onboarding/featured.jpg')}
              style={styles.image}
            />
          ))}
        </ScrollView>

        {/* Basic Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.price}>{property.price}</Text>
          <Text style={styles.location}>{property.location}</Text>
        </View>

        {/* Key Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Area</Text>
            <Text style={styles.detailValue}>{property.area}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Bedrooms</Text>
            <Text style={styles.detailValue}>{property.bedrooms}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Bathrooms</Text>
            <Text style={styles.detailValue}>{property.bathrooms}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Token</Text>
            <Text style={styles.detailValue}>
              {property.tokenAvailable ? 'Available' : 'Not Available'}
            </Text>
          </View>
        </View>

        {/* ROI */}
        <View style={styles.roiContainer}>
          <Text style={styles.roiText}>Expected ROI: {property.roi}</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{property.description}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.investBtn}
            onPress={() =>
              navigation.navigate('Market', { screen: 'EnterAmount' })
            }
          >
            <Text style={styles.investText}>Invest Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: colors.primary },
  image: { width: 400, height: 250, resizeMode: 'cover', marginRight: 8 },
  infoContainer: { padding: 18 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.primary,
  },
  price: { fontSize: 18, marginBottom: 4 },
  location: { fontSize: 14, color: '#666' },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 18,
    marginTop: 16,
  },
  detailBox: { width: '50%', marginBottom: 12 },
  detailLabel: { fontSize: 12, color: '#888' },
  detailValue: { fontSize: 16, fontWeight: '600' },
  roiContainer: { paddingHorizontal: 16, marginVertical: 16 },
  roiText: { fontSize: 16, fontWeight: '600', color: '#FF5722' },
  descriptionContainer: { paddingHorizontal: 18, marginBottom: 24 },
  description: { fontSize: 14, color: '#555', lineHeight: 20 },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  investBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  investText: { color: '#fff', fontWeight: '500', fontSize: 20 },
  shareBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  shareText: { color: '#fff', fontWeight: 'bold' },
});

export default PropertyDetailsScreen;
