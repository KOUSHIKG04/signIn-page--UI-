import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FONT_FAMILY = Platform.select({
  web: 'Mona Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
  default: "Mona Sans",
});
const TEXT_COLOR = "rgb(61, 61, 78)";

export default function Index() {
  const [focusedInput, setFocusedInput] = useState<"email" | "password" | null>(
    null,
  );
  const { height, width } = useWindowDimensions();
  const isCompact = height < 720;
  const contentWidth = Math.min(width - 40, 390);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.screen}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F6FAF7" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          bounces={false}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingTop: isCompact ? 4 : 20,
              paddingBottom: isCompact ? 24 : 40,
            },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.container, { width: contentWidth }]}>
            <View style={styles.logoWrap}>
              <Image
                contentFit="contain"
                source={require("../../assets/logo.svg")}
                style={styles.logoImage}
              />
            </View>

            <View style={[styles.copyBlock, { marginTop: isCompact ? 8 : 10 }]}>
              <Text style={styles.title}>Sign In</Text>
              <Text style={styles.subtitle}>
                Let's experience the joy of telecare AI
              </Text>
            </View>

            <View style={[styles.form, { marginTop: isCompact ? 26 : 36 }]}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email address</Text>
                <View
                  style={[
                    styles.inputShell,
                    focusedInput === "email" && styles.inputShellFocused,
                  ]}
                >
                  <MaterialCommunityIcons
                    color="#000000"
                    name="email-outline"
                    size={22}
                    style={styles.fieldIcon}
                  />
                  <TextInput
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onBlur={() => setFocusedInput(null)}
                    onFocus={() => setFocusedInput("email")}
                    placeholder="hello@example.com"
                    placeholderTextColor="#9FAAA4"
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <View style={styles.passwordLabelRow}>
                  <Text style={styles.inputLabel}>Password</Text>
                </View>
                <View
                  style={[
                    styles.inputShell,
                    focusedInput === "password" && styles.inputShellFocused,
                  ]}
                >
                  <MaterialCommunityIcons
                    color="#000000"
                    name="lock-outline"
                    size={22}
                    style={styles.fieldIcon}
                  />
                  <TextInput
                    onBlur={() => setFocusedInput(null)}
                    onFocus={() => setFocusedInput("password")}
                    placeholder="Enter your password"
                    placeholderTextColor="#9FAAA4"
                    secureTextEntry
                    style={styles.input}
                  />
                  <MaterialCommunityIcons
                    color="#000000"
                    name="eye-outline"
                    size={22}
                    style={styles.trailingIcon}
                  />
                </View>
              </View>

              <Pressable style={styles.signInButton}>
                <View style={styles.signInButtonContent}>
                  <Text style={styles.signInText}>Sign In</Text>
                  <MaterialCommunityIcons
                    color="#FFFFFF"
                    name="arrow-right"
                    size={16}
                  />
                </View>
              </Pressable>
            </View>

            <View style={styles.dividerRow}></View>

            <View style={styles.socialRow}>
              <Pressable style={styles.socialButton}>
                <MaterialCommunityIcons
                  color="#1877F2"
                  name="facebook"
                  size={24}
                />
              </Pressable>
              <Pressable style={styles.socialButton}>
                <MaterialCommunityIcons
                  color="#EA4335"
                  name="google"
                  size={24}
                />
              </Pressable>
              <Pressable style={styles.socialButton}>
                <MaterialCommunityIcons
                  color="#E4405F"
                  name="instagram"
                  size={24}
                />
              </Pressable>
            </View>

            <View
              style={[styles.signupRow, { marginTop: isCompact ? 26 : 40 }]}
            >
              <Text style={styles.signupPrompt}>
                {"Don't have an account? "}
              </Text>
              <Pressable hitSlop={10} style={styles.signupActionButton}>
                <Text style={styles.signupAction}>Sign up</Text>
              </Pressable>
            </View>

            <Pressable hitSlop={10} style={styles.forgotAction}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  container: {
    maxWidth: 390,
  },
  logoWrap: {
    alignItems: "center",
  },
  logoImage: {
    width: 112,
    height: 108,
  },
  copyBlock: {
    alignItems: "center",
  },
  title: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 41,
    textAlign: "center",
  },
  subtitle: {
    maxWidth: 310,
    marginTop: 12,
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
  },
  form: {
    gap: 18,
  },
  inputGroup: {
    gap: 9,
  },
  passwordLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLabel: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "400",
  },
  forgotText: {
    color: "#85CC16",
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  inputShell: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1EAE5",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
  },
  inputShellFocused: {
    borderColor: "#85CC16",
    borderWidth: 1.5,
  },
  fieldIcon: {
    width: 28,
  },
  trailingIcon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 0,
  },
  signInButton: {
    minHeight: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#85CC17",
    shadowColor: "#85CC17",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.24,
    shadowRadius: 24,
    elevation: 8,
  },
  signInButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  signInText: {
    color: "#FFFFFF",
    fontFamily: FONT_FAMILY,
    fontSize: 17,
    fontWeight: "400",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#DCE7E2",
  },
  dividerText: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 13,
    fontWeight: "400",
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    marginTop: 18,
  },
  socialButton: {
    width: 58,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E9E4",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  signupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  signupPrompt: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    fontWeight: "400",
  },
  signupAction: {
    color: "#85CC16",
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    fontWeight: "400",
  },
  signupActionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  forgotAction: {
    alignSelf: "center",
    marginTop: 14,
  },
});
