import React from 'react';
import { SafeAreaView, Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
      <SafeAreaView>
        <Text style={styles.title}>나만의 꿀팁</Text>
        <View style={styles.container}>
        <Image
          style={{
            resizeMode: "stretch",
            height: 235,
            width: 360,
            borderRadius: 10
          }}
          source={{uri:"https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png"}}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          alignItems: 'center',
          padding: 15,
          paddingTop: 30 
        }}>
        <View style={styles.btn}>
      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.btnList}>생활</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.btnList}>재테크</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3}>
        <Text style={styles.btnList}>반려견</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn4}>
        <Text style={styles.btnList}>찜뽕</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn5}>
        <Text style={styles.btnList}>스터디</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn6}>
        <Text style={styles.btnList}>수면</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      <View style={styles.contents2}>
      <Image
          style={{
            resizeMode: "stretch",
            height: 120,
            width: 135,
            borderRadius: 10,
            margin: 10,
            marginLeft: 0
          }}
          source={{uri:"https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png"}}
        />
        <View style={styles.contents3}>
        <Text style={styles.title2}>먹다 남은 피자를 촉촉하게!</Text>
        <Text ellipsizeMode='tail' numberOfLines={3} style={{width:210}}>
        꿀팁 설명: 먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
        </Text>
        <Text style={styles.date}>2020.09.09</Text>
      </View>
      </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    padding: 20
  },
  btn: {
    display: "flex",
    flexDirection: "row"
  },
  btn1: {
    backgroundColor: "#fdd835",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },
  btn2: {
    backgroundColor: "#ff6e40",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginLeft: 15
  },
  btn3: {
    backgroundColor: "#827717",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginLeft: 15
  },
  btn4: {
    backgroundColor: "#b388ff",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginLeft: 15
  },
  btn5: {
    backgroundColor: "#536dfe",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginLeft: 15
  },
  btn6: {
    backgroundColor: "#69f0ae",
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15
  },
  btnList: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    borderWidth: 2,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 1000,
    marginLeft: 10,
    marginRight: 10
  },
  contents2: {
    display: "flex",
    flexDirection: "row"
  },
  title2: {
    marginTop: 11,
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 15,
  },
  date: {
    color: "gray",
    fontSize: 13,
    marginTop: 10
  } 
});