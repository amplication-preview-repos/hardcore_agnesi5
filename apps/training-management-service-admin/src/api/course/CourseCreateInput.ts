import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseCreateInput = {
  credits?: number | null;
  description?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};
