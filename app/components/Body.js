import { View, StyleSheet, Image, Text } from "react-native";
import Profiles from "../../assets/Profiles";
import { Icons, Themes } from "../../assets/Themes";

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureComponent}>
        <Text style={styles.profilePicCaption}>
          {Profiles.landay.imageCaption}
        </Text>
        <Image source={Profiles.landay.image} style={styles.image} />
      </View>
      <View style={styles.profilePictureComponent}>
        <Text style={styles.profilePicCaption}>
          {Profiles.landay.audioCaption}
        </Text>
        <View style={styles.audioIcons}>
          <Image style={styles.player} source={Icons.player.light} />
          <Image style={styles.audioWave} source={Icons.audioWave.light} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  profilePictureComponent: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: 300, // feel free to adjust this!
    aspectRatio: 1,
  },
  profilePicCaption: {
    fontFamily: "Sydney-Bold",
    margin: 20,
  },
  audioIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    width: 50,
    height: 50,
  },
  audioWave: {
    flex: 1,
  },
});

export default Body;
