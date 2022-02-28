import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView , 
    ImageBackground, 
    Dimensions , 
    Text , 
    View,
    Image,
    TextInput,
    StyleSheet,
    Pressable
} from 'react-native'
const Login = ()=>{
    return (
        <ScrollView style={{ flex:1 , backgroundColor:"#fffff"}} showsVerticalScrollIndicator={false}>
            <View style={styles.Brand_view}>
                <Icon name="file-pdf-o" size={50}></Icon>
                <Text style={styles.Brand_text}>
                    BUYMORE
                </Text>
            </View>
            <View style={styles.bottom_view}>
                <View style={{ padding:35}}>
                    <Text style={{ color:'#4632A1' , fontSize:34}}>Welcome</Text>
                    <Text>
                        Don't have an account?<Text style={{ color:'red'}}> register</Text> 
                    </Text>
                </View>
                {/* form input view*/}
                <View style={{ marginTop:0,paddingHorizontal:30}}>
                    <View>
                        
                        <TextInput keyboardType='email-address' placeholder='email address'
                         style={{backgroundColor:"#f8f8ff",fontSize:18}}>
                         </TextInput>
                    </View>
                    <View style={{marginTop:10}}>
                        <TextInput keyboardType='password' placeholder='password'
                         style={{backgroundColor:"#f8f8ff",fontSize:18}}>
                        </TextInput>
                    </View>
                    <View style={styles.forgotPasswordView}>
                        <View style={{flex:1  , marginLeft:-20}} >

                        </View>
                        <View style={{flex:1}} >
                            <Text style={{color:'#8f9195',alignSelf:'flex-end'}} >forgot password?</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                }} >
                    <Pressable style={styles.LoginBtn}>
                        <Text style={{ color:'#ffffff'}}>Login Now</Text>
                    </Pressable>
                </View>
                <View style={{flex:1,marginTop:20}}>
                    <Text style={{ textAlign:'center',fontSize:18}}>or Login with </Text>
                </View>
                <View style={{
                    marginTop:15,
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center'
                    }}>
                    <Pressable style={ [styles.socialBtn,{backgroundColor:"#4267B2"}] }>
                        <Icon name="facebook" style={{color:'#ffffff'}}/>
                    </Pressable>
                    <Pressable style={ [styles.socialBtn,{backgroundColor:"#db4a39"}] }>
                        <Icon name="google-plus" style={{color:'#ffffff'}}/>
                    </Pressable>                    
                    <Pressable style={ [styles.socialBtn,{backgroundColor:"#00acee"}] }>
                        <Icon name="twitter" style={{color:'#ffffff'}}/>
                    </Pressable>                       
                    
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Brand_view:{
        paddingTop:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Brand_text:{
        color:'#00bfff',
        fontSize:40,
        fontWeight:'bold',
        fontFamily:'Arial',
        textTransform:'uppercase'
    },
    bottom_view:{
        flex:1.5,
        backgroundColor:'#ffffff',
        borderTopStartRadius:60,
        borderTopEndRadius:60
    },
    forgotPasswordView:{
        height:40,
        marginTop:20,
        flexDirection:'row',  
    },
    LoginBtn:{

        width:Dimensions.get('window').width/2,
        alignItems:'center',
        backgroundColor:'#4632A1',
        borderRadius:20,
        padding:15,
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:3,
        elevation: 15,
        shadowColor:'#00acee'
    },
    socialBtn:{
        width:Dimensions.get('window').width/6,
        alignItems:'center',
        borderRadius:50,
        padding:20,
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:3,
        elevation: 15,
        shadowColor:'#00acee'

    }
})
export default Login