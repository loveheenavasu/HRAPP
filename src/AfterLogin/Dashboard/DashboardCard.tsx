import { FlatList, StyleSheet, TextStyle, View, TouchableOpacity } from "react-native";
import Label from "../../CommonComponent/Lable";
import COLOR from "../../Util/Color";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import Home from 'react-native-vector-icons/Entypo';
import Calender from 'react-native-vector-icons/AntDesign';
import Gift from 'react-native-vector-icons/AntDesign';
import CustomButton from "../../CommonComponent/CustomButton";
import Summary from 'react-native-vector-icons/Ionicons';
import Adjust from 'react-native-vector-icons/Feather';

interface MyObject {
    id?: number;
    date?: string;
    day?: string;
    type?: string;
    fromTo?: string;
    days?: string;
    name?: string;
    on?: string;
}

interface Props {
    title?: string;
    titleStyle?: TextStyle;
    rightLogo?: boolean;
    DataArr?: MyObject[];
    leave?: boolean;
}

const DashboardCard = (props: Props) => {
    const { title, titleStyle, rightLogo, DataArr, leave } = props
    const _Hline = () => {
        return <View style={styles.hLine}></View>;
    };

    return (
        <View style={styles.main}>
            {/*For Header*/}
            {<View style={styles.HeaderView}>
                <Label title={title} style={titleStyle} />
                {
                    title === 'Dashboard' &&
                    <Label title='Check your upcoming leaves,Leave balance or apply for one' style={styles.dasboardTxt} />
                }
                {
                    rightLogo && (
                        <>
                            {
                                title === 'UPCOMING LEAVE' ?
                                    <Home name='home' size={scale(25)} />
                                    : title === 'LAST LEAVE TAKEN' ?
                                        <Calender name="calendar" size={scale(25)} />
                                        : <Gift name='gift' size={scale(25)} />
                            }
                        </>
                    )
                }
            </View>
            }
            {/*Main Section of Cards*/}
            <View style={styles.body}>
                {/*Upcoming Leave Body Section*/}
                {
                    title === 'UPCOMING LEAVE' &&
                    (
                        <>
                            {
                                DataArr?.length ? (
                                    <>
                                        <FlatList
                                            data={DataArr}
                                            keyExtractor={(item) => item?.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <TouchableOpacity style={styles.rowView} onPress={() => null}>
                                                        <Calender name="calendar" size={30} />
                                                        <View style={styles.coloumView}>
                                                            <Label title={item?.date} style={styles.blackTxt} />
                                                            <Label title={item?.day} style={styles.blackTxt} />
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            }}
                                            ItemSeparatorComponent={_Hline}
                                        />
                                    </>
                                ) :
                                    <Label title='No upcoming leave' style={styles.noDataTxt} />
                            }
                        </>
                    )
                }

                {/*Last Leave Body Section*/}
                {
                    title === 'LAST LEAVE TAKEN' && (
                        <>
                            {
                                DataArr?.length ? (
                                    <>

                                        <FlatList
                                            data={DataArr}
                                            keyExtractor={item => item?.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <>
                                                        <Label title={item?.days} style={styles.bigTxt} />
                                                        <Label title={item?.type} style={styles.normalTxt} />
                                                        <Label title={item?.fromTo} style={styles.normalTxt} />
                                                        <CustomButton name="View History" btnStyle={styles.btn} />
                                                    </>
                                                );
                                            }}
                                            ItemSeparatorComponent={_Hline}
                                        />
                                    </>
                                ) :
                                    <Label title='No upcoming leave' style={styles.noDataTxt} />
                            }
                        </>


                    )
                }

                {/*Next public Holiday Section*/}
                {
                    title === 'NEXT PUBLIC HOLIDAY' && (
                        <>
                            {
                                DataArr?.length ? (
                                    <>
                                        <FlatList
                                            data={DataArr}
                                            keyExtractor={item => item?.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <>
                                                        <Label title={item?.name} style={styles.pubHolTxt} />
                                                        <Label title={`On ${item?.on}`} style={styles.normalTxt} />
                                                        <CustomButton name="View Public Holiday" btnStyle={styles.btn} />
                                                    </>
                                                );
                                            }}
                                            ItemSeparatorComponent={_Hline}
                                        />
                                    </>
                                ) :
                                    <Label title='No Public Holiday' style={styles.noDataTxt} />
                            }
                        </>


                    )
                }


                {/*Leave Section*/}
                {
                    leave && (
                        <View style={[styles.rowView, { justifyContent: 'space-around' }]}>
                            {
                                ['Apply Leave', 'Leave Summary', 'Leave Adjustment'].map(i => {
                                    return (
                                        <TouchableOpacity style={styles.Leave_Menu_wrap}>
                                            {/*Logo*/}
                                            {
                                                i === 'Apply Leave' ?
                                                    <Calender name='calendar' size={22} />
                                                    : i === 'Leave Summary' ?
                                                        <Summary name='document-text-outline' size={scale(22)} />
                                                        : <Adjust name='edit' size={scale(22)} />
                                            }
                                            <Label title={i} style={styles.leaveTxt} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>


                    )

                }



            </View>


        </View>
    )
}

export default DashboardCard

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLOR.WHITE,
        marginHorizontal: verticalScale(5),
        marginBottom: verticalScale(4),
        marginTop: verticalScale(4),
        paddingBottom: scale(4),
        shadowColor: COLOR.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    HeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(5),
        // backgroundColor:'red'
        // paddingVertical: scale(2)
    },
    dasboardTxt: {
        position: 'absolute',
        top: verticalScale(27),
        fontSize: scale(10),
        left: scale(4)
        //   paddingHorizontal:scale(7),

    },
    body: {

    },
    noDataTxt: {
        textAlign: 'center',
        color: COLOR.NAVY
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: scale(5),
        marginVertical: verticalScale(5),
    },
    coloumView: {
        paddingLeft: scale(11),
    },
    blackTxt: {
        marginVertical: verticalScale(1),
        fontSize: scale(11),
        // fontWeight: '600',
    },
    hLine: {
        height: scale(1),
        width: '95%',
        backgroundColor: COLOR.GREY,
        alignSelf: 'center',
        marginTop: verticalScale(2),
    },
    btn: {
        width: '40%',
        paddingVertical: scale(8),
        marginVertical: verticalScale(7),
        // alignSelf:'flex-start'
    },
    bigTxt: {
        marginVertical: verticalScale(1),
        fontSize: scale(28),
        marginLeft: scale(10),
        color: COLOR.NAVY

    },
    normalTxt: {
        marginVertical: verticalScale(1),
        fontSize: scale(11),
        marginLeft: scale(10),
    },
    pubHolTxt: {
        marginVertical: verticalScale(1),
        fontSize: scale(28),
        marginLeft: scale(10),
        color: COLOR.ORANGE
    },
    Leave_Menu_wrap: {
        //  backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leaveTxt: {
        marginVertical: verticalScale(1),

    }
})