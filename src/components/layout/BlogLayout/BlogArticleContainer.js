import { connect } from 'react-redux';
import { getBlogArticles } from '../../../redux/blogRedux.js';
import BlogArticle from './BlogArticle';

const mapStateToProps = state => ({
  articles: getBlogArticles(state),
});

export default connect(mapStateToProps)(BlogArticle);
