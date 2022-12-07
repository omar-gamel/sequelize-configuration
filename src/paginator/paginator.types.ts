export interface PaginationRes<T> {
  items: T[];
  pageInfo: {
    page?: number;
    nextCursor?: string;
    beforeCursor?: string;
    hasNext: boolean;
    hasBefore: boolean;
  };
}

