export interface RecipeInstructionsLstModel {
  name: string;
  steps: RecipeInstructionStepModel[];
}
export interface RecipeInstructionStepModel {
  number: number;
  step: string;
}
