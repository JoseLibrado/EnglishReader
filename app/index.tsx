import CardReading from "@/components/CardReading";
import ContentCard from "@/components/ContentCard";
import Dashboard from "@/components/Dashboard";
import { useNavigation } from "expo-router";
import { View } from "react-native";

export default function Index() {

  const navigation = useNavigation();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#414141ff"
      }}
    >
      <Dashboard>
        <CardReading>
          <ContentCard onPress={ () => navigation.navigate('Sheet' as never)}/>
        </CardReading>
      </Dashboard>
    </View>
  );
}
