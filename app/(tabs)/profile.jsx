import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../constants";
import { InfoBox } from "../../components";
import { setUser, setIsLogged } from "../../store/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.auth.jwt);
  const userData = useSelector((state) => state.auth.user);

  const user = {
    name: userData.username,
    id: userData.id,
    email: userData.email,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const logout = async () => {
    dispatch(setUser(null));
    dispatch(setIsLogged(false));
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <View className="w-full flex justify-center items-center mt-10 px-4">
        <TouchableOpacity
          onPress={logout}
          className="flex w-full items-end mb-10"
        >
          <Image
            source={icons.logout}
            resizeMode="contain"
            className="w-8 h-8"
          />
        </TouchableOpacity>

        <View className="w-80 h-80 border-2 border-gray-300 rounded-full overflow-hidden mb-4">
          <Image
            source={{ uri: user?.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <InfoBox
          title={user?.name}
          containerStyles="mt-5"
          titleStyles="text-xl font-bold"
        />

        <Text className="text-gray-500 mt-2">{user?.email}</Text>

        <View className="w-full mt-10 px-4">
          <TouchableOpacity className="bg-lime-600 py-3 rounded-lg mb-4">
            <Text className="text-white text-center font-semibold">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-lime-600 py-3 rounded-lg mb-4">
            <Text className="text-white text-center font-semibold">Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-lime-600 py-3 rounded-lg">
            <Text className="text-white text-center font-semibold">Change Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
