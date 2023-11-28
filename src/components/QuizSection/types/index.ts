export interface OptionsProps {
  answer: string;
  category: number;
}

export interface QuestionProps {
  stage: number;
  question: string;
  options: Array<OptionsProps>;
}

export interface QuizQuestionProps {
  func(stageNumber: number, value: number): void;
  choice: QuestionProps;
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
