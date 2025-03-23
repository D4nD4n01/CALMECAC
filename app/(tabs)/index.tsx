import { Image, StyleSheet, Platform } from 'react-native';

import { useState, useEffect } from 'react';

export default function HomeScreen() {

 

  const [saludo,setSaludo] = useState("Que tal estan")

  const [visible,setVisible] = useState(false)
  const [visible2,setVisible2] = useState(true)


  const [zape,Zape] = useState("Este es un zape para Memin")
  const [zape2,Zape2] = useState("Este es un zape para Arán")

  useEffect (() =>{
    visible? setSaludo("que tal estan") : setSaludo("como estan")
  },[zape,zape2]);

  const presionado = () =>{
    visible ? setVisible(false) : setVisible(true)
    visible ? Zape("Hola memo") : Zape2("Hola aran")
    visible ? Zape2("Este es un zape para Arán") : Zape("Este es un zape para Memin")
    visible ? console.log(zape2) : console.log(zape)
    
  }

  // visible ? (visible2? 1 : 2) : (3)
  

  return (
    <>
      <div style={{color:"white" ,textAlign:"center" , background:"gray"}}>
        {saludo} memo y aran ? {visible? zape:zape2}
        <div>hola Vicky</div>
      </div>
      <button onClick={presionado}> clickeame</button>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
