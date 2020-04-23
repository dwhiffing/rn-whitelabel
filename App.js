import React from 'react'
import {WebView} from 'react-native-webview'
import {View, Text} from 'react-native'
import Config from 'react-native-config'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Config.APP_COLOR,
          alignItems: 'center',
          padding: 20,
          paddingTop: 50,
        }}>
        <Text style={{color: 'white'}}>{Config.APP_NAME}</Text>
      </View>
      <WebView source={{uri: 'https://infinite.red'}} />
    </View>
  )
}

export default App
