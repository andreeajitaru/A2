import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Icons, Themes } from "../../assets/Themes";
import { palette } from "../../assets/Themes/palette";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.navigationButton}>
        <Image style={styles.buttonImage} source={Icons.discover.light} />
        <Text style={styles.buttonText}>Discover</Text>
      </View>
      <View style={styles.navigationButton}>
        <Image style={styles.buttonImage} source={Icons.heart.light} />
        <Text style={styles.buttonText}>Matches</Text>
      </View>
      <View style={styles.navigationButton}>
        <Image style={styles.buttonImage} source={Icons.messages.light} />
        <Text style={styles.buttonText}>DMs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: Themes.light.navigation,
    justifyContent: "space-between",
  },
  navigationButton: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  buttonImage: {
    height: windowWidth * 0.075,
    width: windowWidth * 0.075,
  },
  buttonText: {
    fontSize: 16,
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
  },
});

export default Footer;
