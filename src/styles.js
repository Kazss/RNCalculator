import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },

  calculation: {
    paddingTop: 130,
  },

  result: {
    paddingTop: 10,
  },

  line: {
    marginTop: 10,
    height: 0.4,
    width: 360,
    alignSelf: "center",
    backgroundColor: '#FFFFFF'
  },

  detailsTextResult:{
    textAlign: "right",
    fontSize: 50,
    color: "#FFFFFF"
  },

  buttonsCandDiv: {
    marginLeft: 20,
    paddingTop: 20,
    flexDirection: 'row'
  },

  buttons789mult: {
    marginLeft: 20,
    paddingTop: 5,
    flexDirection: 'row',
    
  },
  buttons456less: {
    marginLeft: 20,
    paddingTop: 5,
    flexDirection: 'row'
  },
  buttons123sum: {
    marginLeft: 20,
    paddingTop: 5,
    flexDirection: 'row'
  },
  buttons0equal: {
    marginLeft: 20,
    paddingTop: 5,
    flexDirection: 'row',
  },
  
  // Details of Buttons

  detailsButtonGray: {
    marginLeft: 10,
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "#2c2c2c",
    alignItems: "center"
  },

  detailsButtonDefault: {
    marginLeft: 10,
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "#1B1B1B",
    alignItems: "center"
  },
  
  detailsButtonEqual: {
    marginLeft: 10,
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "#FF7555",
    alignItems: "center"
  },

  TextG: {
    color: "#b2adad",
    fontSize: 36,
    alignItems: "center"
  },  

  Text: {
    color: "#FFFFFF",
    fontSize: 36,
    textAlign: "center"
  },  
});