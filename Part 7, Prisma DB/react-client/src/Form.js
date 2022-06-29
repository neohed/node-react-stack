import React from 'react';
import InputLabel from "./InputLabel";
import {isEmptyString, titleFromName} from "./strings";
import './form.css'

const Form = ({entity, onSubmitHandler}) => {
  return (
    <form onSubmit={e => {
      const form = e.target;
      const newEntity = Object.values(form).reduce((obj, field) => {
        const {name} = field;

        if (!isEmptyString(name)) {
          obj[name] = field.value
        }

        return obj
    }, {})
      onSubmitHandler(newEntity);

      e.stopPropagation();
      e.preventDefault()
    }}>
      {
        Object.entries(entity).map(([entityKey, entityValue]) => {
          if (entityKey === "id") {
            return <input
              type="hidden"
              name="id"
              key="id"
              value={entityValue}
            />
          } else {
            return <InputLabel
              id={entityKey}
              key={entityKey}
              label={titleFromName(entityKey)}
              type={
                typeof entityValue === "boolean"
                  ? "checkbox"
                  : "text"
              }
              value={entityValue}
            />
          }
        })
      }
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
