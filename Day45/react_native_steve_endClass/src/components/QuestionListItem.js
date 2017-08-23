import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const {height, width} = Dimensions.get('window');

function QuestionListItem (props) {
  const {id, title, author_name, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('QuestionsShow', {id})}
      style={{
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 5 }}>
      <View style={{marginRight: 5}}>
        <Image style={{width: 50, height: 50, borderRadius: 5}} source={{uri: 'https://i.imgur.com/e9wMaRx.jpg'}} />
      </View>

      <View style={{flex: 0}}>
        <Text
          style={{fontWeight: 'bold', width: width * 0.8}}
          ellipsizeMode='tail'
          numberOfLines={1}>{title}</Text>
        <Text>{author_name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default QuestionListItem;
