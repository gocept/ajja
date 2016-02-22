====================
Internationalization
====================

*gocept.jsform* supports i18n, but only translations for english (default) and
 german are provided. Therefore we seek your help: To add a new language fork
 `gocept.jsform <https://github.com/gocept/gocept.jsform>`_ on GitHub and add
 a new file to `src/localizations
 <https://github.com/gocept/gocept.jsform/blob/master/src/localizations>`_. To
 enhance predefined translations, extend existing files of that folder.

To use a predefined localization, initialize *gocept.jsform* with the
``language`` option:

.. _code-i18n-german:

.. code-block:: javascript

    var form = new gocept.jsform.Form("form", {language: "de"});
    form.load({topic: 'Internationalization'}, {topic: {label: 'Topic'}});

This way all notifications and hints will be rendered in german, instead of
english. The language is chosen via it's file name, so ``language: "de"`` will
effectively read ``src/localizations/de.js`` for translations.
