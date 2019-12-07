enum CaseType {
  camel ='camel',
  UpperCamel ='UpperCamel',
  snake_case ='snake_case',
  kebabcase ='kebab-case',
  UPPER_SNAKE_CASE ='UPPER_SNAKE_CASE',
}
type Type = {
  type: CaseType,
  word: String,
  fix: String
}

const typoList: Type[] = [
  {
    type: CaseType.camel,
    word: "errorMassage",
    fix: "errorMessage"
  },
  {
    type: CaseType.UpperCamel,
    word: "ErrorMassage",
    fix: "ErrorMessage"
  },
  {
    type: CaseType.snake_case,
    word: "error_massage",
    fix: "error_message"
  },
  {
    type: CaseType.kebabcase,
    word: "error-massage",
    fix: "error-message"
  },
  {
    type: CaseType.UPPER_SNAKE_CASE,
    word: "ERROR_MASSAGE",
    fix: "ERROR_MESSAGE"
  }
];

export const checkTypo = (text: string): Type | undefined => {
  return typoList.find((type: Type) => type.word === text);
};
