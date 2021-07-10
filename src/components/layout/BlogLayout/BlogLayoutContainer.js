import { connect } from 'react-redux';
import {
  getBlogArticles,
  chooseCategory,
  changeSearchPhrase,
} from '../../../redux/blogRedux.js';
import BlogLayout from './BlogLayout';

const mapStateToProps = state => ({
  articles: getBlogArticles(state),
  blogFilters: state.blogFilters,
});

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(chooseCategory(category)),
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogLayout);
