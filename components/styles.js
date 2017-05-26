import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#ffffff',
  },
  monthContainer: {
    width: DEVICE_WIDTH,
  },
  calendarControls: {
    flexDirection: 'row',
  },
  controlButton: {
  },
  controlButtonText: {
    margin: 10,
    fontSize: 15,
  },
  title: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 15,
  },
  calendarHeading: {
    flexDirection: 'row',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  dayHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 8,
  },
  weekendHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
    color: '#cccccc',
  },
  weekRow: {
    flexDirection: 'row',
  },
  weekRowExpanded: {
    height: 80,
    backgroundColor: '#EEEEEE',
  },
  weekendDayButton: {
  },
  expandedDayCircle: {
    width: (DEVICE_WIDTH)/7,
    height: 80,
    borderRadius:5,
    justifyContent:'flex-start',
    paddingTop:6,
  },
  dayButton: {
    alignItems: 'center',
    padding: 0,
    width: (DEVICE_WIDTH) / 7,
    borderTopWidth: 0,
    borderTopColor: '#e9e9e9',
  },
  dayButtonFiller: {
    padding: 8,
    width: (DEVICE_WIDTH) / 7,
  },
  day: {
    color: '#4d4d4d',
    fontSize: 16,
  },
  eventIndicatorFiller: {
    marginTop: 3,
    borderColor: 'transparent',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  eventIndicator: {
    backgroundColor: '#cccccc',
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  currentDayCircle: {
    backgroundColor: 'red',
  },
  currentDayText: {
    color: '#ff3e72',
  },
  selectedDayCircle: {
    height:32,
    width:32,
    backgroundColor: '#cccccc',
  },
  hasEventCircle: {
  },
  hasEventDaySelectedCircle: {
  },
  hasEventText: {
  },
  selectedDayText: {
    color: '#4d4d4d',
  },
  weekendDayText: {
    color: '#a0a0a0',
  },
});

export default styles;
