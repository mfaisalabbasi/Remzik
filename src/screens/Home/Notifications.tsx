import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import colors from '../../theme/colors';

const notifications = [
  {
    id: '1',
    title: 'Monthly Payout Received',
    message: 'Your payout for Emerald Gardens Villa has been credited.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    title: 'New Property Listed',
    message: 'Palm View Apartments are now available for investment.',
    time: '1 day ago',
    unread: true,
  },
  {
    id: '3',
    title: 'KYC Approved',
    message: 'Your account has been successfully verified.',
    time: '3 days ago',
    unread: false,
  },
];

const NotificationsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.notificationCard,
        item.unread && styles.unreadCard,
      ]}
    >
      <View style={styles.row}>
        <View style={styles.dot(item.unread)} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
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
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        <TouchableOpacity>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={notifications}
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
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backText: {
    fontSize: 22,
    color: '#0B3D2E',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  clearText: {
    fontSize: 14,
    color: '#6B7280',
  },

  notificationCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  unreadCard: {
    backgroundColor: '#E6F2EE',
  },

  row: {
    flexDirection: 'row',
  },

  dot: (unread) => ({
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: unread ? '#0B3D2E' : 'transparent',
    marginTop: 6,
    marginRight: 10,
  }),

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 4,
  },

  message: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 6,
  },

  time: {
    fontSize: 11,
    color: '#9CA3AF',
  },
});


export default NotificationsScreen;