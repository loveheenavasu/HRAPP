import React, {FC, useRef, useState} from 'react';
import {FlatList, Modal, TextStyle} from 'react-native';
import {View, TouchableOpacity, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';

interface Props {
  containerStyle?: ViewStyle;
  dropDownStyle?: ViewStyle;
  onClick: (item: {id: number; value: string}) => void;
  data?: Array<{id: number; value: string}>;
  title?: string;
  titleStyle?: TextStyle;
  placeHolder?: string;
}

const Custom: FC<Props> = ({
  containerStyle,
  dropDownStyle,
  onClick,
  data,
  title,
  titleStyle,
  placeHolder,
}) => {
  const DropDownButton = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dropdownTop, setDropdownTop] = useState<number>(0);
  const [dropdownLeft, setDropdownLeft] = useState<number>(0);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [selected, setSelected] = useState<string>('');

  const dynamicStyles = styles(
    selected,
    dropdownWidth,
    dropdownTop,
    dropdownLeft,
  );

  const click = (item: any): void => {
    onClick(item);
    setShowModal(false);
    setSelected(item.value);
  };

  const renderDropdown = () => {
    return (
      <Modal visible={showModal} transparent animationType="none">
        <TouchableOpacity
          style={dynamicStyles.overLay_Con}
          activeOpacity={1}
          onPress={() => setShowModal(false)}>
          <View style={[dynamicStyles.dropdown, dropDownStyle]}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={dynamicStyles.list_Con}
                    onPress={() => click(item)}>
                    <Label
                      style={dynamicStyles.list_Label}
                      title={item?.value}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  const toggleDropdown = (): void => {
    showModal ? setShowModal(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropDownButton?.current?.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownTop(py + h);
        setDropdownLeft(_px);
        setDropdownWidth(_w);
      },
    );
    setShowModal(true);
  };

  return (
    <>
      {title && <Label style={titleStyle} title={title} />}
      <TouchableOpacity
        ref={DropDownButton}
        onPress={toggleDropdown}
        style={[dynamicStyles.main, containerStyle]}>
        <Label
          maxLines={3}
          title={selected ? selected : placeHolder}
          style={dynamicStyles.title_Lable}
        />
        <AntDesign
          name={showModal ? 'caretup' : 'caretdown'}
          size={scale(20)}
          color={COLOR.LIGHT_GREY}
          style={{opacity: 0.7}}
        />
      </TouchableOpacity>
      {renderDropdown()}
    </>
  );
};

export default Custom;
