  import React,{Component}from'react';
  import {View}from'react-native';
  import{StackNavigator}from'react-navigation';
  import Main from './Main';
  import Info from './Info';


  const Screens=StackNavigator({
      Main:{screen:Main},
      Info:{screen:Info}
      ,headerMode: 'screen'



  });
  export default Screens;
