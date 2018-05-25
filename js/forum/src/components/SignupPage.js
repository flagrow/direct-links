import RedirectToHomeAndOpenModalPage from 'flagrow/direct-links/components/RedirectToHomeAndOpenModalPage';
import SignUpModal from 'flarum/components/SignUpModal';

export default class SignupPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        return new SignUpModal();
    }
}
