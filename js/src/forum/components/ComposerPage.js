import app from 'flarum/app';
import Page from 'flarum/components/Page';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LogInModal from 'flarum/components/LogInModal';

export default class ComposerPage extends Page {
    init() {
        super.init();

        if (!app.session.user) {
            app.modal.show(new LogInModal());

            return;
        }

        const params = m.route.param();

        m.route('/');

        setTimeout(() => {
            let composerProps = {
                user: app.session.user,
            };

            if (params.content) {
                composerProps.originalContent = params.content;
            }

            const component = new DiscussionComposer(composerProps);

            if (params.title) {
                component.title(params.title);
            }

            if (params.tag) {
                const tag = app.store.getBy('tags', 'slug', params.tag);

                if (tag) {
                    const parent = tag.parent();

                    component.tags = parent ? [parent, tag] : [tag];
                }
            }

            app.composer.load(component);
            app.composer.show();
        }, 0);
    }

    view() {
        return m('div');
    }
}
