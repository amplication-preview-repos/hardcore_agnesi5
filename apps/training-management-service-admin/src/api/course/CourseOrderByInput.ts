import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  credits?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  teacherId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
