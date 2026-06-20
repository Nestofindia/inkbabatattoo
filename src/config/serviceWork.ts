import { FEATURED_PREVIEW_VIDEOS } from './homeVideos';

export type ServiceWorkItem = {
  id: number;
  type: 'video' | 'image';
  artist: string;
  category: string;
  src: string;
  alt: string;
};

/** Piercing portfolio — shown on /piercing-services */
export const PIERCING_WORK_ITEMS: ServiceWorkItem[] = [
  // {
  //   id: 1,
  //   type: 'video',
  //   artist: 'Chakti',
  //   category: 'Piercing',
  //   src: FEATURED_PREVIEW_VIDEOS[0],
  //   alt: 'Piercing work by Chakti',
  // },
  {
    id: 1,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_5.jpg?updatedAt=1779518327170',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 2,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_7.jpg?updatedAt=1779518327127',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 3,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_8.jpg?updatedAt=1779518327117',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 4,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_6.jpg?updatedAt=1779518327107',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 5,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_4.jpg?updatedAt=1779517827728',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 6,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_3.jpg?updatedAt=1779517827719',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 7,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakti_1.jpg?updatedAt=1779517827713',
    alt: 'Chakti professional piercing artist',
  },
  {
    id: 8,
    type: 'image',
    artist: 'Chakti',
    category: 'Piercing',
    src: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/@chakti.onbody/chakt_2.jpg?updatedAt=1779517827656',
    alt: 'Chakti professional piercing artist',
  },
];


/** Tattoo portfolio — shown on /tattoo-services */
export const TATTOO_WORK_ITEMS: ServiceWorkItem[] = [
  {
    id: 1,
    type: 'video',
    artist: 'Dana Sha',
    category: 'Geometric',
    src: FEATURED_PREVIEW_VIDEOS[1],
    alt: 'Geometric tattoo by Dana Sha',
  },
  {
    id: 2,
    type: 'video',
    artist: 'Giada',
    category: 'Geometric',
    src: FEATURED_PREVIEW_VIDEOS[2],
    alt: 'Geometric tattoo by Giada',
  },
  {
    id: 3,
    type: 'video',
    artist: 'Pallada',
    category: 'Ornamental',
    src: FEATURED_PREVIEW_VIDEOS[3],
    alt: 'Ornamental tattoo by Pallada',
  },
  {
    id: 4,
    type: 'video',
    artist: 'Sachin Aarote',
    category: 'Traditional',
    src: FEATURED_PREVIEW_VIDEOS[4],
    alt: 'Traditional tattoo by Sachin Aarote',
  },
  {
    id: 5,
    type: 'video',
    artist: 'Satish',
    category: 'Traditional',
    src: FEATURED_PREVIEW_VIDEOS[5],
    alt: 'Traditional tattoo by Satish',
  },
];
