import { Component } from 'react';
import './style.scss';

export class Modal extends Component {
  render() {
    return (
      <div className="modal" data-testid="modal">
        <h1 className="modal__title">Product created successfully!</h1>
      </div>
    );
  }
}
