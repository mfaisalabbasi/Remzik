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
import PortfolioSummaryCard from '../../components/PortfolioSummaryCard';


const holdings = [
  {
    id: '1',
    name: 'Emerald Gardens Villa',
    value: 6450,
    ownership: '2.4%',
    income: 160,
  },
  {
    id: '2',
    name: 'Palm View Apartments',
    value: 6000,
    ownership: '1.8%',
    income: 140,
  },
];

const PortfolioOverviewScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('HoldingDetails', { holdingId: item.id })
      }
    >
      <Text style={styles.propertyName}>{item.name}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Investment Value</Text>
        <Text style={styles.value}>${item.value}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Ownership</Text>
        <Text style={styles.value}>{item.ownership}</Text>
      </View>

      <View style={styles.incomeBadge}>
        <Text style={styles.incomeText}>
          Monthly Income: ${item.income}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex:1}}>
    <PortfolioSummaryCard/>

    <SafeAreaView style={styles.container}>
      <FlatList
        data={holdings}
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },

  propertyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
  },

  value: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  incomeBadge: {
    marginTop: 10,
    backgroundColor: '#E6F2EE',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
  },

  incomeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});

export default PortfolioOverviewScreen;