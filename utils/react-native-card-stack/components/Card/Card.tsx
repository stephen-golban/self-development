import React from 'react';
import S from './Card.styles';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

const Card: React.FC<{ source: string; title: string }> = ({ title, source }) => {
  return (
    <View style={S.CardWrapper}>
      <FastImage
        style={S.CardImage}
        resizeMode={FastImage.resizeMode.cover}
        source={{ uri: source, priority: FastImage.priority.high }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default Card;
