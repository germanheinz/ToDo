import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filterValid } from './filter/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterValid): Todo[] {

    switch (filter) {
      case 'all':
        return todos.filter(todo => todo);
      
      case 'active':
      return todos.filter(todo => !todo.completed);
      
      case 'completed':
      return todos.filter(todo => todo.completed);
      
      default:
        return todos;
    }



    return todos;
  }

}
