declare type ProductType = {
  id: number;
  discount: number;
  image: StaticImageData;
  title: string;
  description: string;
  additionalInfo: string;
  price: number;
  value: number;
  reviewCount: number;
  life: Date;
  createdAt: Date;
  views: number;
  type: number;
  status: number;
  brand: string;
  salesCount: number;
  category: string[];
  tags: string[];
  ratingStars: { 
    [key: string]: number;
  };
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

declare type ProductDetailContentType = {
  brand: string;
  title: string;
  category: stirng[];
  tags: string[];
  description: string;
  price: number;
  value: number;
  life: Date;
  type: number;
  image: StaticImageData;
  ratingStars: { 
    [key: string]: number;
  };
}

declare type ProductDetailTabContentType = {
  id: number;
  additionalInfo: string;
  brand: string;
  type: number;
  ratingStars: { 
    [key: string]: number;
  };
}