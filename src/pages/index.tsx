import AuthPages from './auth-pages';
import UnAuthPages from './unauth-pages';
import NotificationComponent from './../components/Notification';
import ProgressComponent from './../components/Progress';
import { LOCAL_STORAGE_KEY } from "../consts";
import { useUser } from "../store/hooks";
import '../styles/styles.css'

function Pages() {
  const { JWT_TOKEN } = LOCAL_STORAGE_KEY;
  const token = localStorage.getItem(JWT_TOKEN);
  const { user } = useUser();

  return (
    <>
      { (token || user.token !== '') ? <AuthPages /> : <UnAuthPages />}

      <NotificationComponent />
      <ProgressComponent />
    </>
  );
}

export default Pages;
