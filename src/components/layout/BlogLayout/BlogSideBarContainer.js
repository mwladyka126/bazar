import { connect } from 'react-redux';
import {
  getBlogArticles,
  chooseCategory,
  changeSearchPhrase,
} from '../../../redux/blogRedux';
import BlogSideBar from './BlogSideBar';

const mapStateToProps = state => ({
  articles: getBlogArticles(state),
});

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(chooseCategory(category)),
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogSideBar);
