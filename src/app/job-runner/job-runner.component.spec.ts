import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRunnerComponent } from './job-runner.component';

describe('JobRunnerComponent', () => {
  let component: JobRunnerComponent;
  let fixture: ComponentFixture<JobRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
