import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

type SupportOption = {
  id: string;
  title: string;
  description?: string;
  icon: string;
  screen?: string;
};

const supportOptions: SupportOption[] = [
  {
    id: '1',
    title: 'Contact Support',
    description: 'Chat or call with our support team',
    icon: 'chatbubble-outline',
    screen: 'ChatSupportScreen',
  },
  {
    id: '2',
    title: 'FAQs',
    description: 'Frequently asked questions',
    icon: 'help-circle-outline',
    screen: 'FAQScreen',
  },
  {
    id: '3',
    title: 'Submit Ticket',
    description: 'Create a new support ticket',
    icon: 'document-text-outline',
    screen: 'TicketScreen',
  },
  {
    id: '4',
    title: 'Call Support',
    description: 'Call us directly',
    icon: 'call-outline',
    screen: '',
  },
];

const SupportScreen = ({ navigation }: any) => {
  const handlePress = (item: SupportOption) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else {
      console.log(`Pressed: ${item.title}`);
      // Handle direct action like call
    }
  };

  const renderItem = ({ item }: { item: SupportOption }) => (
    <TouchableOpacity
      style={styles.optionCard}
      onPress={() => handlePress(item)}
    >
      <View style={styles.left}>
        <Ionicons name={item.icon as any} size={24} color={colors.primary} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <FlatList
        data={supportOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backarrow: { marginLeft: 5, marginVertical: 10 },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
  optionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
