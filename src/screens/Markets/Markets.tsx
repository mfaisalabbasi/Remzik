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

const properties = [
  {
    id: '1',
    name: 'Emerald Gardens Villa',
    location: 'Riyadh, KSA',
    price: 56,
    yield: '8.4%',
  },
  {
    id: '2',
    name: 'Palm View Apartments',
    location: 'Dubai, UAE',
    price: 72,
    yield: '9.1%',
  },
];

const MarketListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('MarketPropertyDetail', { property: item })
      }
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Token Price</Text>
        <Text style={styles.value}>${item.price}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Expected Yield</Text>
        <Text style={styles.value}>{item.yield}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Shariah Certified</Text>
      </View>
    </TouchableOpacity>
  );

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
      <Text style={styles.header}>Market</Text>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    padding: 20,
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  location: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  label: { fontSize: 13, color: '#6B7280' },
  value: { fontSize: 13, fontWeight: '600', color: '#0B3D2E' },

  badge: {
    marginTop: 10,
    backgroundColor: '#E6F2EE',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});

export default MarketListScreen;