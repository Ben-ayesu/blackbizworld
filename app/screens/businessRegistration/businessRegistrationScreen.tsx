import {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useRouter} from "expo-router";

const BusinessRegistrationScreen = () => {
    const [businessName, setBusinessName] = useState("");
    const [employeeCount] = useState("");
    const [quebecTaxCode, setQuebecTaxCode] = useState("");
    const [companyRole, setCompanyRole] = useState(null);
    const [province, setProvince] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const router = useRouter();

    const handleRegister = () => {
        // Handle registration logic here
        console.log("Registering with:", {
            businessName,
            businessAddress: employeeCount,
            quebecTaxCode,
            employeeCount,
        });
        router.push("/home/home");
    };

    const employeeCountData = [
        {label: '1-10', value: '1-10'},
        {label: '11-100', value: '11-100'},
        {label: '101-1000', value: '101-1000'},
        // ... more roles
    ];

    const provinceData = [
        {label: 'Quebec', value: 'quebec'},
        {label: 'Ontario', value: 'ontario'},
        {label: 'Alberta', value: 'alberta'},
        // ... more provinces
    ];

    return (
        <LinearGradient
            colors={["rgba(32, 32, 32, 0.9)", "rgba(18, 18, 18, 0.9)"]}
            style={styles.container}
        >
            <View style={styles.formContainer}>
                <Text style={styles.title}>Register your business</Text>
                <Text style={styles.subtitle}>
                    Fill your information below or register with your business number
                </Text>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enter the name of your business</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Business Name"
                        placeholderTextColor="#777"
                        value={businessName}
                        onChangeText={setBusinessName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Enter current employees count?
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && {borderColor: '#A05620'}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={employeeCountData}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Employee Count' : '...'}
                        searchPlaceholder="Search..."
                        value={companyRole}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setCompanyRole(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? '#A05620' : 'white'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enter your business address</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && {borderColor: '#A05620'}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={provinceData}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Province' : '...'}
                        searchPlaceholder="Search..."
                        value={province}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setProvince(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? '#A05620' : 'white'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enter your Quebec Tax Code Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tax Code"
                        placeholderTextColor="#777"
                        value={quebecTaxCode}
                        onChangeText={setQuebecTaxCode}
                    />
                </View>
            </View>
            {/* Buttons */}
            <View style={styles.bottomContainer}>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register your business</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.helpButton}>
                    <Text style={styles.helpButtonText}>
                        Need more info. Get help here
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        padding: 20,
    },
    formContainer: {
        justifyContent: "center",
        flex: 1,
    },
    input: {
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 5,
        padding: 10,
        ...(Platform.OS === "android"
            ? {elevation: 2} // Add shadow on Android
            : {
                shadowColor: "#000", // Add shadow on iOS
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 2,
            }),
    },
    button: {
        backgroundColor: "#492306",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    helpButton: {
        alignItems: "center",
    },
    helpButtonText: {
        color: "#ccc",
        fontSize: 14,
        textDecorationLine: "underline",
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#333',
        color: 'white',
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'white'
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 10,
        alignSelf: "center",
    },
    subtitle: {
        color: "#ccc",
        fontSize: 16,
        marginBottom: 30,
        alignSelf: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: "#ccc",
        fontSize: 14,
        marginBottom: 5,
    },
    bottomContainer: {
        justifyContent: "flex-end",
        marginBottom: 15
    },
});

export default BusinessRegistrationScreen;