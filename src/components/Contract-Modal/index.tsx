import { useHistory } from "react-router-dom";
import { useState } from "react";
import './../../styles/styles.css'
import { useMeeting, useTransaction } from "../../store/hooks";

const ContractModal = (props: any) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [hourly, setHourly] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [hoursError, setHoursError] = useState('');
  const [hourlyError, setHourlyError] = useState('');
  const [allowManual, setAllowManual] = useState(false);
  const { addContract } = useTransaction();
  const { selectedChannelIndex, selectedMeetingInfo } = useMeeting();

  const handleSubmit = async () => {
    if (title === '') {
      setTitleError('Please input contract title.');
      return;
    }
    else {
      setTitleError('');
    }

    if (description === '') {
      setDescriptionError('Please input contract description.');
      return;
    }
    else {
      setDescriptionError('');
    }

    if (hours === '') {
      setHoursError('Please input contract hours a week.');
      return;
    }
    else {
      setHoursError('');
    }

    if (hourly === '') {
      setHourlyError('Please input contract hourly rate.');
      return;
    }
    else {
      setHourlyError('');
    }

    await addContract({
      channel_id: selectedMeetingInfo.channels[selectedChannelIndex].channel_id,
      title: title,
      desc: description,
      hours: hours,
      hourly: hourly,
      isAllow: allowManual,
    });

    props.setShowModal(false);
    history.push('/transaction');
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
                Send Offer
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
            <div className="relative px-6 py-2 flex-auto w-full">
              <div className="mt-1 w-full">
                <input
                  value={title}
                  placeholder="Contract Title"
                  autoComplete="off"
                  onChange={e => setTitle(e.target.value)}
                  onKeyDown={e => setTitleError('')}
                  type="text"
                  className={"block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2 " + (titleError !== '' ? 'border-red-500' : '')}>
                </input>
                {titleError && <p className="text-left text-xs text-red-500 mt-1">{titleError}</p>}
              </div>
              {/* <div className="mt-4 w-full">
                          <p className="block w-full px-4 py-2 text-gray-700 bg-white">{title}</p>
                        </div> */}

              <div className="mt-4 w-full">
                <textarea
                  value={description}
                  placeholder="Contract Description"
                  onChange={e => setDescription(e.target.value)}
                  onKeyDown={e => setDescriptionError('')}
                  className={"h-40 resize-y block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2 " + (descriptionError !== '' ? 'border-red-500' : '')}>
                </textarea>
                {descriptionError && <p className="text-left text-xs text-red-500 mt-1">{descriptionError}</p>}
              </div>

              <div className="mt-4 w-full flex items-center">
                <p className="w-32">Hours per week:</p>
                <input
                  value={hours}
                  autoComplete="off"
                  onChange={e => setHours(e.target.value)}
                  onKeyDown={e => setHoursError('')}
                  type="text"
                  className={"block ml-2 w-20 text-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2 " + (hoursError !== '' ? 'border-red-500' : '')}>
                </input>
              </div>
              {hoursError && <p className="text-left text-xs text-red-500 mt-1">{hoursError}</p>}

              <div className="mt-1 w-full flex items-center">
                <p className="w-32">Hourly:</p>
                <input
                  value={hourly}
                  autoComplete="off"
                  onChange={e => setHourly(e.target.value)}
                  onKeyDown={e => setHourlyError('')}
                  type="text"
                  className={"block ml-2 w-20 text-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2 " + (hourlyError !== '' ? 'border-red-500' : '')}>
                </input>
              </div>
              {hourlyError && <p className="text-left text-xs text-red-500 mt-1">{hourlyError}</p>}

              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={allowManual}
                    onChange={() => setAllowManual(!allowManual)}
                    className="form-checkbox"></input>
                  <span className="ml-2">Allow Manual Time Track</span>
                </label>
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
              {props.ContractModal !== 'View' && <button onClick={handleSubmit} className="ml-3 px-4 py-2 secondary-btn">Confirm</button>}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ContractModal;
