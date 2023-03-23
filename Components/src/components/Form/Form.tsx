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
import { validateSelect } from '@/validation/validation';
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

  checkValid = (): void => {
    const { category } = this.refObj;
    const selectError = validateSelect(category.current?.value as string);

    if (selectError) {
      this.setState({ errors: [...this.state.errors, selectError] });
    }
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    this.checkValid();
    // const file = this.refObj.img.current?.files?.[0] as Blob;
    // const fileObj = URL.createObjectURL(file);

    // const { category } = this.refObj;
    // this.checkValid(category.current?.value as string);

    // const isValidSelect = validateSelect(category.current?.value as string);
    // console.log(isValidSelect);

    // console.log(this.refObj.title.current?.value);
    // console.log(this.refObj.description.current?.value);
    // console.log(this.refObj.category.current?.value);
    // console.log(this.refObj.collection.current?.value);
    // console.log(this.refObj.price.current?.value);
    // console.log(this.refObj.forMen.current?.checked);
    // console.dir(this.refObj.forWomen.current?.checked);
    // console.log(this.refObj.isFavorite.current?.checked);
    // console.log(this.refObj.img.current?.files?.[0]);
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
      <form className="form" ref={form} onSubmit={(e) => this.handleSubmit(e)}>
        <TitleInput forwardRef={title} />
        <DescInput forwardRef={description} />
        <SelectInput forwardRef={category} errors={this.state.errors} />
        <PriceInput forwardRef={price} />
        <RadioInput forwardRef={{ forMen: forMen, forWomen: forWomen }} />
        <DateInput forwardRef={collection} />
        <FileInput forwardRef={img} />
        <CheckInput forwardRef={isFavorite} />

        <input type="submit" />
      </form>
    );
  }
}
