interface Item{
    id: string;
    name: string;
    amount: number;
    discount: number;
    total: number;
    finished: boolean;
}

interface Reviews{
    id: string;
    item_id: string;
    name: string;
    rating: number;
    title: string;
    description: string;
     screenshots?: Array<string>;
}

interface description{
    id: string;
    item_id: string;
    description: string;
    videos?: Array<string>;
     lists?: Array<string>;
    images:Array<{name: string, desc: string}>;
}

interface favourites{
    id: string;
    item_id: string;
    user_id: string;

}