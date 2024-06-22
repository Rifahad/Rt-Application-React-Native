import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="space-y-2">
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View className={`w-full h-16 px-4 bg-black-100 border-2 border-black-400 rounded-2xl focus:border-[#20AAB8] flex-row items-center ${otherStyles}`}>
        <TextInput
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={()=>{
            setShowPassword(!showPassword)
          }} >
            <Image className="first:w-6 h-6" resizeMode="contain" source={!showPassword ? icons.eye : icons.eyeHide} />
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
};

export default FormField;
