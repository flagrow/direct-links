import RedirectToHomeAndOpenModalPage from "./RedirectToHomeAndOpenModalPage";
import LogInModal from "flarum/components/LogInModal";

export default class LoginPage extends RedirectToHomeAndOpenModalPage {
    init() {
        const params = m.route.param();
        this.identification = params.identification;
        this.password = params.password;

        super.init();
    }

    createModal() {
        return new LogInModal({
          identification: this.identification,
          password: this.password
        });
    }
}
