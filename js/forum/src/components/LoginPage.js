import RedirectToHomeAndOpenModalPage from 'flagrow/direct-links/components/RedirectToHomeAndOpenModalPage';
import LogInModal from 'flarum/components/LogInModal';

export default class LoginPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        return new LogInModal();
    }
}
