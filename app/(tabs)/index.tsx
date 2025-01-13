import { Text, View, SafeAreaView, Image, Alert, Platform,StyleSheet, StatusBar } from "react-native";

export default function Index() {

  const handlePress = () => Alert.prompt("AJJ!!", "Varför klickade du där för!!!???", text => console.log(text))

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "dodgerblue",

      }}
    >
      <Text onPress={handlePress}>Edit app/index.tsx to edit this screen. Varför syns dsa tabs? </Text>
      <Image blurRadius= {5} source= {{
        width: 200,
        height: 300,
        uri: "https://www.max.se/contentassets/4b039290e9b74f14ac5d43cefdd531e3/side_sweet_potato_fries.png?width=1160&sharpen=5&sigma=1,4&threshold=0" }} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
flex:1,

}
})