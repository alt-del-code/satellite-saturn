import type { CollectionEntry } from 'astro:content';

type SortableItem = CollectionEntry<'blog'> | CollectionEntry<'portfolio-items'>;
type SortValue = 'date' | 'dateAsc' | 'title';

const sortByDate = (a: SortableItem, b: SortableItem) => {
  if ('publishDate' in a.data && 'publishDate' in b.data) {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  }
  if ('completionDate' in a.data && 'completionDate' in b.data) {
    return new Date(b.data.completionDate).getTime() - new Date(a.data.completionDate).getTime();
  }
  return 0;
};

const sortByDateAsc = (a: SortableItem, b: SortableItem) => {
  if ('publishDate' in a.data && 'publishDate' in b.data) {
    return new Date(a.data.publishDate).getTime() - new Date(b.data.publishDate).getTime();
  }
  if ('completionDate' in a.data && 'completionDate' in b.data) {
    return new Date(a.data.completionDate).getTime() - new Date(b.data.completionDate).getTime();
  }
  return 0;
};

const sortByTitle = (a: SortableItem, b: SortableItem) => {
  return a.data.title.localeCompare(b.data.title);
};

const sortFunctions: Record<SortValue, (a: SortableItem, b: SortableItem) => number> = {
  date: sortByDate,
  dateAsc: sortByDateAsc,
  title: sortByTitle,
};

export const getSortFunction = (sortValue?: SortValue) => {
  return sortFunctions[sortValue || 'date'] || sortByDate;
};