import React from 'react';
import InputLabel from "./InputLabel";
import './form.css'

const isNullOrUndefined = prop => prop === null
  || prop === undefined;
const isEmptyString = prop => isNullOrUndefined(prop)
  || prop === '';
const capitalize = word =>
  word.charAt(0).toUpperCase() +
  word.slice(1).toLowerCase();

function titleFromName(name) {
  if (isEmptyString(name)) {
    return '';
  }

  return name.split(/(?=[A-Z])|\s/).map(s => capitalize(s)).join(' ')
}

const Form = ({entity}) => {
  return (
    <form>
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
