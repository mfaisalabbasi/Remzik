import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';

type SettingOption = {
  id: string;
  title: string;
  type: 'toggle' | 'navigation';
  value?: boolean;
  screen?: string;
};

const SettingsScreen = ({ navigation }: any) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const settingsOptions: SettingOption[] = [
    {
      id: '1',
      title: 'Notifications',
      type: 'toggle',
      value: notificationsEnabled,
    },
    { id: '2', title: 'Dark Mode', type: 'toggle', value: darkModeEnabled },
    {
      id: '3',
      title: 'Change Password',
      type: 'navigation',
      screen: 'ChangePasswordScreen',
    },
    {
      id: '4',
      title: 'Language',
      type: 'navigation',
      screen: 'LanguageScreen',
    },
    {
      id: '5',
      title: 'About App',
      type: 'navigation',
      screen: 'AboutAppScreen',
    },
  ];

  const handleToggle = (id: string) => {
    if (id === '1') setNotificationsEnabled(!notificationsEnabled);
    if (id === '2') setDarkModeEnabled(!darkModeEnabled);
  };

  const handleNavigation = (screen?: string) => {
    if (screen) navigation.navigate(screen);
  };

  const renderItem = ({ item }: { item: SettingOption }) => (
    <View style={styles.settingItem}>
      <Text style={styles.title}>{item.title}</Text>
      {item.type === 'toggle' ? (
        <Switch
          value={item.value}
          onValueChange={() => handleToggle(item.id)}
          thumbColor={item.value ? colors.primary : '#ccc'}
        />
      ) : (
        <TouchableOpacity onPress={() => handleNavigation(item.screen)}>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </TouchableOpacity>
      )}
    </View>
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
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default SettingsScreen;

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
  settingItem: {
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
