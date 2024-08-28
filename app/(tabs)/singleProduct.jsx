import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductPage = () => {
  // Inline product data
  const product = {
    image: 'https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg', // Replace with a valid image URL
    price: '569.99',
    name: 'Dyson Supersonic™',
    color: 'Blue/Copper',
    colorOptions: ['#192BC2', '#AC4363', '#E65D6C', '#C97E5C'],
    selectedColor: '#192BC2',
    description: 'The Dyson Supersonic™ hair dryer is engineered for fast drying and precision styling while protecting hair from extreme heat damage.',
    features: ['Supersonic hairdryer', 'Flyaway attachment'],
  };

  const handleBuyNowPress = () => {
    // Handle buy now action
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 8 }}>
        <View className="my-6">
          <Image
            source={{ uri: product.image }}
            className="w-full h-64"
            resizeMode="contain"
          />
          <View className="mt-4">
            <Text className="text-2xl font-bold text-black-100">${product.price}</Text>
            <Text className="text-xl font-semibold text-gray-800 mt-2">{product.name}</Text>
            <Text className="text-sm text-gray-500 mt-1">Color: {product.color}</Text>

            <View className="flex-row mt-3 space-x-3">
              {product.colorOptions.map((color, index) => (
                <View
                  key={index}
                  className={`w-8 h-8 rounded-full border ${color === product.selectedColor ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </View>

            <Text className="text-sm text-gray-600 mt-4">
              {product.description}
            </Text>

            <View className="mt-6">
              {product.features.map((feature, index) => (
                <Text key={index} className="text-sm text-gray-600">
                  • {feature}
                </Text>
              ))}
            </View>
          </View>

          <TouchableOpacity
            className="bg-blue-600 mt-6 py-4 rounded-full flex-row justify-center items-center"
            onPress={handleBuyNowPress}
          >
            <Text className="text-white font-semibold">Buy now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;
