import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import axios from 'axios';
import API_URL from "../../constants/api";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogged, setUser, setJwt } from '../../store/authSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.auth.jwt);
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "admin",
    password: "admin@321",
  });

  const submit = async () => {
    try {
      const response = await axios.post(`${API_URL}/v1/token`, {
        username: form.email,
        password: form.password,
      });

      if (response.data.jwt_token) {
        Alert.alert("Success", "User signed in successfully");
        setSubmitting(true);
        dispatch(setIsLogged(true));
        dispatch(setJwt(response.data.jwt_token));

        // Make additional request to WordPress API
        const wordpressConfig = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://iamdeveloper.in/tina_project/wp-json/wp/v2/users/me',
          headers: { 
            'Authorization': `Bearer ${response.data.jwt_token}`, 
            'Content-Type': 'multipart/form-data'
          }
        };

        try {
          const wpResponse = await axios.request(wordpressConfig);
          console.log(JSON.stringify(wpResponse.data));
          // Optionally, dispatch user data to your store or handle it as needed
          dispatch(setUser(wpResponse.data));
        } catch (wpError) {
          console.error("WordPress API request failed", wpError);
        }

        router.replace("/home");
      }
    } catch (error) {
      Alert.alert("Error", "Sign in failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-lime-600 h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-l font-semibold text-white mt-10 font-psemibold">
            Log in to J and M TRASH -B- GONE
          </Text>

          <FormField
            title="Emails"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
