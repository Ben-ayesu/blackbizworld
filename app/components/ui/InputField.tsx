import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from '../../types/types';

const InputField = ({ label, value, type, onChange, icon }: InputFieldProps) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputWrapper}>
            {icon && <View>{icon}</View>}
            <TextInput
                style={styles.input}
                value={value}
                secureTextEntry={type === 'password'}
                onChangeText={onChange}
                accessibilityLabel={label}
                placeholder={`Enter your ${label.toLowerCase()}`}
                placeholderTextColor="rgba(255, 255, 255, 0.55)"
            />
        </View>
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
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 10,
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(74, 74, 74, 0.32)',
        borderRadius: 8,
    },
    input: {
        flex: 1,
        fontFamily: 'Work Sans',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        color: 'rgba(255, 255, 255, 0.55)',
    },
});

export default InputField;