import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from '../../types/types';

const InputField = ({label, value, type, onChange}:InputFieldProps) => (
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
        marginBottom: 15,
    },
    label: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Work Sans, sans-serif",
        fontWeight: "500",
        lineHeight: 16,
        marginBottom: 5,
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#333", // Slightly lighter background
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

export default InputField;