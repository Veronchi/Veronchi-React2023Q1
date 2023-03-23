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
import './style.scss';

export class Form extends Component<FormProps, FormState> {
  refObj: FormRefs;

  constructor(props: FormProps) {
    super(props);
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

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const file = this.refObj.img.current?.files?.[0] as Blob;
    const fileObj = URL.createObjectURL(file);

    console.log(fileObj);

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
        <SelectInput forwardRef={category} />
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
