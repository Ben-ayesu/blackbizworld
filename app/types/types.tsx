import { ReactNode } from "react";

export interface SocialIconProps {
  imageUrl: string;
  alt: string;
}

export interface InputFieldProps {
  label: string;
  value?: string;
  type?: string;
  onChange?: (text: string) => void;
  icon?: JSX.Element;
}

export interface ProgressDotsProps {
  totalDots?: number;
  activeDot?: number;
}

export interface SignupCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  currentStep: number;
  onPress: () => void;
}

export interface SelectionCardProps {
  icon: ReactNode;
  label: string;
  onSelect: () => void;
  isSelected: boolean;
}

export interface OnboardingScreenProps {
  step: number;
  showLogo?: boolean;
  imageSource: any;
  title: string;
  subtitle: string;
  buttonText: string;
}

export type UserCredentials = {
  email: string;
  password: string;
};

export interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  location: string;
  description?: string;
  rating?: number;
  reviews?: number;
  imageUrl?: string;
  features: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Promotion {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
  isNew?: boolean;
  isHot?: boolean;
}
