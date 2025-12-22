import CardReading from "@/components/CardReading";
import ContentCard from "@/components/ContentCard";
import Dashboard from "@/components/Dashboard";
import { Mytranscrypts } from "@/data";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#414141ff',
      }}
    >
      <Dashboard>

        {
          Mytranscrypts.data.map(
            item => <CardReading key={item.id}>
              <ContentCard
                onPress={() => router.push({
                  pathname: '/SheetReader',
                  params: {
                    title: item.name.substring(0, 20),
                    videoLink: item.videoLink,
                    text: item.transcript
                  }
                },
                )}
                title={item.name.substring(0, 20)}
                image={item.sluck} />
            </CardReading>)
        }

      </Dashboard>
    </View>
  );
}
