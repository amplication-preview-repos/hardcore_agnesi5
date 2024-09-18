import { Course } from "../course/Course";

export type Teacher = {
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  hireDate: Date | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
