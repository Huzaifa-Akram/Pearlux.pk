export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  megaMenu?: boolean;
  sections?: {
    title: string;
    items: Menu[];
  }[];
};
