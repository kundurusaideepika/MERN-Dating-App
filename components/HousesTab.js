import React, { useContext } from 'react';
import { View, Text, StyleSheet, SectionList, Image } from 'react-native';

import { store } from './store';
import { signs, signsIcons, planetsIcons } from './astrology';
// Astrology tab in the user profile screen
const AstroTab = () => {
  const { state } = useContext(store);

  let houses = Object.keys(state.themeAstral.houses).map(function (key) {
    return {
      title: 'House ' + key.slice(1),
      data: [state.themeAstral.houses[key]],
    };
  });

  let planetes = Object.keys(state.themeAstral.planetes).map(function (key) {
    return { title: key, data: [state.themeAstral.planetes[key]] };
  });
  const data = Array.prototype.concat(houses, planetes);
  console.log('\n\naaaaaaaaaaaaaaaaaaa: ', data);

  // console.log('\n\n\nAstro Tab :______________\n', state.themeAstral, '\n\n\n');
  return (
    <View style={styles.container}>
      {/* <View style={styles.divider} />
      <View style={styles.divider} /> */}
      <Text style={styles.tabTitle}> Maisons</Text>
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <View style={styles.item}>
              <Image source={signsIcons[item]} style={styles.icons} />
              <Text style={styles.contentText}>{signs[item]}</Text>
            </View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ullamcorper purus sed risus condimentum pulvinar. Sed sit amet
              urna id lacus eleifend tristique. Sed tristique placerat rhoncus.
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <View style={styles.divider} />
            <Text style={styles.title}>{title}:</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 5,
    alignSelf: 'center',
  },
  icons: {
    marginLeft: 5,
    padding: 10,
    height: 40,
    width: 45,
    resizeMode: 'contain',
  },
  planetIcons: {
    marginVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    marginVertical: 5,
  },
  divider: {
    marginTop: 10,
    borderBottomColor: '#ccffff',
    borderBottomWidth: 1,
  },
  contentText: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    marginTop: 3,
    marginHorizontal: 5,
    fontSize: 15,
  },
  item: {
    flexDirection: 'row',
  },
});

export default AstroTab;