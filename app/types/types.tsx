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

// Define the UserCredentials type if it doesn't exist
export type UserCredentials = {
  email: string;
  password: string;
};
