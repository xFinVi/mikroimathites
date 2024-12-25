export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  permissions: string[];
  roles: string[];
}

export type Auth = {
  user: {
    data: User;
  };
  isAdmin: boolean; // Add the isAdmin field here at the top level of Auth
};

export type PaginatedData<T = any> = {
  data: T[];
};

interface Craft {
  id: number;
  title: string;
  description: string;
  img_url: string;
  pdf_url: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: Auth;
};
