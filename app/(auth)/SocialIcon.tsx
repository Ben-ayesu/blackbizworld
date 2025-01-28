import { View, Image, StyleSheet } from 'react-native';
import type { SocialIconProps } from './types';

export const SocialIcon: React.FC<SocialIconProps> = ({ imageUrl, alt }) => (
    <View style={styles.iconContainer}>
        <Image
            resizeMode="contain"
            source={{ uri: imageUrl }}
            style={styles.icon}
            accessibilityLabel={alt}
        />
    </View>
);

const styles = StyleSheet.create({
    iconContainer: {
        borderRadius: 28,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: "solid",
        borderWidth: 1,
        display: "flex",
        minHeight: 48,
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        padding: 12,
    },
    icon: {
        width: 24,
        aspectRatio: 1,
    }
});