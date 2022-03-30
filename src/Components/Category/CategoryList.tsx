import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import COLORS from '../../Constants/COLORS';
import {heightPercentage, widthPercentage} from '../../Helpers/helpers';
import {getAllCategories} from '../../Redux/actions/categoryActions';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import CategoryItem from './CategoryItem';
import Loading from '../Loading/Loading';

type Props = {
  showCategoryItems(params: any): void;
};

const CategoryList = ({showCategoryItems}: Props) => {
  const {categories, isFetchingCategories} = useAppSelector(
    state => state.global,
  );
  const carouselRef = useRef(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const [activeSlide, setActiveSlide] = useState(0);
  const {width} = Dimensions.get('window');
  const nextSlide = (index: number) => setActiveSlide(index);
  const dispatch = useAppDispatch();
  useEffect(() => {
    categories.length < 1 && dispatch(getAllCategories());
    if (categories.length > 1) {
      Animated.timing(opacity, {
        useNativeDriver: true,
        duration: 500,
        toValue: 1,
        easing: Easing.ease,
      }).start();
      Animated.timing(scale, {
        useNativeDriver: true,
        duration: 500,
        toValue: 1,
        easing: Easing.bounce,
      }).start();
    }
  }, [isFetchingCategories]);
  const renderItem = ({item, index}: any) => {
    return (
      <CategoryItem
        key={index}
        item={item}
        showCategoryItems={() => showCategoryItems(item)}
      />
    );
  };
  return isFetchingCategories ? (
    <Loading />
  ) : (
    <Animated.View style={{flex: 1, opacity, transform: [{scale}]}}>
      <Carousel
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={widthPercentage(75)}
        data={categories}
        extraData={categories}
        renderItem={renderItem}
        onSnapToItem={nextSlide}
      />
      <Pagination
        dotsLength={categories.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.inactiveDots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Animated.View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 180,
    height: 225,
    margin: 5,
    overflow: 'hidden',
  },
  inactiveDots: {
    backgroundColor: COLORS.primary,
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
  },
  renderItem: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    letterSpacing: 1,
    fontWeight: 'bold',
    fontSize: 22,
    borderRadius: 10,
    color: '#000',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
    padding: 2,
  },
  imgBackground: {
    width: 250,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginTop: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    backgroundColor: COLORS.secondary,
    marginTop: 20,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  animationItem: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
});
