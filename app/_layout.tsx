import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack 
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#414141ff',
        },
        animation: 'slide_from_right',
        // animationDuration: 70,
      }}
    >
      <Stack.Screen name="index" options={{title: 'Readings'}} />
      <Stack.Screen name="SheetReader" />
    </Stack>
  );
}
