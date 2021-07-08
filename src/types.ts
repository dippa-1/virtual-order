export interface Item {
  name: string;
  count: number;
  description: string;
  tags: string[];
};

export interface Folder {
  items: Item[];
  isOpen: boolean;
};

export interface Container {
  name: string;
  width: number;
  height: number;
  folders: Folder[]; // folders.length === width*height
};