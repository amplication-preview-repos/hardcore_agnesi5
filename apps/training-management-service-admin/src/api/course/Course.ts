import { Enrollment } from "../enrollment/Enrollment";
import { Teacher } from "../teacher/Teacher";

export type Course = {
  createdAt: Date;
  credits: number | null;
  description: string | null;
  enrollments?: Array<Enrollment>;
  id: string;
  teacher?: Teacher | null;
  title: string | null;
  updatedAt: Date;
};
