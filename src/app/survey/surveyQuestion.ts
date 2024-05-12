export interface SurveyQuestion {
    id: number;
    statement: string;
    associatedRisk: string;
    typeQuestion: TypeQuestion;
    questionConfig: any; 
  }
  
  export enum TypeQuestion {
    NUMERIC = "NUMERIC",
    PERCENTAGE = "PERCENTAGE",
    SELECT = "SELECT",
    TEXT = "TEXT",
    YES_NO = "YES_NO",
  }