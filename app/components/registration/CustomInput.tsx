import React from 'react';
import { TextInput, HelperText, useTheme } from 'react-native-paper';
import { createCustomTheme } from '../../theme/customTheme';
import { styles } from '../../styles/registration.styles';
import { KeyboardTypeOptions } from 'react-native';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  onToggleSecureEntry?: () => void;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export const CustomInput = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  onToggleSecureEntry,
  ...props
}: CustomInputProps) => {
  const theme = useTheme();
  const customTheme = createCustomTheme(theme);

  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        error={!!error}
        style={styles.input}
        theme={customTheme}
        secureTextEntry={secureTextEntry}
        right={
          onToggleSecureEntry && (
            <TextInput.Icon
              icon={secureTextEntry ? "eye" : "eye-off"}
              onPress={onToggleSecureEntry}
            />
          )
        }
        {...props}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};
