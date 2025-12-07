// src/components/PropertyCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

export default function PropertyCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress?.(item)}>
      <Text>I am PropertyCard</Text>
      {/* <View style={styles.thumb}>
        {item.image
          ? <Image source={item.image} style={styles.image} resizeMode="cover" />
          : <View style={styles.placeholder} />
        }
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.small}>Price / token</Text>
            <Text style={styles.price}>${item.pricePerTokenUSD.toLocaleString()}</Text>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.small}>Est. yield</Text>
            <Text style={styles.yield}>{item.estimatedYield}%</Text>
          </View>
        </View>
      </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    marginVertical: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  thumb: { width: 120, height: 100, backgroundColor: colors.lightGray },
  image: { width: '100%', height: '100%' },
  placeholder: { flex: 1, backgroundColor: colors.lightGray },
  content: { padding: 12, flex: 1, justifyContent: 'space-between' },
  title: { fontSize: 15, color: colors.text, fontWeight: '600' },
  location: { color: colors.muted, marginTop: 4, fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  small: { fontSize: 11, color: colors.muted },
  price: { fontWeight: '700', color: colors.text },
  yield: { fontWeight: '700', color: colors.primary },
});