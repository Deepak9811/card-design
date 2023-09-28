import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Cards = ({title, verify, location, subTitle}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        paddingVertical: 15,
        marginVertical: 5,
      }}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: verify
              ? 'rgba(117, 250, 144, 0.8)'
              : 'rgba(252, 95, 83, 0.4)',
            padding: 5,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {verify ? (
            <AntDesign
              color="#01400d"
              name="checkcircleo"
              size={15}
              style={{marginLeft: 5}}
            />
          ) : (
            <MaterialIcons
              color="#de1709"
              name="cancel-presentation"
              size={15}
              style={{marginLeft: 5}}
            />
          )}

          <Text
            style={{
              marginHorizontal: 5,
              color: verify ? '#01400d' : '#de1709',
            }}>
            {verify ? 'Done' : 'Reject'}
          </Text>
        </View>

        <View>
          <Text style={{color: '#000', fontWeight: '500'}}>€ 24,99</Text>
        </View>
      </View>

      <View style={{marginVertical: 5}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
          {title}
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {location ? (
              <>
                <Ionicons name="location-outline" size={15} />
                <Text style={{marginLeft: 3}}>{subTitle}</Text>
              </>
            ) : (
              <>
                <Text style={{fontSize: 18, color: '#000'}}># </Text>
                <Text style={{color: '#000'}}>{subTitle}</Text>
              </>
            )}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f0f2f5',
              padding: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#adadad',
              marginTop: 5,
            }}>
            <Feather name="calendar" size={18} style={{marginLeft: 8}} />
            <Text style={{marginHorizontal: 8, color: '#000'}}>
              03/04/2022 | 12:00
            </Text>
          </View>
        </View>

        <View style={{marginTop: 5}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000',
                fontWeight: '500',
              }}>
              Details
            </Text>
            <Feather
              name="chevron-right"
              size={18}
              style={{marginLeft: 8}}
              color="#000"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
