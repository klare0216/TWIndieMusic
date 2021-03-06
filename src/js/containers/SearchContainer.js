import { connect } from 'react-redux';
import Search from '../components/Hompage/Search';
import { 
  searchInputChange, 
  pressEnter, 
  filterData,
  deleteChips,
} from  '../actions/opendataActions';
import Scroll from 'react-scroll';

const mapStateToPorps = ({ opendataReducer }) => {
  // 把全部的資料存進props裡面
  console.log('in map=>>>',opendataReducer.query);
  return {
    text: (opendataReducer.query) ? opendataReducer.query : '',
    chips: opendataReducer.chips,
  }
};

const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: event => {
    dispatch(searchInputChange(event.target.value));
  },
  onEnter: event => {
    if(event.target.value.length !== 0)
      dispatch(pressEnter(event.target.value));
    else {
      dispatch(searchInputChange(''));
      Scroll.scroller.scrollTo('ResultBox', {
        delay: 0,
        smooth: true,
      });
    }
  },
  onClickSubmit: queries => {
    dispatch(filterData(queries));
  },
  onClickDelete: chip => {
    console.log("inclick",chip);
    dispatch(deleteChips(chip));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, {
    onChangeSearchInput: dispatchProps.onChangeSearchInput,
    onEnter: dispatchProps.onEnter,
    onClickSubmit: () => dispatchProps.onClickSubmit(stateProps.chips),
    onClickDelete: dispatchProps.onClickDelete,
  }, ownProps)
);

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
  mergeProps,
)(Search);
