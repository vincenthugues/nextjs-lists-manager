export type ListType = 'text' | 'links' | 'images';

export type List = {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  type?: ListType;
  hasCheckboxes?: boolean;
  hasLinkAutofetch?: boolean;
};
