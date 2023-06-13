export type ListItem = {
  id: string;
  listId: string;
  name: string;
  sortOrder: number;
  notes?: string;
  url?: string;
  fetchedInfo?: {
    title: string;
    description?: string;
    heroImageUrl?: string;
  };
  imageUrl?: string;
  lastFetched?: Date;
};
