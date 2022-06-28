import React, {useState, useEffect} from 'react';
import RenderData from "./RenderData";
import Form from './Form';

const AddEditNote = () => {
  const [note, setNote] = useState({});

  useEffect( () => {
    const abortController = new AbortController();

    async function fetchData() {
      console.log('Calling fetch...')
      try {
        const response = await fetch('http://localhost:4011/note', {
          signal: abortController.signal,
        });

        if (response.ok) {
          console.log('Response received from server and is ok!')
          const {note} = await response.json();

          if (abortController.signal.aborted) {
            console.log('Abort detected, exiting!')
            return;
          }

          setNote(note)
        }
      } catch(e) {
        console.log(e)
      }
    }

    fetchData()

    return () => {
      console.log('Aborting GET request.')
      abortController.abort();
    }
  }, [])

  return (
    <div>
      <RenderData
        data={note}
      />
      <Form
        entity={note}
      />
    </div>
  );
};

export default AddEditNote;

