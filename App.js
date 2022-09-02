import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginProcess from "./Views/login/loginProcess";
import RegisterProcess from "./Views/register/registerProcess";
import Verification from "./Views/Verification/verification";
import UserProfileProcess from "./Views/userProfile/userProfileProcess";
import AccountLevel from "./Views/accountLevel/accountLevel";
import CompleteProfileProcess1 from "./Views/completeProfile/completeProfile1/completeProfileProcess1";
import CompleteProfileProcess2 from "./Views/completeProfile/completeProfile2/completeProfileProcess2";
import CompleteProfileProcess3 from "./Views/completeProfile/completeProfile3/completeProfileProcess3";
import CompleteProfile4 from "./Views/completeProfile/completeProfile4/completeProfile4";
import Welcome from "./Views/welcome/welcome";
import FundingProcess from "./Views/funding/fundingProcess";
import PaymentProcess from "./Views/payment/paymentProcess";
import ForgotProcess from "./Views/forgotPassword/forgotProcess";
import ResetPasswordProcess from "./Views/resetPassword/resetPasswordProcess";
import AdditonalDoc from "./Views/additonalDoc/additonalDoc";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./src/header/header";
import BellMenu from "./src/bellMenu/bellMenu";
export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
        initialRouteName="additonalDoc"
        backBehavior="history"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="login"
          options={{
            unmountOnBlur: true,
          }}
          component={LoginProcess}
        />
        <Drawer.Screen
          name="register"
          options={{ unmountOnBlur: true }}
          component={RegisterProcess}
        />
        <Drawer.Screen
          options={{ unmountOnBlur: true }}
          name="verification"
          component={Verification}
        />
        <Drawer.Screen name="userProfile" component={UserProfileProcess} />
        <Drawer.Screen name="accountLevel" component={AccountLevel} />
        <Drawer.Screen
          name="completeProfile1"
          component={CompleteProfileProcess1}
        />
        <Drawer.Screen
          name="completeProfile2"
          component={CompleteProfileProcess2}
        />
        <Drawer.Screen
          name="completeProfile3"
          component={CompleteProfileProcess3}
        />
        <Drawer.Screen name="completeProfile4" component={CompleteProfile4} />
        <Drawer.Screen name="welcome" component={Welcome} />
        <Drawer.Screen name="funding" component={FundingProcess} options={{ unmountOnBlur: true, headerRight: (props) => <BellMenu {...props} />, headerTransparent: false}}/>
        <Drawer.Screen name="payment" component={PaymentProcess} options={{ unmountOnBlur: true, headerRight: (props) => <BellMenu {...props} />, headerTransparent: false}}/>
        <Drawer.Screen name="forgotPassword" component={ForgotProcess} />
        <Drawer.Screen name="resetPassword" component={ResetPasswordProcess} />
        <Drawer.Screen name="additonalDoc" options={{ unmountOnBlur: true }} component={AdditonalDoc} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
