enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

interface IUser {
  id: number | string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
}

export type UserLogin = Omit<IUser, "id" | "role">; 
export default IUser;
