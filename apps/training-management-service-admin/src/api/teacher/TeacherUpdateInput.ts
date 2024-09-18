import { CourseUpdateManyWithoutTeachersInput } from "./CourseUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  courses?: CourseUpdateManyWithoutTeachersInput;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
};
