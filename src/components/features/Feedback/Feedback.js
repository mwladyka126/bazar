import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import FeedbackContent from '../../common/FeedbackContent/FeedbackContent';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    fadeTrue: true,
  };

  makeFadeOut(event, newArgument) {
    event.preventDefault();
    this.setState({ fadeTrue: false });
    setTimeout(() => {
      this.makeFadeIn(newArgument);
    }, 600);
  }

  makeFadeIn(newArgument) {
    this.setState({ fadeTrue: true });
    this.setState({ activePage: newArgument });
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage, fadeTrue } = this.state;
    const pagesCount = feedbacks.length;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => this.makeFadeOut(event, i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-12 col-md-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <Swipeable
              activePage={this.state.activePage}
              changePage={(currentPage, change) => {
                if (change === 1) {
                  return this.setState({
                    activePage:
                      currentPage === dots.length - 1 ? currentPage : currentPage + 1,
                  });
                } else if (change === -1) {
                  return this.setState({
                    activePage: currentPage === 0 ? currentPage : currentPage - 1,
                  });
                }
              }}
            >
              <div className={`row ${fadeTrue ? styles.fadeIn : styles.fadeOut}`}>
                {feedbacks.slice(activePage, activePage + 1).map(item => (
                  <FeedbackContent key={item.id} {...item} />
                ))}
              </div>
            </Swipeable>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
      position: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
