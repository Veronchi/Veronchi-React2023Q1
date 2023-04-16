import { FC, useEffect, useState } from 'react';
import { FormItemInteface } from '@/utils/interfaces';
import { useForm } from 'react-hook-form';
import { Modal } from '../index';
import { useAppDispatch } from '@/hooks/redux';
import { updateForm } from '@/store/reducers/FormSlice';
import './style.scss';

export const Form: FC = () => {
  const [isSucceed, setisSucceed] = useState(false);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormItemInteface>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const submit = ({
    title,
    price,
    category,
    collection,
    radio,
    description,
    stock,
    img,
  }: FormItemInteface) => {
    const file = img[0] as Blob;
    const imgFile = URL.createObjectURL(file) as string;

    dispatch(
      updateForm({
        title,
        description,
        category,
        price,
        collection,
        radio,
        stock,
        image: imgFile,
      })
    );
    setisSucceed(true);
    setTimeout(() => {
      setisSucceed(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(submit)} data-testid="form">
        <div className="wrapper">
          <div className="form__wrapper">
            <label htmlFor="category">
              Category:
              <select
                {...register('category', {
                  validate: {
                    empty: (value) => {
                      if (value.includes('Select')) {
                        return 'Select a category';
                      }
                    },
                  },
                })}
                name="category"
                className="form__input form__input_select"
              >
                <option defaultValue="" hidden>
                  Select category
                </option>
                <option value="Sweater">Sweaters</option>
                <option value="Jeans">Jeans</option>
                <option value="Top">Top</option>
                <option value="Scarf">Scarf</option>
                <option value="Dress">Dress</option>
                <option value="Jumpsuit">Jumpsuit</option>
                <option value="Socks">Socks</option>
              </select>
            </label>
            <span className="error-message error-message_middle">
              {errors.category && errors.category.type === 'empty' && errors.category.message}
            </span>
          </div>
          <div className="form__wrapper">
            <label htmlFor="collection">
              Collection:
              <input
                {...register('collection', { required: 'This field cannot be empty' })}
                type="date"
                name="collection"
                defaultValue=""
                className="form__input"
              />
            </label>
            <span className="error-message error-message_middle">
              {errors.collection && errors.collection.message}
            </span>
          </div>
        </div>
        <div className="wrapper">
          <div className="form__wrapper">
            <label className="form__label">
              Title:
              <input
                type="text"
                {...register('title', {
                  required: 'Enter brand name',
                  minLength: {
                    value: 2,
                    message: 'This field cannot be less than 2 characters',
                  },
                })}
                name="title"
                className="form__input"
                defaultValue=""
              />
            </label>
            <span className="error-message">
              {errors.title && errors.title.type === 'required' && errors.title.message}
            </span>
            <span className="error-message">
              {errors.title && errors.title.type === 'minLength' && errors.title.message}
            </span>
          </div>
          <div className="form__wrapper">
            <label className="form__label">
              Price:
              <input
                type="number"
                {...register('price', {
                  required: 'Enter product price',
                  min: {
                    value: 1,
                    message: 'price must be greater than zero',
                  },
                })}
                className="form__input form__input_price"
                min="0"
                name="price"
                inputMode="numeric"
                defaultValue=""
              />
            </label>
            <span className="error-message">
              {errors.price && errors.price.type === 'required' && errors.price.message}
            </span>
            <span className="error-message">
              {errors.price && errors.price.type === 'min' && errors.price.message}
            </span>
          </div>
        </div>
        <div className="form__wrapper form__wrapper_row">
          <label htmlFor="desc" className="form__label_area">
            Description:
          </label>
          <textarea
            {...register('description', {
              required: 'Enter product description',
              minLength: {
                value: 5,
                message: 'This field cannot be less than 5 characters',
              },
            })}
            name="description"
            defaultValue=""
            className="form__input form__input_area"
          />
          <span className="error-message error-message_desc">
            {errors.description &&
              errors.description.type === 'required' &&
              errors.description.message}
          </span>
          <span className="error-message error-message_desc">
            {errors.description &&
              errors.description.type === 'minLength' &&
              errors.description.message}
          </span>
        </div>
        <div className="wrapper">
          <div className="form__wrapper form__wrapper_radio">
            <span className="form__label">Add to favorite: </span>
            <input
              type="radio"
              {...register('radio', { required: 'Choose one option' })}
              name="radio"
              value="yes"
              defaultChecked={false}
              id="yes"
              className="form__input_radio"
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              {...register('radio', { required: 'Choose one option' })}
              name="radio"
              value="no"
              defaultChecked={false}
              id="no"
              className="form__input_radio"
            />
            <label htmlFor="no">No</label>
            <span className="error-message error-message_radio">
              {errors.radio && errors.radio.message}
            </span>
          </div>
          <div className="form__wrapper form__wrapper_radio">
            <label htmlFor="stock">In stock:</label>
            <label>
              <input
                type="checkbox"
                {...register('stock', { required: 'Choose one option' })}
                defaultChecked={false}
                name="stock"
                value="yes"
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                {...register('stock', { required: 'Choose one option' })}
                defaultChecked={false}
                value="no"
                name="stock"
              />{' '}
              No
            </label>
            <span className="error-message error-message_radio">
              {errors.stock && errors.stock.message}
            </span>
          </div>
        </div>
        <div className="form__wrapper form__wrapper_file">
          <label className="file-label" htmlFor="img">
            Click me to upload image
          </label>
          <input
            type="file"
            {...register('img', {
              required: 'No file chosen',
              validate: {
                moreThan1MB: (files) =>
                  (files[0] as File).size < 1000000 || 'file size cannot be more than 1 MB',
                imgType: (value: FileList) =>
                  (value.length > 0 && value[0].type.startsWith('image')) || 'Only images requerd',
              },
            })}
            name="img"
            id="img"
            accept="image/jpeg,image/png"
            className="file-input"
          ></input>
          <span className="error-message error-message_file">
            {errors.img && errors.img.type === 'required' && errors.img.message}
          </span>
          <span className="error-message error-message_file">
            {errors.img && errors.img.type === 'imgType' && errors.img.message}
          </span>
          <span className="error-message error-message_file">
            {errors.img && errors.img.type === 'moreThan1MB' && errors.img.message}
          </span>
        </div>
        <input className="form__submit" type="submit" />
      </form>
      {isSucceed && <Modal />}
    </div>
  );
};
