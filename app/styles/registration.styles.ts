import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    marginVertical: 4,
  },
  socialContainer: {
    width: "100%",
    maxWidth: 329,
    marginTop: 30,
    alignItems: "center",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: 231,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  dividerText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 11,
    paddingHorizontal: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 32,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: 8,
  },
  helpText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    marginTop: 32,
  },
  actionContainer: {
    width: "100%",
    maxWidth: 331,
    marginTop: 32,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: "rgba(93, 45, 9, 1)",
    padding: 15,
    alignItems: "center",
  },
  registerButtonText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
  },
  loginText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    marginTop: 16,
  },
  formContainer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 38,
  },
  subtitle: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 23,
  },
  // ... rest of your styles
});
