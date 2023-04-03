import { FC } from 'react';
import './style.scss';

export const Modal: FC = () => {
  return (
    <div className="modal" data-testid="modal">
      <h1 className="modal__title">Product created successfully!</h1>
    </div>
  );
};
