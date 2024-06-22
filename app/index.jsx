import { StatusBar } from "expo-status-bar"
import { Text,Image, View, ScrollView} from "react-native"
import {Link, router} from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function app() {
  

  return(
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{height:'110'}}> 
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          />
          <Image 
          source={images.robot}
          className="max-w-[380px] w-full  h-[300px]"
          resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with
              <Text className="text-[#20AAB8]">RtmaX</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with RtmaX
          </Text>
          <CustomButton title="Continue with email" containerStyles="w-full mt-7" handlePress={()=> router.push('/sign-in')} />
        </View>
        <Link href='profile' >Go to home </Link>

      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
  )
}
