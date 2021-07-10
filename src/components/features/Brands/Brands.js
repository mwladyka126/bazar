import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swipeable from '../../common/Swipeable/Swipeable';

class Brands extends React.Component {
  state = {
    activePage: 0,
    windowWidth: 0,
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage });
  };

  changePage = (activePage, change) => {
    if (change === 1) {
      return this.setState({
        activePage: activePage + 1,
      });
    } else if (change === -1) {
      return this.setState({
        activePage: activePage - 1,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', e => this.reportWidth(e));
    window.addEventListener('resize', e => this.reportActivePage(e));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', e => this.reportWidth(e));
    window.removeEventListener('resize', e => this.reportActivePage(e));
  }

  reportWidth(e) {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  reportActivePage(e) {
    this.setState({
      activePage: 0,
    });
  }

  render() {
    const { brands } = this.props;
    const { activeBrands, activePage } = this.state;
    const reportItemsPerPage = () => {
      if (window.innerWidth > 1000) {
        return 6;
      } else if (window.innerWidth < 600) {
        return 3;
      } else {
        return 4;
      }
    };

    const brandsNumber = brands.filter(brands => brands.id === activeBrands);
    const pagesCount = Math.ceil(brandsNumber.length / reportItemsPerPage());
    const amountOfPages = Math.ceil(brands.length / reportItemsPerPage());

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(<p key={i}></p>);
    }

    const pageDecrease = () => {
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const pageIncrease = () => {
      if (activePage === pagesCount - 1) {
        return;
      } else {
        if (activePage < amountOfPages - 1) {
          this.handlePageChange(activePage + 1);
        } else {
          this.handlePageChange(activePage);
        }
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.wrapper}`}>
            <div className={styles.arrow} onClick={pageDecrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>
            <Swipeable
              activePage={this.state.activePage}
              changePage={(currentPage, change) => {
                if (change === 1) {
                  return this.setState({
                    activePage:
                      currentPage === pages.length - 1 ? currentPage : currentPage + 1,
                  });
                } else if (change === -1) {
                  return this.setState({
                    activePage: currentPage === 0 ? currentPage : currentPage - 1,
                  });
                }
              }}
            >
              <div className={'row ' + styles.brandBox}>
                {brands
                  .slice(
                    activePage * reportItemsPerPage(),
                    (activePage + 1) * reportItemsPerPage()
                  )
                  .map(brand => (
                    <div key={brand.id} className={styles.box}>
                      <img src={brand.image} alt={brand.name} />
                    </div>
                  ))}
              </div>
            </Swipeable>
            <div className={styles.arrow} onClick={pageIncrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  change: PropTypes.node,
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
