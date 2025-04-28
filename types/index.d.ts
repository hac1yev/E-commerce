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
}