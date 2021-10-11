import './../../styles/styles.css'
import { useHistory } from "react-router-dom";

const MeetingListItem = (props: any) => {
  const history = useHistory();

  const handleGoMeeting = () => {
    history.push('/client/meeting');
  }

  return (
    <div className="w-96 shadow-xl my-1 h-24 bg-white p-4 rounded-md cursor-pointer" onClick={handleGoMeeting}>
      <div className="flex justify-between">
        <p className="text-blue-400 font-medium text-lg">{props.meeting.title}</p>
        <p className="text-gray-200 text-sm">{props.meeting.created}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>{props.meeting.last_message}</p>
        <p className="text-gray-200 text-sm">{props.meeting.status}</p>
      </div>
    </div>
  );
};

export default MeetingListItem;