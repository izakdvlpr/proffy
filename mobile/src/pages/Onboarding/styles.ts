import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  slide: {},
  
  topSide: {    
    height: "50%",        
    alignItems: "center",
    justifyContent: 'center'    
  },    
  
  botSide: {    
    margin: 50, 
    alignItems: "flex-start",
    justifyContent: 'center'       
  },
  
  botSideTitle: {
    fontFamily: 'Archivo_700Bold',
    color: '#6A6180',
    fontSize: 40,
    opacity: 0.16,
    lineHeight: 44,
    maxHeight: 180,
  },
  
  botSideDescription: {
    marginTop: 24,
    color: '#6A6180',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },
  
  tabWrapper: {
    flex: 1,
    marginTop: 10,    
    marginBottom: 0,
    marginLeft: 45,
    marginRight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  tabCircles: {
    flexDirection: "row",
  },
  
  tabCircle: {
    backgroundColor: '#8257E5',
    width: 8,
    height: 8,
    borderRadius: 1,  
    margin: 3, 
  },
  
  tabCircleActived: {
    backgroundColor: '#6A6180',
    opacity: 0.16,
    width: 8,
    height: 8,
    borderRadius: 1,  
    margin: 3, 
  },
  
  tabIcon: {
    transform: [{ rotate: "180deg" }]
  },
});

export default styles;
