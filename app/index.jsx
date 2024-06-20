import { StatusBar } from "expo-status-bar"
import { Text, View} from "react-native"
import {Link} from 'expo-router'

export default function app() {
  

  return(
    <View className="flex-1 items-center justify-center gap-3 bg-black text-white">
      <Text  className="text-6xl text-white font-pblack">Rt maX</Text>
      <Link href="/home" className='text-3xl text-white font-pthin'>Go to home</Link>
      <StatusBar style="auto"/>
    </View>
  )
}
