import {View} from 'react-native';
import {ProgressDotsProps} from "@/app/types/types";

const ProgressDots = ({
  totalDots = 3,
  activeDot = 0,
}: ProgressDotsProps) => {
  return (
    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          style={{
            width: index === activeDot ? 10 : 8,
            height: index === activeDot ? 10 : 8,
            backgroundColor: index === activeDot ? 'rgb(29,161,242)' : 'rgb(213,175,146)',
            borderRadius: 50,
          }}
        />
      ))}
    </View>
  );
};

export default ProgressDots;