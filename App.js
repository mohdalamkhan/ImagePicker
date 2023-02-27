

import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TestCamera from './component/TestCamera'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TestCamera/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
     justifyContent:'center',
      alignItems:'center'
  }
});










// import {SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'
// // import PickerModal from './component/modal'
// import SelectCamera from './component/ImagePicker'
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <SelectCamera/> */}
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//      justifyContent:'center',
//       alignItems:'center'
//   }
// });










