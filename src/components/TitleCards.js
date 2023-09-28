import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const TitleCards = ({textName, number, iconName, showIcon, sourceImage}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        width: '28%',
        paddingVertical: 15,
      }}>
      <View style={{flexDirection: 'row', marginBottom: 2}}>
        {showIcon && <Text style={styles.textStyle}>€ </Text>}

        <Text style={styles.textStyle}>{number}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={sourceImage} style={{width: 15, height: 15}} />

        <Text
          style={{
            color: '#383838',
            fontSize: 12,
            marginLeft: 3,
            fontWeight: '500',
          }}>
          {textName}
        </Text>
      </View>
    </View>
  );
};

export default TitleCards;

const styles = StyleSheet.create({
  textStyle: {color: '#000', fontWeight: '500'},
});
