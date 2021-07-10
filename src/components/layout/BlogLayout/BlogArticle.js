import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import BlogSideBar from './BlogSideBarContainer';

class BlogArticle extends React.Component {
  render() {
    const { articles, match } = this.props;

    const findArticle = articles.find(el => el.title === match.params.id);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.row__blog}>
            <div className={styles.articles__container}>
              <div className={styles.articles__item}>
                <h2 className={styles.articles__item_title}>{match.params.id}</h2>
                <div className={styles.articles__item_footer}>
                  <div>
                    <FontAwesomeIcon icon={faUserEdit} />
                    <span>{findArticle.author}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{findArticle.data}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>{findArticle.category}</span>
                  </div>
                </div>
                <img
                  className={styles.articles__item_image}
                  src={findArticle.image}
                  alt=''
                ></img>
                <p className={styles.articles__item_text}>{findArticle.lead}</p>
                <p className={styles.articles__item_text}>{findArticle.text}</p>
                <hr />
              </div>
            </div>

            <BlogSideBar articles={articles} />
          </div>
        </div>
      </div>
    );
  }
}

BlogArticle.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      author: PropTypes.string,
      data: PropTypes.string,
      category: PropTypes.string,
      lead: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
  image: PropTypes.string,
};

export default BlogArticle;
