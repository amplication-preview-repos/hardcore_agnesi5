import { CourseCreateNestedManyWithoutTeachersInput } from "./CourseCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  courses?: CourseCreateNestedManyWithoutTeachersInput;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
};
