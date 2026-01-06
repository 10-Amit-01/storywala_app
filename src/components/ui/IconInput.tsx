import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Image,
  ViewStyle,
} from 'react-native';

interface IconInputProps extends TextInputProps {
  iconPosition?: 'left' | 'right';
  childrenPos?: 'left' | 'right';
  children?: React.ReactNode;
  logo?: number;
  containerStyle?: ViewStyle;
}

const IconInput = React.memo(
  ({
    iconPosition = 'left',
    children,
    childrenPos = 'left',
    logo,
    containerStyle,
    ...props
  }: IconInputProps) => {
    const Icon = <Image source={logo} />;

    return (
      <View style={[styles.inputContainer, containerStyle]}>
        {iconPosition === 'left' && Icon}
        {childrenPos === 'left' && children}
        <TextInput
          placeholderTextColor="#777"
          {...props}
          style={[styles.input, props.style]}
        />
        {iconPosition === 'right' && Icon}
        {childrenPos === 'right' && children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default IconInput;
