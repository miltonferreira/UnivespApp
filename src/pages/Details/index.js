import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";

import database from "../../config/firebaseconfig.js";
import styles from "./style";

export default function Details( {navigation, route} ){

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    function editTask(description, id){
        database.collection("Tasks").doc(id).update({
            description: descriptionEdit,
        });
        navigation.navigate("Task");
    }

    function getDesc(){
        database.collection("Tasks").doc(idTask).collection("infos").get()
        .then(querySnapshot => {
          querySnapshot.forEach(queryDocumentSnapshot => {
            <Text style={styles.label}>{queryDocumentSnapshot.get("descricao")}</Text>
            //alert(queryDocumentSnapshot.get("descricao"));
          });
        })
        .catch(err => {
          alert(err);
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Disciplinas</Text>
            {/* <TextInput style={styles.input} placeholder="Ex: Estudar javascript" onChangeText={setDescriptionEdit} value={descriptionEdit}/> */}
            <TextInput style={styles.input} placeholder="Administração I" onChangeText={setDescriptionEdit} value={descriptionEdit}/>
            <TextInput style={styles.input} placeholder="Redes de Computadores" onChangeText={setDescriptionEdit} value={descriptionEdit}/>
            <TextInput style={styles.input} placeholder="Banco de dados" onChangeText={setDescriptionEdit} value={descriptionEdit}/>
            <TextInput style={styles.input} placeholder="Projeto Integrador X" onChangeText={setDescriptionEdit} value={descriptionEdit}/>
            {getDesc()}

            {/* <FlatList showsVerticalScrollIndicator={false} data={task} renderItem={( {item} ) => {
                return(
                    <View style={styles.Tasks}>
                        
                        <Text style={styles.DescriptionTask} onPress={()=>
                            navigation.navigate("Details",{
                                id: item.id,
                                // description: item.description,
                            })
                        }>
                        {item.description}
                        </Text>
                    </View>
                )
            }}/> */}
            {/* <TouchableOpacity style={styles.buttonNewTask} onPress={()=> {editTask(descriptionEdit, idTask)}}>
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity> */}
        </View>
    )
}