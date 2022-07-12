import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const MessageForm = () => {
  const [text, setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{
    id: number;
    message: String;
    date: Date;
  } | null>(null);
  const nextId = useRef<number>(1);
  const inputRef = useRef<TextInput | null>(null);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
      id: nextId.current,
    });
    setText('');
    nextId.current += 1;
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} ref={inputRef} />
      <Button title="PRESS ME" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메세지: {lastMessage.message} (
            {lastMessage.date.toLocaleString()})
          </Text>
        </View>
      )}
    </View>
  );
};

export default MessageForm;
