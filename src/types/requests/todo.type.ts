import { ItemDto } from '../common/item-dto.type';
import { ListQuery } from '../common/list-query.type';
import { CategoryEntity } from '../entities/category.entity';
import { TodoEntity } from '../entities/todo.entity';

export type TodoItem = TodoEntity & {
  categories: CategoryEntity[];
};

export type ListTodosResponse = {
  todos: TodoItem[];
  total: number;
};

export type ListTodosQuery = ListQuery & {
  deadlineFrom?: string;
  deadlineTo?: string;
  categoryIds?: number[];
  priorities?: number[];
};

export type TodoDetail = TodoItem & {};

export type DetailTodoResponse = {
  todo: TodoDetail;
};

export type CreateTodoBody = {
  name: string;
  deadline?: string | null;
  categories?: ItemDto[];
};

export type UpdateTodoBody = Partial<CreateTodoBody>;
