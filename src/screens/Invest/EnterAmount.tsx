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

const EnterAmountScreen = ({ navigation, route }) => {
//   const tokenPrice = route?.params?.tokenPrice || 56;
//   const [tokens, setTokens] = useState(1);

//   const totalAmount = tokens * tokenPrice;

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
        <Text style={styles.title}>Enter Amount</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Token Info */}
      <View style={styles.card}>
        <Text style={styles.label}>Token Price</Text>
        <Text style={styles.price}>$okenPrice</Text>
      </View>

      {/* Token Selector */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Number of Tokens</Text>

        <View style={styles.counter}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => tokens > 1 && setTokens(tokens - 1)}
          >
            <Text style={styles.counterText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.token}>tokens</Text>

          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setTokens(tokens + 1)}
          >
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.meta}>Total Investment</Text>
          <Text style={styles.metaValue}>$totalAmount</Text>
        </View>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() =>
          navigation.navigate('InvestmentCalculator', {
            tokens,
            tokenPrice,
          })
        }
      >
        <Text style={styles.primaryText}>Continue</Text>
      </TouchableOpacity>

      {/* Shariah Badge */}
      <View style={styles.shariah}>
        <Text style={styles.shariahText}>✔ Shariah Compliant</Text>
      </View>

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
    marginHorizontal: 20,
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
  },

  price: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    color: '#0B3D2E',
  },

  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  counterBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E6F2EE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  token: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  meta: {
    fontSize: 13,
    color: '#6B7280',
  },

  metaValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  primaryBtn: {
    backgroundColor: colors.accent,
    marginHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },

  primaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },

  shariah: {
    alignSelf: 'center',
    marginTop: 18,
    backgroundColor: '#E6F2EE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  shariahText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});
export default EnterAmountScreen;