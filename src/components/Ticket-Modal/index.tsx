import { useState } from "react";
import './../../styles/styles.css'
import { useTickets } from "../../store/hooks";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  postInput: {
    padding: "15px",
    color: "#4a5568",
    borderRadius: "5px",
    border: "1px solid #c4c4c4",
    "&:hover": {
      border: "1px solid #212121"
    },
    "&:focus": {
      outline: 0,
      border: "2px solid #3f51b5"
    }
  },
  error: {
    border: "1px solid red",
  }
}));

const TicketModal = (props: any) => {
  const { addTicket } = useTickets();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const classes = useStyles(props);

  const handleSubmit = async () => {
    if (title === '') {
      setTitleError('Please input ticket title.');
      return;
    }
    else {
      setTitleError('');
    }

    if (description === '') {
      setDescriptionError('Please input ticket description.');
      return;
    }
    else {
      setDescriptionError('');
    }

    await addTicket({
      ticket_title: title,
      ticket_description: description,
      ticket_status: "Open",
    });

    props.setShowModal(false);
  }

  return (
    <>
      <div
        className="justify-center items-center flex w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative my-6 mx-auto" style={{ width: "500px" }}>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-bold">
                Add Ticket
                  </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                    </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto w-full">
              <div className="mt-4 w-full">
                <input
                  value={title}
                  placeholder="Type title of the Support Request..."
                  autoComplete="off"
                  onChange={e => setTitle(e.target.value)}
                  onKeyDown={e => setTitleError('')}
                  className={classes.postInput + " block w-full " + (titleError ? classes.error : '')} type="text">
                </input>
                {titleError && <p className="text-left text-xs text-red-500 mt-1">{titleError}</p>}
              </div>
              {/* <div className="mt-4 w-full">
                          <p className="block w-full px-4 py-2 text-gray-700 bg-white">{title}</p>
                        </div> */}

              <div className="mt-4 w-full">
                <textarea
                  value={description}
                  placeholder="Type reason of the Support Request..."
                  onChange={e => setDescription(e.target.value)}
                  onKeyDown={e => setDescriptionError('')}
                  className={classes.postInput + " block w-full h-40 resize-y " + (descriptionError ? classes.error : '')}>
                </textarea>
                {descriptionError && <p className="text-left text-xs text-red-500 mt-1">{descriptionError}</p>}
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.setShowModal(false)}
              >
                Close
                  </button>
              {props.TicketModal !== 'View' && <button onClick={handleSubmit} className="ml-3 px-4 py-2 secondary-btn">Add</button>}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default TicketModal;