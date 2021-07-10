import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import BlogSideBar from './BlogSideBarContainer';
import { Link } from 'react-router-dom';

class BlogLayout extends React.Component {
  render() {
    const { articles, blogFilters } = this.props;
    console.log('blogFilters.blogFilters:', blogFilters.blogFilters);
    console.log('blogFilters.searchPhrase:', blogFilters.searchPhrase);

    // zmiana formatu daty artykułu (np. z '2021.02.22' na 'February 2021')
    const parseDataFromStore = data => {
      const dataWithoutDays = data.substr(0, 7);

      const parts = dataWithoutDays.split('.');
      const newData = parts[1] + ' ' + parts[0];

      if (parts[1] === '01') {
        return newData.replace('01', 'January');
      }
      if (parts[1] === '02') {
        return newData.replace('02', 'February');
      }
      if (parts[1] === '03') {
        return newData.replace('03', 'March');
      }
      if (parts[1] === '04') {
        return newData.replace('04', 'April');
      }
      if (parts[1] === '05') {
        return newData.replace('05', 'May');
      }
      if (parts[1] === '06') {
        return newData.replace('06', 'Juny');
      }
      if (parts[1] === '07') {
        return newData.replace('07', 'July');
      }
      if (parts[1] === '08') {
        return newData.replace('08', 'August');
      }
      if (parts[1] === '09') {
        return newData.replace('09', 'September');
      }
      if (parts[1] === '10') {
        return newData.replace('10', 'October');
      }
      if (parts[1] === '11') {
        return newData.replace('11', 'November');
      }
      if (parts[1] === '12') {
        return newData.replace('12', 'December');
      }
    };

    // filtrowanie artykułów wg wybranego kryterium w sidebarze (kategoria, autor, data)
    const artByCat = articles.filter(
      item =>
        item.category === blogFilters.blogFilters ||
        item.author === blogFilters.blogFilters ||
        parseDataFromStore(item.data) === blogFilters.blogFilters ||
        item.lead.indexOf(blogFilters.searchPhrase) > 0 ||
        item.text.indexOf(blogFilters.searchPhrase) > 0
    );
    console.log('artByCat', artByCat);

    // const artBySearch = articles.filter(item => item.lead.indexOf(blogFilters.searchPhrase) > 0);

    let repository = '';
    if (
      blogFilters.blogFilters !== undefined ||
      null ||
      '' ||
      blogFilters.searchPhrase !== undefined || null || ''
    ) {
      repository = artByCat;
    } else {
      repository = articles;
    }
    console.log('repository', repository);

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
                  <p className={styles.articles__item_text}>{item.lead}</p>
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

            <BlogSideBar articles={articles} />
          </div>
        </div>
      </div>
    );
  }
}

BlogLayout.propTypes = {
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
  blogFilters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default BlogLayout;
