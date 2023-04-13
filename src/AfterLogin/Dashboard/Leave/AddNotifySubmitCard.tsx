import { Alert, View } from "react-native"
import commonStyle from "./commonStyle"
import Label from "../../../CommonComponent/Lable"
import EditText from "../../../CommonComponent/EditText"
import { TouchableOpacity } from "react-native-gesture-handler"
import Add from 'react-native-vector-icons/AntDesign'
import { useState } from "react"
import DropDown from "../../../CommonComponent/DropDown"
import { HrMailngData } from "../../../Util/DummyData"

const AddNotifySubmitCard = ()=>{
    const [email,setEmail] = useState<string>('')
   return(
    <View style={commonStyle.main}>
      <Label title="Notify Person" style={commonStyle.headingTxt}/>
      <View style={commonStyle.rowView}>
       <DropDown
       Data={HrMailngData}
       onSelect={(selectedItem:any)=>{
        Alert.alert('selected item-->',selectedItem)
        }}
       displayTxt="Select Email"
       dropDownStyle={{height:'100%'}}  
       />
      </View>
    </View>
  )
}

export default AddNotifySubmitCard