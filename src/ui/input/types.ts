import {InputHTMLAttributes} from "react";


type InputDefaultProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends InputDefaultProps{
  name: string,
  id: string,
  error?: string
  label?: string
  isDirty?: boolean
  placeholder?: string
  inputType?: string
  isRequired?: boolean
}
