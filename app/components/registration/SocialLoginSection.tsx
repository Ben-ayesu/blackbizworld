import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import { styles } from '../../styles/registration.styles';

const socialIcons = [
  { name: "facebook" as const, component: FontAwesome, color: "#3b5998" },
  { name: "google" as const, component: FontAwesome, color: "#db4a39" },
  { name: "apple" as const, component: FontAwesome, color: "white" },
];

export const SocialLoginSection = () => {
  return (
    <View style={styles.socialContainer}>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or sign up with</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialIconsContainer}>
        {socialIcons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <TouchableOpacity key={index} style={styles.iconButton}>
              <IconComponent name={icon.name} size={35} color={icon.color} />
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.helpText}>Need more info? Get help here</Text>
    </View>
  );
};
