import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image ,ActivityIndicator , StyleSheet } from "react-native";
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
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "testd",
    password: "vishal@321",
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      padding: 20,
      borderRadius: 10,
    },
    loadingText: {
      marginTop: 10,
      color: '#ffffff',
      fontSize: 16,
    },
  });
  const submit = async () => {
    setLoading(true); // Start loader

    try {
      const response = await axios.post(`https://iamdeveloper.in/tina_project/wp-json/jwt-auth/v1/token`, {
        username: form.email,
        password: form.password,
      });

      console.log(response, "response");

      if (response.data.token) {
        Alert.alert("Success", "User signed in successfully");
        setSubmitting(true);
        dispatch(setIsLogged(true));
        dispatch(setJwt(response.data.token));
        dispatch(setUser(response.data));
        router.replace("/home");
      }
    } catch (error) {
      Alert.alert("Error", "Sign in failed. Please try again.");
    } finally {
      setLoading(false); // Stop loader
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
          <View style={styles.container}>
            {loading && (
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Signing In...</Text>
              </View>
            )}
          </View>
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
