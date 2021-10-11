import './../../styles/styles.css'
import Avatar from '@material-ui/core/Avatar';
import { useUser, useTransaction } from "../../store/hooks";

const Contract = (props: any) => {
  const { user } = useUser();
  const { selectedTransactionId, transactions, changeContract } = useTransaction();

  const handleAccept = async (e: any) => {
    e.preventDefault();
    await changeContract({ status: "accepted", id: props.item.contract_id });
  }

  const handleCancel = async (e: any) => {
    e.preventDefault();
    await changeContract({ status: "canceled", id: props.item.contract_id });
  }

  return (
    <>
      {user.user.user_id !== props.item.user_id ?
        (<div className="flex flex-col items-end relative w-full mb-4" style={{ paddingRight: "45px" }}>
          <Avatar
            style={{ position: "absolute", top: '0', right: '0' }}
            src={process.env.REACT_APP_BASE_URL + user.user.avatar}
          >
            {user.user.first_name === "" ? null : (user.user.first_name.charAt(0).toUpperCase() + user.user.last_name.charAt(0).toUpperCase())}
          </Avatar>
          <div className="w-1/2 border-solid border-gray-300 border-2 px-4 py-2">
            {props.item.chat_type === 'contract_sent' ?
              <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Sent Offer</p> :
              (props.item.chat_type === "contract_accepted" ?
                <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Accepted</p> :
                (props.item.chat_type === "contract_ended" ?
                  <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Ended</p> :
                  (props.item.chat_type === "contract_canceled" ?
                    <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Canceled</p> :
                    null))
              )
            }
            <p className="text-blue-500 mb-1">Title: {props.item.contract_title}</p>
            <p className="mb-1 text-gray-400 whitespace-pre-line">{props.item.contract_desc}</p>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hours</p>
              <p className="text-gray-700 ml-1">{props.item.contract_max_hrs}hours/week</p>
            </div>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hourly</p>
              <p className="text-gray-700 ml-1">{props.item.contract_hourly_rate}USD/h</p>
            </div>
            {props.item.contract_allow_manual_track ?
              <p className="text-gray-400 mb-1">Manual Time Track allowed</p> :
              <p className="text-gray-400 mb-1">Manual Time Track disallowed</p>
            }
          </div>
        </div>) :
        (<div className="flex flex-col items-start relative w-full mb-4" style={{ paddingLeft: "45px" }}>
          <Avatar
            style={{ position: "absolute", top: '0', left: '0' }}
            src={process.env.REACT_APP_BASE_URL + transactions[selectedTransactionId].avatar}
          >
            {transactions[selectedTransactionId].first_name === "" ? null : (transactions[selectedTransactionId].first_name.charAt(0).toUpperCase() + transactions[selectedTransactionId].last_name.charAt(0).toUpperCase())}
          </Avatar>
          <div className="w-1/2 border-solid border-gray-300 border-2 px-4 py-2">
            {props.item.chat_type === 'contract_sent' ?
              <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Sent Offer</p> :
              (props.item.chat_type === "contract_accepted" ?
                <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Accepted</p> :
                (props.item.chat_type === "contract_ended" ?
                  <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Ended</p> :
                  (props.item.chat_type === "contract_canceled" ?
                    <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Contract Canceled</p> :
                    null))
              )
            }
            <p className="text-blue-500 mb-1">Title: {props.item.contract_title}</p>
            <p className="mb-1 text-gray-400 whitespace-pre-line">{props.item.contract_desc}</p>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hours</p>
              <p className="text-gray-700 ml-1">{props.item.contract_max_hrs}hours/week</p>
            </div>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hourly</p>
              <p className="text-gray-700 ml-1">{props.item.contract_hourly_rate}USD/h</p>
            </div>
            {props.item.contract_allow_manual_track ?
              <p className="text-gray-400 mb-1">Manual Time Track allowed</p> :
              <p className="text-gray-400 mb-1">Manual Time Track disallowed</p>
            }
          </div>
        </div>
        )
      }
      {user.user.user_role === "freelancer" && transactions[selectedTransactionId].contract_status === "pending" && props.item.chat_type === 'contract_sent' ?
        (<div className="flex flex-col items-end relative w-full mb-4" style={{ paddingRight: "45px" }}>
          <Avatar
            style={{ position: "absolute", top: '0', right: '0' }}
            src={process.env.REACT_APP_BASE_URL + transactions[selectedTransactionId].avatar}
          >
            {user.user.first_name === "" ? null : (user.user.first_name.charAt(0).toUpperCase() + user.user.last_name.charAt(0).toUpperCase())}
          </Avatar>
          <div className="w-1/2 border-solid border-gray-300 border-2 px-4 py-2">
            <p className="font-medium text-2xl text-center border-b-2 border-solid border-gray-200 mb-2">Received Offer</p>
            <p className="text-blue-500 mb-1">Title: {props.item.contract_title}</p>
            <p className="mb-1 text-gray-400 whitespace-pre-line">{props.item.contract_desc}</p>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hours</p>
              <p className="text-gray-700 ml-1">{props.item.contract_max_hrs}hours/week</p>
            </div>
            <div className="flex mb-2 items-center">
              <p className="text-blue-500 mr-1">Hourly</p>
              <p className="text-gray-700 ml-1">{props.item.contract_hourly_rate}USD/h</p>
            </div>
            {props.item.contract_allow_manual_track ?
              <p className="text-gray-400 mb-1">Manual Time Track allowed</p> :
              <p className="text-gray-400 mb-1">Manual Time Track disallowed</p>
            }
            <div className="flex justify-end">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e: any) => handleCancel(e)}
              >
                Cancel
                </button>
              <button
                onClick={(e: any) => handleAccept(e)}
                className="ml-3 px-4 py-2 secondary-btn">Accept</button>
            </div>
          </div>

        </div>) : null
      }
    </>
  );
};

export default Contract;