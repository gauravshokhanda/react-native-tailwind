import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  Image,
  RefreshControl,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { images } from "../../constants";
import { EmptyState, SearchInput } from "../../components";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import Carousel from "../../components/Carousel";
import ProductList from "./product";

const Home = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [refreshing, setRefreshing] = useState(false);
  const [productCategories, setProductCategories] = useState([]);

  const handleCategoryPress = (categoryId) => {
    router.push(`/product?categoryId=${categoryId}`);
  };

  const handleProductPress = (productId) => {
    router.push(`/productList/${productId}`);
    router.push(`/singleProduct`);
  };

  const onRefresh = async () => {
    // Add your refresh logic here if needed
  };

  const carouselItems = [
    {
      title: "First Slide",
      image:
        "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
    },
    {
      title: "Second Slide",
      image:
        "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
    },
    {
      title: "Third Slide",
      image:
        "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
    },
  ];

  const productCategoriesData = [
    {
      id: 26,
      name: "Cabin Rentals",
      slug: "cabin-rentals",
      image: {
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
      },
    },
    {
      id: 19,
      name: "Junk Hauling Service",
      slug: "junk-hauling-service",
      image: {
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
      },
    },
    {
      id: 17,
      name: "One Time Pick-Ups",
      slug: "one-time-pick-ups",
      image: {
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
      },
    },
    {
      id: 20,
      name: "Trailer Rental Service",
      slug: "trailer-rental-service",
      image: {
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
      },
    },
  ];

  const popularProductsData = [
    {
      id: 1,
      name: "Beats Headphone White",
      price: "$349.95",
      sales: "450 sales",
      rating: 4.5,
      image: "https://example.com/beats.jpg",
    },
    {
      id: 2,
      name: "Powerbeats Wireless Earbuds White",
      price: "$179.12",
      sales: "450 sales",
      rating: 4.5,
      image: "https://example.com/powerbeats.jpg",
    },
    {
      id: 3,
      name: "Airpods Gen 2",
      price: "$199.00",
      sales: "302 sales",
      rating: 4.3,
      image: "https://example.com/airpods_gen2.jpg",
    },
    {
      id: 4,
      name: "Airpods Pro",
      price: "$270.78",
      sales: "601 sales",
      rating: 4.6,
      image: "https://example.com/airpods_pro.jpg",
    },
    // Add more products here
  ];


  return (
    <SafeAreaView className="bg-slate-100 flex-1">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 6 }}>
        <View className="my-6 px-4 space-y-6">
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-sm text-gray-500">Welcome Back</Text>
              <Text className="text-secondary-200 font-semibold">
                J and M TRASH -B- GONE
              </Text>
            </View>
            <Image
              source={images.logo}
              className="w-14 h-14"
              resizeMode="contain"
            />
          </View>

          <SearchInput />
          <Carousel images={carouselItems} />
          <View>
            <Text className="text-sm font-semibold text-black-100 mb-3">
              Product Categories
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-2">
                {productCategoriesData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden w-24 h-24 items-center justify-center"
                    onPress={() => handleCategoryPress(item.id)}
                  >
                    <Image
                      source={{ uri: item.image.src }}
                      className="w-12 h-12"
                      resizeMode="contain"
                    />
                    <Text
                      className="text-xs mt-2 "
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View> 
           <Text className="text-sm font-semibold text-black-100 mb-3">
              Popluar Product
            </Text>
            <View className="flex-wrap flex-row justify-between">
            {popularProductsData.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden w-[48%] mb-4"
                onPress={() => handleProductPress(item.id)}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-32"
                  resizeMode="cover"
                />
                <View className="p-3">
                  <Text className="text-xs font-semibold text-black-100 mb-1" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text className="text-xs text-primary-500 font-bold">{item.price}</Text>
                  <Text className="text-xs text-gray-500">{item.sales}</Text>
                  <View className="flex-row items-center">
                    <Text className="text-xs text-yellow-500">⭐ {item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
