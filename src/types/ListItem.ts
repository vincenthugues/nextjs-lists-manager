export type ListItem = {
  id: string;
  listId: string;
  sortOrder: number;
  notes?: string;
  name?: string;
  imageUrl?: string;
  url?: string;
  fetchedInfo?: {
    title: string;
    description?: string;
    imageUrl?: string;
  };
  lastFetched?: Date;
};
