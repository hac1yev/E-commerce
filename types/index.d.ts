declare type CardType = {
    id: string;
    discount: number;
    image: StaticImageData;
    title: string;
    description: string;
    additionalInfo: string;
    kg: number;
    price: number;
    value: number;
    count: number;
    category: string;
    life: object;
    tags: string[];
    brand: string;
    productType: string;
    reviewCount: number;
    ratingStars: { five: number, four: number, three: number, two: number, one: number };
};

declare type AddProductSelectType = {
    [key: string]: {
        value: number;
        label: string;
    }[]
};

declare type OptionType = { value: number; label: string };

declare type ProductItem = {
  title: string;
  life: string;
  discount: number | string;
  price: number | string;
  brand: string;
  tags: OptionType[];
  categories: OptionType[];
  type: OptionType | number | string;
  status: OptionType | number | string;
  image: {
    [key: string]: string;
  };
  description: string;
  additionalInfo: string;
};