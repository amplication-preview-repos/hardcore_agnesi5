import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseUpdateInput = {
  credits?: number | null;
  description?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};
