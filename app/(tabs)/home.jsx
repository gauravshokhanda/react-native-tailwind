import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View ,TouchableOpacity} from "react-native";
import { images } from "../../constants"; // Adjust this import as needed
import { EmptyState, SearchInput } from "../../components";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import axios from 'axios';

const Home = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [refreshing, setRefreshing] = useState(false);
  const [productCategorie,setProductCategories]= useState([])

  const handleCategoryPress = (categoryId) => {
    router.push(`/product?categoryId=${categoryId}`);
   
  };

  console.log(jwt, "jwt");

  const onRefresh = async () => {
    // Add your refresh logic here if needed
    // setRefreshing(true);
    // await refetch();
    // setRefreshing(false);
  };

  // The provided product categories data
  const productCategories = [
    {
      id: 26,
      name: "Cabin Rentals",
      slug: "cabin-rentals",
      parent: 18,
      description: "",
      display: "subcategories",
      image: {
        id: 968,
        date_created: "2024-08-16T03:45:49",
        date_created_gmt: "2024-08-16T03:45:49",
        date_modified: "2024-08-16T03:50:35",
        date_modified_gmt: "2024-08-16T03:50:35",
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
        name: "Bear Img",
        alt: "",
      },
      menu_order: 4,
      count: 5,
    },
    {
      id: 19,
      name: "Junk Hauling Service",
      slug: "junk-hauling-service",
      parent: 0,
      description: "",
      display: "products",
      image: {
        id: 968,
        date_created: "2024-08-16T03:45:49",
        date_created_gmt: "2024-08-16T03:45:49",
        date_modified: "2024-08-16T03:50:35",
        date_modified_gmt: "2024-08-16T03:50:35",
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
        name: "Bear Img",
        alt: "",
      },
      menu_order: 5,
      count: 2,
    },
    {
      id: 17,
      name: "One Time Pick-Ups",
      slug: "one-time-pick-ups",
      parent: 0,
      description: "",
      display: "products",
      image: {
        id: 968,
        date_created: "2024-08-16T03:45:49",
        date_created_gmt: "2024-08-16T03:45:49",
        date_modified: "2024-08-16T03:50:35",
        date_modified_gmt: "2024-08-16T03:50:35",
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
        name: "Bear Img",
        alt: "",
      },
      menu_order: 2,
      count: 4,
    },
    {
      id: 20,
      name: "Trailer Rental Service",
      slug: "trailer-rental-service",
      parent: 0,
      description: "",
      display: "products",
      image: {
        id: 968,
        date_created: "2024-08-16T03:45:49",
        date_created_gmt: "2024-08-16T03:45:49",
        date_modified: "2024-08-16T03:50:35",
        date_modified_gmt: "2024-08-16T03:50:35",
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
        name: "Bear Img",
        alt: "",
      },
      menu_order: 6,
      count: 4,
    },
    {
      id: 16,
      name: "Uncategorized",
      slug: "uncategorized",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 1,
      count: 0,
    },
    {
      id: 18,
      name: "Weekly Removal Service",
      slug: "weekly-removal-service",
      parent: 0,
      description: "",
      display: "products",
      image: {
        id: 968,
        date_created: "2024-08-16T03:45:49",
        date_created_gmt: "2024-08-16T03:45:49",
        date_modified: "2024-08-16T03:50:35",
        date_modified_gmt: "2024-08-16T03:50:35",
        src: "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
        name: "Bear Img",
        alt: "",
      },
      menu_order: 3,
      count: 13,
    },
  ];

  return (
    <SafeAreaView className="bg-slate-100">
      <FlatList
        data={productCategories}
        key={"2-columns"}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }} // Space between columns
        renderItem={({ item }) => (
         
          <View className="w-[48%] h-40 bg-lime-200 shadow-sm rounded-md mb-4 p-4 flex justify-center items-center">
             <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
            {item.image ? (
              <Image
                source={{ uri: item.image.src }}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
            ) : (
              <Text className="text-lg font-psemibold text-black-100 text-center">
                No Image Available
              </Text>
            )}
            <Text className="text-lg font-psemibold text-black-100 text-center">
              {item.name}
            </Text>
            </TouchableOpacity>
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
