import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from '../../types/types';

export const InputField = ({ label, value, type, onChange }:InputFieldProps) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            secureTextEntry={type === 'password'}
            onChangeText={onChange}
            accessibilityLabel={label}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
    },
    label: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontFamily: "Work Sans, sans-serif",
        fontWeight: "400",
        lineHeight: 16,
    },
    input: {
        borderRadius: 8,
        borderColor: "rgba(74, 74, 74, 0.32)",
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 11,
        padding: 10,
        color: "rgba(255, 255, 255, 0.55)",
        fontSize: 10,
    }
});