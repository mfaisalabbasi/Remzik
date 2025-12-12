import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar,Platform,FlatList, SafeAreaView, ScrollView, RefreshControl,TouchableOpacity} from 'react-native';
import Header from '../components/Header';
const { width } = Dimensions.get('window');
import colors from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';



const slides = [
  {
    id: '1',
    title: 'Welcome to Al-Mizan Protocol',
    description: 'Tokenize real-world assets in a Shariah-compliant way.',
    image: require('../assets/onboarding/slide1.png'), // replace with your image
  },
  {
    id: '2',
    title: 'Invest in Real Estate',
    description: 'Start investing with minimal hassle and full transparency.',
    image: require('../assets/onboarding/slide2.png'),
  },
  {
    id: '3',
    title: 'Track Your Assets',
    description: 'Monitor and manage your tokenized assets anytime, anywhere. ',
    image: require('../assets/onboarding/slide3.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  };

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <TouchableOpacity style={{width:'100%', alignItems:'flex-end',}}><Text style={{color:colors.primary}}>Skip</Text></TouchableOpacity>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index.toString()}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      {currentIndex === slides.length - 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Navigate to your main app screen
            navigation.replace('Home'); // replace 'Home' with your screen name
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
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
    

      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Pagination Dots */}
      

      {/* Get Started Button */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1},
  slide: { width, alignItems: 'center', padding: 20 ,height:'100%'},
  image: { width: '100%', height: '65%', marginVertical: 10  },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: colors.primary },
  description: { fontSize: 16, textAlign: 'center', color: '#666', marginTop: 10 },
  pagination: { flexDirection: 'row', marginTop:10 , justifyContent:'center'},
  dot: { width: 13, height: 13, borderRadius: 10, marginHorizontal: 5 },
  activeDot: { backgroundColor: colors.accent },
  inactiveDot: { backgroundColor: '#CBD5E1' },
  button: {
    width:"70%",
    backgroundColor: colors.accent,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    margin: 10,
    alignItems:'center'
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default OnboardingScreen;