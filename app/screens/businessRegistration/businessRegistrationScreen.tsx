import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BusinessRegistrationScreen = () => {
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [quebecTaxCode, setQuebecTaxCode] = useState('');
    const [employeeCount, setEmployeeCount] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Registering with:', { businessName, businessAddress, quebecTaxCode, employeeCount });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register your business</Text>
            <Text style={styles.subtitle}>Fill your information below or register with your business number</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter the name of your business</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={businessName}
                    onChangeText={setBusinessName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter your business address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={businessAddress}
                    onChangeText={setBusinessAddress}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter your Quebec Tax Code Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={quebecTaxCode}
                    onChangeText={setQuebecTaxCode}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>How many current employees do you have?</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={employeeCount}
                    onChangeText={setEmployeeCount}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register your business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpButtonText}>Need more info. Get help here</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    time: {
        color: '#fff',
        fontSize: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
    },
    subtitle: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        backgroundColor: '#A85C2F',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    helpButton: {
        alignItems: 'center',
    },
    helpButtonText: {
        color: '#ccc',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default BusinessRegistrationScreen;