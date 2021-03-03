import React from 'react';  //react is a core library for developing UI application

import {Text,View,Button,SafeAreaView,StyleSheet} from 'react-native';  //is a react based library for developing mobile UI


//we should call the supplied property as props convnetionally.
//you can name it whatever you like. But you should name it props

function AppHeader(props){

   

    return (
      <View style={styles.headerContainer}>
           <Text style={styles.headerStyle}>{props.heading}</Text>
           <Text style={styles.dateStyle}>{props.displayDate ? new Date().toDateString().toUpperCase() : ''}</Text>
      </View>
    );
}


const styles=StyleSheet.create({

    container:{
        
        backgroundColor:'crimson',
        height:"100%"
        
    },
    headerContainer:{
        paddingTop:40,
        backgroundColor:'black',
        paddingVertical:10,
        paddingLeft:5
    },
    buttonStyle:{
        margin:50,
        color:'red'
    },

    headerStyle:{
        color:'#FC0',
        fontSize:30,
        marginTop:20,
        fontFamily:'script'
  
  
      },
     
     dateStyle:{
        textAlign:'right',
        fontSize:12,
        fontWeight:'bold',
        fontFamily:'courier',
        color:'white'
      },
      title:{
          marginTop:10,
          color:'white',
          fontSize:30,
          fontFamily:'script',
          textAlign:'center',
          fontWeight:'bold'
      },
      label:{

          fontSize:20,
          color:'white',
          marginRight:20
      },
      valueText:{
          fontSize:22,
          color:'white',
          fontWeight:'bold'
      },
      row:{
          
          marginVertical:10,
          marginHorizontal:15,
          flexDirection:'row'
      }

});


const LabeledValue=({label,value})=>(
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.valueText}>{value}</Text>
    </View>
);


const BookDetails=({title,author,price,rating,votes})=>{



   return (
     <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
        
        <LabeledValue label='Author' value={author} />
        <LabeledValue label='Price' value={`Rs ${price}`} />
        <LabeledValue label='rating' value={`${rating} out of 5 (${votes} votes)`} />
         
         <Button style={styles.buttonStyle} title='Add to Favorite' />
     </View>
   );
}



//{heading:'All About Books' , displayDate:false}

const App= ()=>(    

  <View style={styles.container}>
              <AppHeader  heading='All About Books' displayDate={true} />
              <BookDetails 
                        title='The Accursed God'
                        author='Vivek Dutta Mishra'
                        price={336}
                        rating={4.2}
                        votes={80}
                        />              
  </View>

); 



export default App;






