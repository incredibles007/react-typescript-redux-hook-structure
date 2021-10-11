import './../../styles/styles.css'
import { useState } from "react";
import moment from "moment";
import { useTransaction } from "../../store/hooks";

const TrackModal = (props: any) => {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('0');
  const [descriptionError, setDescriptionError] = useState('');
  const { selectedTransactionId, transactions, sendMessageTr } = useTransaction();

  const handleSubmit = async () => {
    if (description === '') {
      setDescriptionError('Please input track description a week.');
      return;
    }
    else {
      setDescriptionError('');
    }

    sendMessageTr({
      channel_id: transactions[selectedTransactionId].channel_id,
      chat_type: 'timetrack',
      trk_total_hrs: hours,
      trk_from: startTime,
      trk_to: endTime,
      trk_date: date,
      trk_description: description,
      created_at: new Date(),
    })
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
                Track Time
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

              <div className="mt-4 w-full flex items-center">
                <p className="w-32">Track Date:</p>
                <input
                  value={date}
                  onChange={(e: any) => setDate(e.target.value)}
                  type="date"
                  placeholder="Date"
                  max={moment(new Date()).format('YYYY-MM-DD')}
                  className="block ml-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2" />
              </div>

              <div className="mt-2 w-full flex items-center">
                <p>From: </p>
                <input
                  value={startTime}
                  onChange={(e: any) => {
                    if (e.target.value > endTime)
                      return;
                    setStartTime(e.target.value);
                    let val: any = (new Date("01-01-0000 " + endTime + ":00").getTime() - new Date("01-01-0000 " + e.target.value + ":00").getTime()) / 3600000;
                    val = parseFloat(val.toFixed(1));
                    setHours(val);
                  }}
                  type="time"
                  className="mx-3 block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2" />
                <p>To: </p>
                <input
                  value={endTime}
                  onChange={(e: any) => {
                    if (e.target.value < startTime)
                      return;
                    setEndTime(e.target.value);
                    let val: any = (new Date("01-01-0000 " + e.target.value + ":00").getTime() - new Date("01-01-0000 " + startTime + ":00").getTime()) / 3600000;
                    val = parseFloat(val.toFixed(1));
                    setHours(val);
                  }}
                  type="time"
                  className="block ml-3 w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2" />
              </div>

              <div className="mt-2 w-full flex items-center">
                <p className="w-32">Track Hours:</p>
                <input
                  value={hours}
                  autoComplete="off"
                  type="text"
                  disabled
                  className="block ml-2 w-20 text-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring my-2 ">
                </input>
              </div>

              <div className="mt-2 w-full">
                <textarea
                  className={"resize-y border w-full px-4 py-2 focus:outline-none rounded-md overflow-hidden h-40 " + (descriptionError !== '' ? 'border-red-500' : '')}
                  autoComplete="off"
                  placeholder="Description"
                  onChange={e => setDescription(e.target.value)}
                  onKeyDown={e => setDescriptionError('')}
                ></textarea>
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
              <button onClick={handleSubmit} className="ml-3 px-4 py-2 secondary-btn">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default TrackModal;
