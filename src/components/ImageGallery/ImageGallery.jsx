import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { fetchImages } from 'helpers/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    items: null,
    page: 1,
    isLoading: false,
    isShowButton: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { page } = this.state;
    const options = {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    };
    const perPage = 12;

    if (prevProps.searchText !== searchText) {
      this.setState({
        page: 1,
        items: null,
        isShowButton: false,
      });
    }

    if (
      prevProps.searchText !== searchText ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setState({
        isLoading: true,
      });
      try {
        const images = await fetchImages(searchText, page, perPage);
        this.setState(prevState =>
          prevState.items
            ? {
                items: [...prevState.items, ...images.hits],
                isShowButton: true,
              }
            : {
                items: images.hits,
                isShowButton: true,
              }
        );

        const lastPage = Math.ceil(images.totalHits / perPage);

        if (!images.totalHits || page === lastPage) {
          this.setState({
            isShowButton: false,
          });

          toast.error(`No images for query ${searchText} `, options);
        }
      } catch {
        toast.error(
          'Oops, something went wrong. Repeat one more time!',
          options
        );
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  onLoadMoreClick = page => {
    this.setState({ page });
  };

  render() {
    const { items, page, isLoading, isShowButton } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {items && (
          <GalleryList>
            {items.map((item, idx) => (
              <GalleryItem key={idx}>
                <ImageGalleryItem item={item} />
              </GalleryItem>
            ))}
          </GalleryList>
        )}
        {isShowButton && (
          <Button page={page} onBtnClick={this.onLoadMoreClick} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchText: PropTypes.string,
};
