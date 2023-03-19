import { ChangeEvent, Component } from 'react';
import { SearchProps, SearchValue } from 'utils/interfaces';
import './style.scss';

export class SearchBar extends Component<SearchProps, SearchValue> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('inputValue') || '',
    };
  }

  handleChange(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: e.target.value });
  }

  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('inputValue') || '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.value);
  }

  render() {
    return (
      <form className="search">
        <span className="input-container">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
        </span>
      </form>
    );
  }
}
