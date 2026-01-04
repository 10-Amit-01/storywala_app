import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../theme';

const USERS = [
  { id: 1, name: 'Anush', avatar: require('../../assets/images/user1.png') },
  {
    id: 2,
    name: 'kanika',
    avatar: require('../../assets/images/user2.png'),
  },
];

interface StepSelectUserProps {
  selectedUser: any;
  onUserSelect: (user: any) => void;
}

const StepSelectUser: React.FC<StepSelectUserProps> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleSelectedUser(id: number) {
    navigation.navigate('home', { userId: id });
  }

  return (
    <>
      <Text style={[GlobalStyles.heading]}>Who's listening</Text>
      <Text style={[GlobalStyles.text, styles.subtitle]}>
        Choose your child to enjoy their favourite stories.
      </Text>
      <View style={styles.selectUser}>
        {USERS.map(user => (
          <TouchableOpacity
            style={styles.avatarCard}
            key={user.id}
            onPress={() => {
              handleSelectedUser(user.id);
            }}
          >
            <LinearGradient
              colors={[
                colors.gradients.primary[1],
                colors.gradients.primary[0],
              ]}
              style={styles.avatarImgContainer}
            >
              <Image style={styles.avatarImg} source={user.avatar} />
            </LinearGradient>
            <Text style={[GlobalStyles.text, styles.avatarText]}>
              {user.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.addBtnContainer}>
        <Pressable style={styles.addBtn}>
          <Image source={require('../../assets/icons/plus-ic.png')} />
        </Pressable>
        <Text style={[GlobalStyles.text, styles.avatarText]}>Add User</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  selectUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  avatarCard: {
    margin: 10,
  },
  avatarImgContainer: {
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarText: {
    marginTop: 10,
  },
  addBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#3C80C3',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 34,
    height: 34,
  },
  subtitle: {
    fontSize: theme.typography.sizes.sm,
    marginTop: 20,
  },
});

export default StepSelectUser;
