import { View, Text, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="bg-black flex-1 items-center justify-center gap-3">
      <Image
        source={require('../../assets/images/Waris.jpg')} 
        className="w-36 h-36 rounded-full"
      />
      <Text className="text-white text-3xl font-pblack">Waris</Text>
      <Text className="text-white text-3xl font-pblack">Full Stack Developer</Text>
      <Text className="text-white text-sm font-pblack">A passionate full stack developer in Level X</Text>
    </View>
  )
}

export default Home