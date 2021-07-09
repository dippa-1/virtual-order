export interface Item {
  name: string;
  count: number;
  description: string;
  tags: string[];
};

export interface Folder {
  name: string;
  description: string;
  isOpen: boolean;
  items: Item[];
};

export interface Container {
  name: string;
  folders: Folder[]; // folders.length === width*height
  description: string;
};