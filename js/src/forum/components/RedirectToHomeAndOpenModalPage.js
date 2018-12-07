import app from 'flarum/app';
import Page from 'flarum/components/Page';

export default class RedirectToHomeAndOpenModalPage extends Page {
    init() {
        super.init();

        m.route('/');

        app.modal.show(this.createModal());
    }

    createModal() {
        return null;
    }

    view() {
        return m('div');
    }
}
