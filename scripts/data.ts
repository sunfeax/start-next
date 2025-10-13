import { StaticImageData } from 'next/image';
import componentsImg from '@/public/components.png';
import propsImg from '@/public/config.png';
import jsxImg from '@/public/jsx-ui.png';
import stateImg from '@/public/state-mgmt.png';

interface CoreConcept {
  image: StaticImageData;
  title: string;
  description: string;
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: componentsImg,
    title: 'Componentes',
    description:
      'Elemento básico de la UI - La interfaz de usuario se compone combinando varios componentes.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Crea código del estilo HTML potencialmente dinámico para definir el renderizado final de la página.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Haz tus componentes configurables (y reusables) mediante el paso de datos de entrada.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'Datos gestionados por React que con los cambios de valor, provocan el renderizado del componente para actualizar la UI al cambio.',
  },
];