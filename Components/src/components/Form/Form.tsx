import { Component, createRef, FormEvent } from 'react';
import { FormState, FormProps, FormRefs } from '@/utils/interfaces';
import {
  CheckInput,
  DateInput,
  DescInput,
  FileInput,
  Modal,
  PriceInput,
  RadioInput,
  SelectInput,
  TitleInput,
} from '../index';
import {
  validateDate,
  validateDesc,
  validateFile,
  validatePrice,
  validateRadio,
  validateSelect,
  validateTitle,
} from '@/validation';
import './style.scss';

export class Form extends Component<FormProps, FormState> {
  refObj: FormRefs;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: [],
      isSucceed: false,
    };
    this.refObj = {
      form: createRef(),
      title: createRef(),
      description: createRef(),
      category: createRef(),
      price: createRef(),
      collection: createRef(),
      favYes: createRef(),
      favNo: createRef(),
      stock: createRef(),
      img: createRef(),
    };
  }

  checkValid = async (): Promise<boolean> => {
    const { title, category, description, price, collection, favYes, favNo, img } = this.refObj;
    const titleError = validateTitle(title.current?.value as string);
    const descError = validateDesc(description.current?.value as string);
    const selectError = validateSelect(category.current?.value as string);
    const priceError = validatePrice(price.current?.value as string);
    const dateError = validateDate(collection.current?.value as string);
    const radioError = validateRadio({
      yes: favYes.current?.checked as boolean,
      no: favNo.current?.checked as boolean,
    });
    const fileError = validateFile(img.current?.files as FileList);

    const arr = [
      titleError,
      descError,
      selectError,
      priceError,
      dateError,
      radioError,
      fileError,
    ].filter((item) => item) as string[];

    await this.setState({ errors: arr });

    const isValid = this.state.errors.length < 1;

    if (isValid) await this.setState({ errors: [] });

    return isValid;
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { form, title, category, description, price, collection, favYes, stock, img } =
      this.refObj;
    const titleStr = title.current?.value as string;
    const categoryStr = category.current?.value as string;
    const descriptionStr = description.current?.value as string;
    const priceStr = price.current?.value as string;
    const collectionStr = collection.current?.value as string;
    const favorite = favYes.current?.checked ? 'yes' : 'no';
    const checkbox = stock.current?.checked as boolean;

    this.checkValid().then((isValid: boolean) => {
      if (isValid) {
        const file = img.current?.files?.[0] as Blob;
        const imgFile = URL.createObjectURL(file);

        this.props.addItem({
          title: titleStr,
          description: descriptionStr,
          category: categoryStr,
          price: priceStr,
          collection: collectionStr,
          favorite,
          img: imgFile,
          stock: checkbox,
        });
        this.setState({ isSucceed: true });

        setTimeout(() => {
          this.setState({ isSucceed: false });
          form.current?.reset();
        }, 1000);
      }
    });
  };

  render() {
    const { form, title, description, price, category, collection, favYes, favNo, stock, img } =
      this.refObj;

    return (
      <div className="form-container">
        <form className="form" ref={form} noValidate onSubmit={(e) => this.handleSubmit(e)}>
          <div className="wrapper">
            <SelectInput forwardRef={category} errors={this.state.errors} />
            <DateInput forwardRef={collection} errors={this.state.errors} />
          </div>
          <div className="wrapper">
            <TitleInput forwardRef={title} errors={this.state.errors} />
            <PriceInput forwardRef={price} errors={this.state.errors} />
          </div>
          <DescInput forwardRef={description} errors={this.state.errors} />
          <div className="wrapper">
            <RadioInput forwardRef={{ favYes, favNo }} errors={this.state.errors} />
            <CheckInput forwardRef={stock} errors={this.state.errors} />
          </div>
          <FileInput forwardRef={img} errors={this.state.errors} />
          <input className="form__submit" type="submit" />
        </form>
        {this.state.isSucceed && <Modal />}
      </div>
    );
  }
}
