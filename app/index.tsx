import CardReading from "@/components/CardReading";
import ContentCard from "@/components/ContentCard";
import Dashboard from "@/components/Dashboard";
import { Mytranscrypts } from "@/data";
import { useNavigation } from "expo-router";
import { View } from "react-native";

export default function Index() {

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#414141ff"
      }}
    >
      <Dashboard>
        <CardReading>
          <ContentCard onPress={ () => navigation.navigate('Sheet' as never)} title={Mytranscrypts.data[0].name.substring(0,20)} image={Mytranscrypts.data[0].sluck}/>
        </CardReading>
        
      </Dashboard>
    </View>
  );
}
