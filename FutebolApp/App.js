import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import data from './time.json';

export default function App() {
  const handleTeamPress = (team) => {
    alert(`Time: ${team.nome}\nEstádio: ${team.estadio}\nInfo: ${team.info}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Futebol Brasileiro</Text>
      <View style={styles.buttonsContainer}>
        {data.map((team) => (
          <TouchableOpacity
            key={team.id}
            style={styles.button}
            onPress={() => handleTeamPress(team)}
          >
            <DynamicImage team={team} style={styles.logo} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const DynamicImage = ({ team, style }) => {
  let imageName = team.nome.split('.')[0];
  let image = null;

  switch (imageName) {
    case 'Flamengo':
      image = require('./assets/Flamengo.png');
      break;
    case 'Vasco':
      image = require('./assets/Vasco.png');
      break;
    case 'Palmeiras':
      image = require('./assets/Palmeiras.png');
      break;
    case 'Corinthians':
      image = require('./assets/Corinthians.png');
      break;
    case 'Cruzeiro':
      image = require('./assets/Cruzeiro.png');
      break;
    case 'Atletico Mineiro':
      image = require('./assets/AtleticoMineiro.png');
      break;
    default:
      break;
  }

  return <Image source={image} style={style} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
