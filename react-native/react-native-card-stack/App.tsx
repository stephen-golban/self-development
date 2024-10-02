import { Button, View } from 'react-native';
import React from 'react';
import { MODELS } from './mock';
import Stack from './components/Stack/Stack';
import { useStackContext } from './components/Stack/Stack.context';

const App = () => {
  const { currentCardIndex, swipeCard } = useStackContext();
  console.log('cri', currentCardIndex);
  return (
    <View style={{ flex: 1 }}>
      <Stack
        data={MODELS.slice(0, 5)}
        // onSwipeEnd={() => console.log('end')}
        // onSwipeStart={() => console.log('start')}
        // onSwiped={(i) => console.log('swiped', MODELS[i].name)}
        // onSwipedAll={() => console.log('all')}
        // onSwiping={(x, y) => console.log('x=', x, 'y=', y)}
        // onSwipedLeft={(i) => console.log('left', MODELS[i].name)}
        // onSwipedRight={(i) => console.log('right', MODELS[i].name)}
      />
      <View style={{ width: '100%', height: 100, flexDirection: 'row', backgroundColor: 'red' }}>
        <Button title="Dislike" onPress={() => swipeCard('left')} />
        <Button title="Like" onPress={() => swipeCard('right')} />
      </View>
    </View>
  );
};

export default App;
