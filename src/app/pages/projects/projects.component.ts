import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectHttpService } from '../../services/http/project.http.service';
import { TaskHttpService } from '../../services/http/task.http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectHttpService: ProjectHttpService,
    private taskHttpService: TaskHttpService
  ) { }

  projects: Array<any>;

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    try {
      this.projectHttpService
        .select()
        .subscribe(
          async ({ result }: any) => this.projects = await Promise
            .all(result.map(async project => {
              const tasks = await this.getTaskList(project._id);
              project.openTasks = this.getTasksByStatus(tasks, 'open');
              project.closedTasks = this.getTasksByStatus(tasks, 'closed');
              return project
            })),
          message => alert(message)
        )
    } catch (err) {
      alert(err)
    }
  }

  deleteProject(project) {
    this.projectHttpService
      .delete(project)
      .subscribe(
        () => this.getProjectList(),
        message => alert(message)
      )
  }

  editProject(form: NgForm, project) {
    setTimeout(() => form.setValue({ name: project.name}), 0);
    project.editing = true;
  }

  saveProject(form: NgForm, project) {
    if (form.valid) {
      this.projectHttpService
        .update(project._id, form.value)
        .subscribe(
          () => this.getProjectList(),
          message => alert(message)
        )
    }
  }

  getTaskList(project: string) {
    return new Promise((resolve, reject) => {
      this.taskHttpService
        .select(project)
        .subscribe(
          async ({ result }: any) => resolve(result),
          message => reject(message)
        )
    });
  }

  private getTasksByStatus(tasks: any, status: string) {
    return tasks.filter(task => task.status === status)
  }

  setTaskClosed(task) {
    this.taskHttpService
      .close(task)
      .subscribe(
        () => this.getProjectList(),
        message => alert(message)
      )
  }

  deleteTask(task) {
    this.taskHttpService
      .delete(task)
      .subscribe(
        () => this.getProjectList(),
        message => alert(message)
      )
  }

  editTask(form: NgForm, task) {
    setTimeout(() => form.setValue({ description: task.description}), 0);
    task.editing = true;
  }

  saveTask(form: NgForm, task) {
    if (form.valid) {
      this.taskHttpService
        .update(task._id, form.value)
        .subscribe(
          () => this.getProjectList(),
          message => alert(message)
        )
    }
  }

  onProjectFormSubmit(form: NgForm) {
    if (form.valid) {
      this.projectHttpService
        .create(form.value)
        .subscribe(
          () => {
            form.resetForm();
            this.getProjectList();
          },
          message => alert(message)
        )
    }
  }

  onProjectEditFormSubmit(form: NgForm, project) {
    if (form.valid) {
      this.projectHttpService
        .update(project, form.value)
        .subscribe(
          () => this.getProjectList(),
          message => alert(message)
        )
    }
  }

  onTaskFormSubmit(form: NgForm, project: string) {
    if (form.valid) {
      this.taskHttpService
        .create({ ...form.value, project })
        .subscribe(
          () => {
            form.resetForm();
            this.getProjectList();
          },
          message => alert(message)
        )
    }
  }

  onTaskEditFormSubmit(form: NgForm, task) {
    if (form.valid) {
      this.taskHttpService
        .update(task, form.value)
        .subscribe(
          () => {
            form.resetForm();
            this.getProjectList();
          },
          message => alert(message)
        )
    }
  }
}
