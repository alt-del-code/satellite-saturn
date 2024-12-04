export interface Item {
    id: string;
    name: string;
    // Add other properties as needed
}

export interface Collection {
    id: string;
    title: string;
    items: Item[];
} 