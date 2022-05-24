import React, {Component} from "react";
import { SafeAreaView,  View, Text, StyleSheet, FlatList } from "react-native";
import filmes from "../List/construtor"

export default class ListFlat extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmes: [
                {id: 94, nome: 'homem aranha'},
                {id: 82, nome: 'homem de ferro'},
                {id: 52, nome: 'captã marvel'},
                {id: 19, nome: 'capitão america'},
                {id: 14, nome: 'o encrivel hulk'},
                {id: 12, nome: 'doutor estranho'},
                {id: 24, nome: 'os vingadores 1'},
                {id: 45, nome: 'princesa scarlate'},
                {id: 16, nome: 'viuva negra'},
                {id: 9, nome: 'shang chi'},
                {id: 99, nome: 'homem formiga'},
                {id: 23, nome: 'thor'},
            ]
        }
    }


    render(){
        return(
     <SafeAreaView style={style.container}>
        <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={this.state.filmes}
        renderItem={({item}) => 
            <View style={style.containerMovie}>
                <Text style={style.titleMovie}  >{item.nome}</Text>
            </View>
    }
        ></FlatList>


     </SafeAreaView>
 )   

}

}
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
     containerMovie: {
        backgroundColor: 'black',
        height: 70,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
     },
     titleMovie: {
         fontSize: 20,
         color: 'white',
         fontWeight: "bold",

     }
})