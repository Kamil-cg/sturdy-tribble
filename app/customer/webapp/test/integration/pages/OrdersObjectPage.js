sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'btp.starterkit.customer',
            componentId: 'OrdersObjectPage',
            contextPath: '/Customers/orders'
        },
        CustomPageDefinitions
    );
});