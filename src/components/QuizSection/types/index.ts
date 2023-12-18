export interface OptionsProps {
  answer: string;
  category: number;
}

export interface QuestionProps {
  stage: number;
  question: string;
  options: Array<OptionsProps>;
}

export interface NavProps {
  stage: number;
  setPreviousStage(): void;
}

export interface QuizQuestionProps {
  func(stageNumber: number, value: number): void;
  choice: QuestionProps;
  chosen: number;
}

export interface QuizSaveData {
  num0: number;
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
}

export interface ResultProps {
  category: number;
  title: string;
  sports: string;
  textUp: string;
  textDown: string;
  src: string;
}
export interface QuizResultProps {
  result: ResultProps;
}
