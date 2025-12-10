import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack 
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#414141ff',
        }
      }}
    >
      <Stack.Screen name="index" options={{title: 'Readings'}}/>
      <Stack.Screen name="Sheet" options={{title: 'Title'}}/>
    </Stack>
  );
}
