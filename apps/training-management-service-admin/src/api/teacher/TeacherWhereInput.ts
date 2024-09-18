import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  courses?: CourseListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
