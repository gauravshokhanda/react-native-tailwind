import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
import { EmptyState, SearchInput } from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
  const jwt = useSelector((state) => state.auth.jwt);

  const [refreshing, setRefreshing] = useState(false);

  console.log(jwt, "jwt");

  const onRefresh = async () => {
    // Add your refresh logic here if needed
    // setRefreshing(true);
    // await refetch();
    // setRefreshing(false);
  };

  // Sample data for product categories
  const productCategories = [
    {
      id: "1",
      name: "Weekly Removal Service",
    },
    {
      id: "2",
      name: "One Time Pick-Ups",
    },
    {
      id: "3",
      name: "Junk Hauling Service",
    },
    {
      id: "4",
      name: "Trailer Rental Service",
    },
  ];

  return (
    <SafeAreaView className="bg-slate-100">
      <FlatList
        data={productCategories}
        key={"2-columns"} // Static key to force a consistent render
        keyExtractor={(item) => item.id}
        numColumns={2} // Set number of columns to 2
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }} // Space between columns
        renderItem={({ item }) => (
          <View className="w-[48%] h-40 bg-lime-200 shadow-sm rounded-md mb-4 p-4 flex justify-center items-center">
            <Text className="text-lg font-psemibold text-black-100 text-center">
              {item.name}
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-500">
                  Welcome Back
                </Text>
                <Text className="text-m font-psemibold text-white">
                  J and M TRASH -B- GONE
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logo}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-black-100 mb-3">
                Product Categories
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Products Found" />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
