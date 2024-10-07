import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-custom-stepper',
  standalone: true,
  imports: [],
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
})
export class CustomStepperComponent {
  steps = input<
    Array<{
      label: string;
      svgIcon?: string;
      optional?: boolean;
      alphabetic?: string;
      count?: boolean;
    }>
  >([]);

  currentStep = input(0);
  stepperWidth = input(570);
  isLinear = input(false);

  currentStepChange = output<number>();

  onStepClick(index: number) {
    if (!this.isLinear() || index <= this.currentStep()) {
      this.currentStepChange.emit(index);
    }
  }

  progressPercentage(): number {
    if (this.steps().length > 1) {
      return (this.currentStep() / (this.steps().length - 1)) * 100;
    }
    return 0;
  }
}
