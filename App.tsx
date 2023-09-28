import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import Cards from './src/components/Cards';
import TitleCards from './src/components/TitleCards';

// work done
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={{backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={{marginLeft: 10}}>
            <AntDesign name={'arrowleft'} size={25} />
          </View>
          <View style={{width: '80%', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
              Work history
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginVertical: 10,
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <Feather
            name="search"
            size={20}
            color="#000"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Search for jobs by address"
            style={{padding: 8}}
            placeholderTextColor={'#5c5c5c'}
          />
        </View>
      </View>
      <View style={{backgroundColor: '#f0f0f0', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
            marginHorizontal: 7,
          }}>
          <TitleCards
            sourceImage={require('./src/assets/bag.png')}
            textName={'Total Jobs'}
            number={'59'}
            iconName={'bag-handle-outline'}
            showIcon={true}
          />
          <TitleCards
            sourceImage={require('./src/assets/path.png')}
            textName={'Total Km'}
            number={'355, 00'}
            iconName={'bag-handle-outline'}
            showIcon={true}
          />
          <TitleCards
            textName={'Total Gains'}
            number={'4,590.00'}
            iconName={'bag-handle-outline'}
            showIcon={true}
            sourceImage={require('./src/assets/coin.png')}
          />
        </View>

        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <Cards
            title={'Via Spartaco, 10, Milan'}
            verify={true}
            location={false}
            subTitle={'00011'}
          />
          <Cards
            title={'Pick up Air-Samples ASAP'}
            subTitle={'Via Spartaco, 10, Milan'}
            verify={false}
            location={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
