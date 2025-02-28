import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function CustomSkeleton({ width = '100%', height = 20, radius = 10, loading }) {
  const [fadeAnim] = useState(new Animated.Value(0.2)); // Initial opacity is 0 (invisible)

// Loop the fade-in and fade-out animation
useEffect(() => {
   if(loading){
   Animated.loop(
     Animated.sequence([
       Animated.timing(fadeAnim, {
         toValue: 1, // Fade in
         duration: 600, // Fade-in duration
         useNativeDriver: true,
       }),
       Animated.timing(fadeAnim, {
         toValue: 0.7, // Fade in
         duration: 600, // Fade-in duration
         useNativeDriver: true,
       }),
       Animated.timing(fadeAnim, {
         toValue: 0.5, // Fade in
         duration: 600, // Fade-in duration
         useNativeDriver: true,
       }),
       Animated.timing(fadeAnim, {
         toValue: 0.3, // Fade in
         duration: 600, // Fade-in duration
         useNativeDriver: true,
       }),
       Animated.timing(fadeAnim, {
         toValue: 0.2, // Fade out
         duration: 600, // Fade-out duration
         useNativeDriver: true,
       }),
     ])
   ).start(); // Start the animation loop
   }else {
      // Fade Out
      Animated.timing(fadeAnim, {
         toValue: 0,
         duration: 600,
         useNativeDriver: true,
       }).start();
   }
 }, [fadeAnim, loading]);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width: width,
          height: height,
          borderRadius: radius,
          opacity: fadeAnim, // Control opacity with fadeAnim
        },
      ]}
    >
      {/* This can be the placeholder (you can customize the skeleton look with a background color) */}
      <View style={styles.skeletonBackground} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#E0E0E0', // Light grey for the skeleton loader
    overflow: 'hidden',
    marginBottom: 10,
  },
  skeletonBackground: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Darker grey for the skeleton's base
  },
});
