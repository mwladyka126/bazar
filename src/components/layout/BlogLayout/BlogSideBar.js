import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class BlogSideBar extends React.Component {
  handleCategory(categoryName) {
    this.props.addCategory(categoryName);
    console.log('categoryName w BlogSideBar', categoryName);
  }

  handleSearch(phrase) {
    this.props.changeSearchPhrase(phrase);
  }

  resetState() {
    this.handleCategory(undefined);
    this.handleSearch(undefined);
  }

  render() {
    const { articles } = this.props;
    console.log('articles', articles);

    // wygenerowanie autorów (lista unikalnych nazwisk)
    const articlesAuthor = [];
    for (let article of articles) {
      if (articlesAuthor.indexOf(article.author) < 0) {
        articlesAuthor.push(article.author);
      }
    }

    // wygenerowanie listy unikalnych kategorii
    const articlesCategories = [];
    for (let article of articles) {
      if (articlesCategories.indexOf(article.category) < 0) {
        articlesCategories.push(article.category);
      }
    }

    // archiwum - wygenerowanie listy miesiąc.rok z postami
    const articlesData = [];
    for (let article of articles) {
      if (articlesData.indexOf(article.data) < 0) {
        articlesData.push(article.data);
      }
    }
    const articlesDataWIthoutDays = [];
    articlesData.forEach(el => {
      articlesDataWIthoutDays.push(el.substr(0, 7));
    });

    const printNameMounth = data => {
      const partOfData = data.substr(4);
      if (partOfData === '.01') {
        return data.replace('.01', '.January');
      }
      if (partOfData === '.02') {
        return data.replace('.02', '.February');
      }
      if (partOfData === '.03') {
        return data.replace('.03', '.March');
      }
      if (partOfData === '.04') {
        return data.replace('.04', '.April');
      }
      if (partOfData === '.05') {
        return data.replace('.05', '.May');
      }
      if (partOfData === '.06') {
        return data.replace('.06', '.Juny');
      }
      if (partOfData === '.07') {
        return data.replace('.07', '.July');
      }
      if (partOfData === '.08') {
        return data.replace('.08', '.August');
      }
      if (partOfData === '.09') {
        return data.replace('.09', '.September');
      }
      if (partOfData === '.10') {
        return data.replace('.10', '.October');
      }
      if (partOfData === '.11') {
        return data.replace('.11', '.November');
      }
      if (partOfData === '.12') {
        return data.replace('.12', '.December');
      }
    };
    const articlesDataNew = [];
    for (let article of articlesDataWIthoutDays) {
      const formatArticle = printNameMounth(article);

      if (articlesDataNew.indexOf(formatArticle) < 0) {
        articlesDataNew.push(formatArticle);
      }
    }

    const formatArticlesDate = [];
    for (let item of articlesDataNew) {
      let itemYear = item.substr(0, 4);
      let itemMounth = item.substr(5);
      let newItem = itemMounth + ' ' + itemYear;
      formatArticlesDate.push(newItem);
    }

    return (
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__search}>
          <input
            type='text'
            placeholder='Search in blog...'
            onChange={event => this.handleSearch(event.currentTarget.value)}
          />
        </div>
        <div className={styles.sidebar__posts}>
          <div onClick={event => this.resetState()} className={styles.allPosts}>
            <Link to={`/blog`}>
              <p>All Posts</p>
            </Link>
          </div>
          <h5>Recent Post</h5>
          <ul>
            {articles.map(item => (
              <li key={item.id}>
                <Link to={`/blog/${item.title}`} className={styles.item}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebar__comments}>
          <h5>Recent Comments</h5>
          <ul>
            {articlesAuthor.map((item, index) => (
              <li key={index} onClick={event => this.handleCategory(item)}>
                <Link to={`/blog`} className={styles.item}>
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebar__archives}>
          <h5>Archives</h5>
          <ul>
            {formatArticlesDate.map((item, index) => (
              <li key={index} onClick={event => this.handleCategory(item)}>
                <Link to={`/blog`} className={styles.item}>
                  <FontAwesomeIcon icon={faCalendarAlt} className={styles.item__icon} />
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebar__categories}>
          <h5>Categories</h5>
          <ul>
            {articlesCategories.map((category, index) => (
              <li key={index} onClick={event => this.handleCategory(category)}>
                <Link to={`/blog`} className={styles.item}>
                  <FontAwesomeIcon icon={faFolder} className={styles.item__icon} />
                  <span>{category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

BlogSideBar.propTypes = {
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
  changeCategory: PropTypes.func,
  addCategory: PropTypes.func,
  changeSearchPhrase: PropTypes.func,
};

export default BlogSideBar;
