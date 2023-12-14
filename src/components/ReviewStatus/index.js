import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Animated} from 'react-native';
import {styles} from './styles';

const ReviewStatus = ({data}) => {
  const {overallRating, ratingPercentage, totalReviews} = data;

  const starPercentages = Object.values(ratingPercentage).map(count => {
    const c = (count / totalReviews) % 100;
    // console.log(count);
  });

  const getStarColor = star => {
    if (star === 1) return '#ffb900';
    else if (star === 2) return '#ffc911';
    else if (star === 3) return '#ffd233';
    else if (star === 4) return '#ff6347';
    else return '#ff0000';
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.overallRating}>{overallRating} out of 5</Text> */}
      <Text style={styles.totalReviews}>{totalReviews} reviews</Text>
      <View style={styles.starRatingContainer}>
        {Object.values(ratingPercentage).map((percentage, index) => (
          <View  key={index} style={styles.ratingContainer}>
            <Text style={styles.ratingInfoText}>{5 - index} Star</Text>
            <View style={styles.ratingBar}>
              <Animated.View
                key={index}
                style={[
                  styles.starRatingBar,
                  {width: `${percentage}%`},
                  {backgroundColor: getStarColor(index + 1)},
                ]}
                animate="fadeIn"
                duration={500}
                delay={index * 100}
              />
            </View>
            <Text style={styles.ratingInfoText}>{percentage}%</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.seeMoreButton}
        onPress={() => {
          console.log('Navigate to reviews page');
        }}>
        <Text style={styles.ratingInfoText}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewStatus;
