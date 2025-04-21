import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Image} from "expo-image";
import {colors} from "../utils/color";

interface DoctorItemProps {
  item: {
    name: string;
    specialty: string;
    experience: string;
    image: string;
  };
  index: number;
}

const DoctorItem: React.FC<DoctorItemProps> = ({item, index}) => (
  <View style={styles.doctorCard}>
    <Image
      source={{uri: item.image}}
      contentFit="cover"
      placeholder={{blurhash: "L3C00000"}}
      transition={1000}
      style={styles.doctorImage}
    />
    <View style={styles.doctorInfo}>
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.doctorExperience}>{item.experience}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  doctorCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    marginVertical: 5,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: 3,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: colors.textColor,
    marginBottom: 3,
  },
  doctorExperience: {
    fontSize: 12,
    color: colors.darkGray,
  },
});

export default DoctorItem;
