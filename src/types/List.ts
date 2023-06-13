export type ListStyle = 'image' | 'links' | 'text';

export type List = {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  style?: ListStyle;
  hasCheckboxes?: boolean;
  hasLinkAutofetch?: boolean;
};
