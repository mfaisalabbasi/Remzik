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

const HoldingDetailScreen = ({ navigation }) => {
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
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Holding Detail</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Details */}
      <View style={styles.card}>
        <Text style={styles.propertyName}>Emerald Gardens Villa</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Ownership</Text>
          <Text style={styles.value}>2.4%</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Investment Value</Text>
          <Text style={styles.value}>$6,450</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Monthly Income</Text>
          <Text style={styles.value}>$160</Text>
        </View>
      </View>

      {/* Documents */}
      <TouchableOpacity style={styles.documentBtn}>
        <Text style={styles.documentText}>View Documents</Text>
      </TouchableOpacity>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },

  back: {
    fontSize: 22,
    color: '#0B3D2E',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    margin: 20,
  },

  propertyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
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

  documentBtn: {
    marginHorizontal: 20,
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  documentText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default HoldingDetailScreen;