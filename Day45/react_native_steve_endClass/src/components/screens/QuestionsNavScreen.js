import { StackNavigator } from 'react-navigation';
import QuestionsIndexScreen from './QuestionsIndexScreen';
import QuestionsShowScreen from './QuestionsShowScreen';

const QuestionsNavScreen = StackNavigator({
  QuestionsIndex: {screen: QuestionsIndexScreen},
  QuestionsShow: {screen: QuestionsShowScreen}
});

export default QuestionsNavScreen;
