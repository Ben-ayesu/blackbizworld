export interface SocialIconProps {
    imageUrl: string;
    alt: string;
}

export interface InputFieldProps {
    label: string;
    value?: string;
    type?: string;
    onChange?: (text: string) => void;
}

