import { Component, createRef, FormEvent } from 'react';
import { FormState, FormProps, FormRefs } from '@/utils/interfaces';
import {
  CheckInput,
  DateInput,
  DescInput,
  FileInput,
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
} from '@/validation/validation';
import './style.scss';

export class Form extends Component<FormProps, FormState> {
  refObj: FormRefs;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: [],
    };
    this.refObj = {
      form: createRef(),
      title: createRef(),
      description: createRef(),
      category: createRef(),
      price: createRef(),
      collection: createRef(),
      forMen: createRef(),
      forWomen: createRef(),
      isFavorite: createRef(),
      img: createRef(),
    };
  }

  checkValid = async (): Promise<boolean> => {
    const { title, category, description, price, collection, forMen, forWomen, img } = this.refObj;
    const titleError = validateTitle(title.current?.value as string);
    const descError = validateDesc(description.current?.value as string);
    const selectError = validateSelect(category.current?.value as string);
    const priceError = validatePrice(price.current?.value as string);
    const dateError = validateDate(collection.current?.value as string);
    const radioError = validateRadio({
      men: forMen.current?.checked as boolean,
      women: forWomen.current?.checked as boolean,
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
    const { title, category, description, price, collection, forMen, forWomen, isFavorite, img } =
      this.refObj;
    const titleStr = title.current?.value as string;
    const categoryStr = category.current?.value as string;
    const descriptionStr = description.current?.value as string;
    const priceStr = price.current?.value as string;
    const collectionStr = collection.current?.value as string;
    const radio = forMen || forWomen;
    const forWhom = radio.current?.checked as boolean;
    const checkbox = isFavorite.current?.checked as boolean;

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
          forWhom,
          img: imgFile,
          isFavorite: checkbox,
        });
      }
    });
  };

  render() {
    const {
      form,
      title,
      description,
      price,
      category,
      collection,
      forMen,
      forWomen,
      isFavorite,
      img,
    } = this.refObj;

    return (
      <form className="form" ref={form} noValidate onSubmit={(e) => this.handleSubmit(e)}>
        <TitleInput forwardRef={title} errors={this.state.errors} />
        <DescInput forwardRef={description} errors={this.state.errors} />
        <SelectInput forwardRef={category} errors={this.state.errors} />
        <PriceInput forwardRef={price} errors={this.state.errors} />
        <RadioInput
          forwardRef={{ forMen: forMen, forWomen: forWomen }}
          errors={this.state.errors}
        />
        <DateInput forwardRef={collection} errors={this.state.errors} />
        <FileInput forwardRef={img} errors={this.state.errors} />
        <CheckInput forwardRef={isFavorite} errors={this.state.errors} />

        <input type="submit" />
      </form>
    );
  }
}
