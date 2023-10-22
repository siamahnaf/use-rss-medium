export interface Article {
    title: string;
    description: string;
    image: string;
    author: string;
    link: string;
    guid: string;
    date: Date;
}

export type State = {
    status: "error" | "connected" | "failed";
    articles: null | Article[];
    error: any | null;
}