import {forwardRef} from 'react';
import './styles.scss'
import {escapeRegExp, inputRegexInt} from "../../utils";
import {InputProps} from "./types";
import Backing from "../../components/genereal/backing";
import {EBacking} from "../../components/genereal/backing/types.ts";

const Index = forwardRef<HTMLInputElement, InputProps>(
  ({
     placeholder,
     id,
     name,
     inputType = 'text',
     value,
     onChange,
     error,
     disabled, className,
     isRequired,
     ...props
   }, ref) => {

    const onChangeHandler = (event: any) => {
      event.preventDefault()
      if (inputType === 'number') {
        let nextUserInput: string = event.target.value.replaceAll(' ', '')
        if ((nextUserInput === '' || inputRegexInt.test(escapeRegExp(nextUserInput)))) {
          event.target.value = nextUserInput
          if (onChange) onChange(event)
        } else if (nextUserInput !== '') {
          nextUserInput = nextUserInput.slice(0, nextUserInput.length - 1)
          event.target.value = nextUserInput
          if (onChange) onChange(event)
        }
      } else if (onChange) {
        onChange(event)
      }
    }

    return (
      <div className={`input-block ${className || ''}`} ref={ref}>
        <Backing variant={EBacking.Stone}>
          <div className={[
            'input-block__input-wrapper',
            error ? 'input-block__input-wrapper_error' : '',
          ].join(' ')}>
            <input
              type={inputType}
              id={id}
              name={name}
              value={value}
              onChange={onChangeHandler}
              className='input-block__input-wrapper__input'
              required={isRequired}
              autoComplete='new-password'
              disabled={disabled}
              placeholder={placeholder}
              {...props}
            />

          </div>
        </Backing>
      </div>
    );
  })

Index.displayName = 'Input'

export default Index;
