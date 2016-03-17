

Template
========

.. currentmodule:: ajja

.. js:function:: ajja.register_template(id, template, description)

    Allows you to register your templates or change the default templates.

    :param string id: The id of the template.
    :param string|function template: The template. Will be saved as a compiled Handlebars template. Can be a precompiled Handlebars template, the template as raw HTML or the id of a DOM node containing the HTML of the template.
    :param string description: A description for the template.
    :rtype: void
    
    .. code-block:: js
    
        ajja.register_template('my_template', '<dl><dt>{{name}}</dt><dd>{{value}}</dd></dl>');
        var form = new ajja.Form('form');
        form.load({title: 'Sebastian'}, {title: {template: 'my_template'}});

    .. code-block:: js
    
        $('body').append(
            '<script type="text/html" id="reference"><b>{{value}}</b></script>'
        );
        ajja.register_template('my_template', '#reference');
        var form = new ajja.Form('form');
        form.load({title: 'Sebastian'}, {title: {template: 'my_template'}});

    .. code-block:: js
    
        var compiled = Handlebars.compile('<p>{{value}}</p>');
        ajja.register_template('my_template', compiled);
        var form = new ajja.Form('form');
        form.load({title: 'Sebastian'}, {title: {template: 'my_template'}});

.. js:class:: TemplateHandler ()

    Helper class for handling templates within `ajja`.

    
    
    .. code-block:: js
    
        var handler = new ajja.TemplateHandler();

    .. js:function:: get_template(id)
    
        Get the template for the given `id`.
    
        :param string id: The id of the template.
        :return: The template as precompiled Handlebars template.
        :rtype: function
        
    
        .. code-block:: js
        
            handler.get_template('form_boolean')({name: 'asdf'})
            '<input type="checkbox" name="asdf" data-bind="checked: asdf" />'
    .. js:function:: list_templates()
    
        List all registered templates.
    
        :return: A list of objects containing the id, description and compiled template.
        :rtype: Array
        
    
        .. code-block:: js
        
            handler.list_template()[0]
            {id: 'form', description: 'The base `ajja.Form` template', template: function}




