import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { route ,useLocalSearchParams } from "expo-router"; // Adjust import if needed
import { SafeAreaView } from "react-native-safe-area-context";
import { consumerKey, consumerSecret } from "../../constants/api";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product,setProduct] = useState([])
  
  const params = useLocalSearchParams();
  console.log(params.categoryId,"params")

  useEffect(() => {
    const fetchProductByCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
         'https://iamdeveloper.in/tina_project/wp-json/wc/v3/products?category=26?customer=1&consumer_key=ck_2a1b3a87fdd8fe840a8a18f6305cadab41c3e7c2&consumer_secret=cs_61eab0d7f6a12ab6f01208bd8c4c792302888efe'
        );
        setProduct(response.data);
        console.log(response.data,"api data")
      } catch (error) {
        console.error("Failed to fetch product categories:", error);
      }
      finally {
        setLoading(false); 
      }
    };

    fetchProductByCategories();
  }, []);



  const renderProduct = ({ item }) => (
    <TouchableOpacity className="w-[48%] h-40 bg-white shadow-sm rounded-md mb-4 p-4">
      <Image
        source={{ uri: item.images[0]?.src || "https://via.placeholder.com/150" }}
        className="w-full h-24 mb-2"
        resizeMode="contain"
      />
      <Text className="text-lg font-psemibold text-black-100 text-center">
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-slate-100">
    <FlatList
      data={product}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
      contentContainerStyle={{ padding: 2 }}
    />
    </SafeAreaView>
  );
};

export default ProductList;
