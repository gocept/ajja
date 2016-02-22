============
Introduction
============


Why gocept.jsform
=================

History of `gocept.jsform`. Why did we write another form library?


.. _installation:

Installation
============

`gocept.jsform` comes with files ready to be delivered to the browser. There
is no need to browserify our code. It is, however, up to you to minify or
bundle the library in the course of your deployment workflow.


.. _installation-bower:

Installation via Bower (recommended)
------------------------------------

The recommended way to install `gocept.jsform` is via bower.

.. code-block:: bash

    bower install gocept.jsform


.. _installation-manual:

Manual installation
-------------------

If you prefer to include `gocept.jsform` by hand, please make sure to include
the files in the correct order. For the Javascript code, you can copy & paste
the following snipped.

.. code-block:: html

    <script type="text/javascript" src="src/helpers.js"></script>
    <script type="text/javascript" src="src/templates.js"></script>
    <script type="text/javascript" src="src/collection.js"></script>
    <script type="text/javascript" src="src/jsform.js"></script>

You will also need to include the libaries needed by `gocept.jsform`. They are
listed in the depencencies section in `bower.json`.


.. _installation-fanstatic:

Installation via Fanstatic
--------------------------

There is a fanstatic integration package available for your Python backend.
Install it via pip.

.. code-block:: bash

    pip install gocept.jsform

Then, include the resources in your View.

.. code-block:: python

    from gocept.jsform import jsform
    jsform.need()


Migration
=========


From 2.x to 3.0.0
-----------------

``gocept.jsform`` now only accepts *precompiled* templates generated via
``Handlebars.compile()``. So if you have custom templates that you used with
``gocept.jsform``, you now must wrap them into a ``Handlbars.compile()`` call.

Furthermore, to overwrite the standard templates, just add your compiled
templates to ``gocept.jsform.templates['<name_of_the_template>']`` or register
them with ``gocept.jsform.register_template('<name_of_the_template>', '<your_html')``
(available from version 3.0.1).

The built-in templates were renamed and the ``gocept_jsform_templates``
namespace was removed. Have a look inside the *templates* folder for the new
names.


From 1.x to 2.0.0
-----------------

We switched the template engine from ``jsontemplate`` to ``Handlebars``. So if
you have custom templates, make sure to rewrite them as ``Handlebars``
templates.
