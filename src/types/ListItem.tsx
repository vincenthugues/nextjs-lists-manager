export type ListItem = {
  id: string;
  listId: string;
  name: string;
  sortOrder: number;
  notes?: string;
  url?: string;
  pulledInfo?: {
    title: string;
    description?: string;
    heroImageUrl?: string;
  };
  imageUrl?: string;
};
