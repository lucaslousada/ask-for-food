import { ForwardRefExoticComponent } from 'react';
import {
  IconProps,
  ChartLineUp,
  Database,
  Users,
  Hamburger,
  File,
} from 'phosphor-react';

export type MenuCategories = 'dashboard' | 'registers';

type MenuCategoriesData = {
  [key in MenuCategories]: {
    name: string;
    icon: ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;

    pages: {
      name: string;
      url: string;
      icon: ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >;
    }[];
  };
};

export const menuCategoriesData: MenuCategoriesData = {
  dashboard: {
    name: 'Painel administrativo',
    icon: ChartLineUp,

    pages: [
      { name: 'Em breve', url: '/', icon: File },
      { name: 'Em breve', url: '/', icon: File },
    ],
  },

  registers: {
    name: 'Registros',
    icon: Database,

    pages: [
      { name: 'Clientes', url: '/registers/customers', icon: Users },
      { name: 'Produtos', url: '/registers/products', icon: Hamburger },
    ],
  },
};
