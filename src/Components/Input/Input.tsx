import React, {ReactPropTypes, useRef, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardType,
  StyleSheet,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  inputContainerStyleHelper,
  inputStyleHelper,
} from '../../Helpers/StyleHelpers/InputStyleHelper';

type Props = {
  placeholder: string;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
  required?: boolean;
  hasError?: boolean;
  corner?: 'cornered' | 'curved' | 'rounded' | 'circle';
  type?: 'input' | 'textarea';
  onTextChanged: Function;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  clearTextOnFocus?: boolean;
  selectTextOnFocus?: boolean;
  ref?: React.RefObject<TextInput>;
  name?: string;
  placeholderColor?: string;
  secureTextEntry?: boolean;
  defaultValue?: string;
};

const Input: React.FC<Props> = ({
  placeholder,
  keyboardType,
  autoFocus = false,
  hasError = false,
  required = false,
  corner = 'curved',
  type = 'input',
  onTextChanged,
  secureTextEntry,
  testID,
  clearTextOnFocus,
  selectTextOnFocus,
  style,
  name,
  textStyle,
  placeholderColor,
  defaultValue,
}) => {
  const [inputError, setInputError] = useState(false);
  const placeholderRef = useRef(
    new Animated.Value(type === 'input' ? 0 : -30),
  ).current;
  const inputRef = useRef<TextInput | null>(null);

  const handleInputValue = (text: string | number) => {
    if (!text) {
      setInputError(true);
      type === 'input'
        ? Animated.timing(placeholderRef, {
            useNativeDriver: true,
            easing: Easing.bounce,
            duration: 200,
            toValue: 0,
          }).start()
        : Animated.timing(placeholderRef, {
            useNativeDriver: true,
            easing: Easing.bounce,
            duration: 200,
            toValue: -30,
          }).start();
    } else {
      setInputError(false);
      onTextChanged(text, name);
    }
  };
  return (
    <View
      style={[
        styles.inputContainer,
        inputContainerStyleHelper(type, corner, inputError, hasError, required),
        style,
      ]}
      onTouchEnd={() => inputRef.current?.focus()}
      testID="inputContainer">
      <Animated.Text
        style={[
          styles.placeholder,
          {transform: [{translateY: placeholderRef}]},
          {color: placeholderColor},
        ]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        testID={testID || 'textinput'}
        style={[styles.input, inputStyleHelper(type), textStyle]}
        keyboardType={keyboardType}
        clearTextOnFocus={clearTextOnFocus}
        selectTextOnFocus={selectTextOnFocus}
        secureTextEntry={secureTextEntry}
        multiline={type === 'textarea' && true}
        onEndEditing={e => {
          handleInputValue(e.nativeEvent.text);
        }}
        onFocus={() => {
          type === 'input'
            ? Animated.timing(placeholderRef, {
                useNativeDriver: true,
                easing: Easing.ease,
                duration: 200,
                toValue: -30,
              }).start()
            : Animated.timing(placeholderRef, {
                useNativeDriver: true,
                easing: Easing.ease,
                duration: 200,
                toValue: -50,
              }).start();
        }}
        autoFocus={autoFocus}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '95%',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  placeholder: {
    color: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    marginLeft: 10,
    fontSize: 12,
  },
});
export default Input;
