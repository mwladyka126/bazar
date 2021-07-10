import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import BlogSideBar from './BlogSideBar';
import { Link } from 'react-router-dom';

class BlogCategories extends React.Component {
  state = {
    choosenCat: '',
  };

  setCategory = text => {
    this.setState({ choosenCat: text });
  };

  render() {
    const { articles } = this.props;

    const artByCat = articles.filter(item => item.category === this.state.choosenCat);
    console.log(artByCat);

    let repository = articles;
    if (this.state.choosenCat.length > 1) {
      repository = artByCat;
    } else {
      repository = articles;
    }
    console.log('repository', repository);

    console.log('stan chosenCategory:', this.state.choosenCat);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.row__blog}>
            <div className={styles.articles__container}>
              {repository.map(item => (
                <div key={item.id} className={styles.articles__item}>
                  <h2 className={styles.articles__item_title}>
                    <Link to={`/blog/${item.title}`}>{item.title}</Link>
                  </h2>
                  <img
                    className={styles.articles__item_image}
                    src={item.image}
                    alt=''
                  ></img>
                  <p className={styles.articles__item_text}>{item.text}</p>
                  <hr />
                  <div className={styles.articles__item_footer}>
                    <div>
                      <FontAwesomeIcon icon={faUserEdit} />
                      <span>{item.author}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{item.data}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faFolder} />
                      <span>{item.category}</span>
                    </div>
                    <div>
                      <Link to={`/blog/${item.title}`}>
                        <span>Read more...</span>
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            <BlogSideBar articles={articles} changeCategory={this.setCategory} />
          </div>
        </div>
      </div>
    );
  }
}

BlogCategories.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      author: PropTypes.string,
      data: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

export default BlogCategories;
