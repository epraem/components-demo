import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomStepperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public current = signal(0);

  public steps = signal(
    [
      { label: 'Personal Info' },
      { label: 'Education' },
      { label: 'Attachments' },
      { label: 'Preview' },
      { label: 'Submit' },
    ].map((step, index) => ({
      ...step,
      alphabetic: String.fromCharCode(65 + index),
    }))
  );

  onStepChange(index: number) {
    this.current.set(index);
  }
}
