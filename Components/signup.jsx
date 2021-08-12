import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

class SignUp extends React.Component {
    state = {
        email: "",
        password: "",
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>SignUp</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone number, email or username"
                        placeholderTextColor="#979797"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone number, email or username"
                        placeholderTextColor="#979797"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone number, email or username"
                        placeholderTextColor="#979797"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#979797"
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        }
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>
                        Forgot your login details? Get help logging in.
                    </Text>
                </TouchableOpacity>
                <Text style={styles.forgot}>
                        ------------------------------OR------------------------------
                    </Text>
                <TouchableOpacity style={styles.loginFbBtn}>
                    <Text style={styles.loginFbText}  onPress={() => navigate('Home')}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('/signup')} >Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        fontFamily: "Billabong",
        color: "#FFFFFF",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#525252",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "white",
    },
    forgot: {
        color: "#979797",
      fontSize: 11,
        marginTop:10
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#214ED3",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    loginText: {
        color: "white",
  },
  loginFbBtn: {
      width: "80%",
      backgroundColor: "#059DC0",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
    justifyContent: "center",
      marginTop:20,
      marginBottom: 10,
  },
  loginFbText: {
      color: "white",
  },
});