import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/services/task/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // public tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.get()
      .subscribe((res: Task[]) => {
        this.tasks = res
      });
  }

}
