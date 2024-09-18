import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseWhereInput = {
  credits?: IntNullableFilter;
  description?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  teacher?: TeacherWhereUniqueInput;
  title?: StringNullableFilter;
};
