import React, { Component } from 'react';
import {
    Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button,
    Icon
} from 'native-base';
import Info from "./Info";
export default class Main extends Component {
    currentTime() {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        return h + ":" + m  ;
    }

    static navigationOptions = {header : null };

    render() {
        const {navigate}=this.props.navigation;
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem avatar onPress={()=>navigate('Info')}>
                            <Left>
                                <Thumbnail source={require('../photo/a.png')}  />
                            </Left>
                            <Body>
                            <Text>bahar</Text>
                            <Text note>Lorem ipsum dolor sit amet</Text>
                            </Body>
                            <Right>
                                <Text note>{this.currentTime()}</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar onPress={()=>navigate('Info')}>
                            <Left>
                                <Thumbnail source={require('../photo/a.png')}  />
                            </Left>
                            <Body>
                            <Text>bahar</Text>
                            <Text note>Lorem ipsum dolor sit amet</Text>
                            </Body>
                            <Right>
                                <Text note>{this.currentTime()}</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar onPress={()=>navigate('Info')}>
                            <Left>
                                <Thumbnail source={require('../photo/a.png')}  />
                            </Left>
                            <Body>
                            <Text>bahar</Text>
                            <Text note>Lorem ipsum dolor sit amet</Text>
                            </Body>
                            <Right>
                                <Text note>{this.currentTime()}</Text>
                            </Right>
                        </ListItem>


                    </List>
                </Content>
            </Container>
        );
    }
}