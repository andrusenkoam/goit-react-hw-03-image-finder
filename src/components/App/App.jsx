import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = searchText => {
    this.setState({ searchText: searchText.toLowerCase().trim() });
  };

  render() {
    const { searchText } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchText={searchText} />
        <ToastContainer />
      </Container>
    );
  }
}
