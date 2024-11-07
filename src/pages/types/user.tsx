export type Users = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UsersInput = Omit<Users, "id">;
