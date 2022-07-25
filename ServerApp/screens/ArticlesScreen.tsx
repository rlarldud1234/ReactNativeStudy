import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from './types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

const ArticlesScreen = () => {
  const {params} = useRoute<ArticleScreenRouteProp>();
  return (
    <View style={styles.block}>
      <Text>{params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default ArticlesScreen;
