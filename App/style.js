import {StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  backgroundWindows:{
    backgroundColor: '#00537d',
    flex: 1,
  },
  contentStretch:{
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',  
  },
  contentCenter:{
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    width: 210,
    height: 47,
    backgroundColor: '#b9e986',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
  },
  surveyIconLarge: { 
    height: 70,
    width: 70,
    alignItems: 'center',
    marginTop: 10,
  },

  surveyIconNav: {
    height: 30,
    width: 30,
    alignItems: 'center',
  },
  actionIconNav: {
    height: 20,
    width: 20,
    alignItems: 'center',
  },
  bellIcon: {
    height: 15,
    width: 15,
    alignItems: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  nomoralText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  boxTime: {
    height: 210,
    width: 210,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    margin: 15,
    padding: 10,
  },
  insiteCircle: {
    backgroundColor: 'transparent',
   // position: 'absolute',
   // top: 0,
    marginTop: -112,
    alignItems: 'center'
  },
  boxInsiteCircle: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#f4a821',
    borderRadius: 7,
    height: 47,
    width: 47,
    marginTop: 6,
    alignItems: 'center',
    padding: 0,
  },
  titleQuestion: {
    color: 'black',
    fontSize: 20,
  },
  boxQuestion:{
    backgroundColor: 'white',
    height: 120,
    marginBottom: 10,
    flex: 1,
    alignItems: 'stretch', 
    justifyContent: 'center',
  },
  panel: {
    backgroundColor: 'white',
    alignItems: 'stretch',
    height: 50,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonQuestionSelect:{
    width: 80,
    height: 24,
    backgroundColor: '#b9e986',
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'blue',
    marginRight: 5,
    fontSize: 12,
  },
  buttonQuestionNotSelect:{
    width: 80,
    height: 24,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'black',
    marginRight: 5,
    fontSize: 12,
  },
  boxQuestionRow:{
    margin:15,
    flex: 1,
    flexDirection: 'row',
  },
  timeRemainingIcon:{
    height: 130,
    width: 130,
    alignItems: 'center',
  },
});

export default styles;