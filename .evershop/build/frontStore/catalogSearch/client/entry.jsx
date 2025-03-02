
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    '9cfbb841abe9ad4e5d5987512bf00687': {
      id: '9cfbb841abe9ad4e5d5987512bf00687',
      sortOrder: 5,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\all\\SearchBox.jsx')
    },
    db7a1f3642fb1113f1cdaa4b6e0dfcf8: {
      id: 'db7a1f3642fb1113f1cdaa4b6e0dfcf8',
      sortOrder: 10,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\checkout\\pages\\frontStore\\all\\MiniCart.jsx')
    },
    '1f94e1f115efa75abb68f5d5ebdc127c': {
      id: '1f94e1f115efa75abb68f5d5ebdc127c',
      sortOrder: 30,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\all\\UserIcon.jsx')
    }
  },
  content: {
    '4dca66c7466d9e48d39ea004afb67d1f': {
      id: '4dca66c7466d9e48d39ea004afb67d1f',
      sortOrder: 5,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\catalogSearch\\General.jsx')
    },
    '93aa1ee2d3723d8f9fc1e563c495ce8e': {
      id: '93aa1ee2d3723d8f9fc1e563c495ce8e',
      sortOrder: 10,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\catalogSearch\\SearchPage.jsx')
    },
    '93eef20b77060bf9d94e428dd6abb0db': {
      id: '93eef20b77060bf9d94e428dd6abb0db',
      sortOrder: 0,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Breadcrumb.jsx')
    }
  },
  oneColumn: {
    '05a0d06291f17928a15c142eb33f873c': {
      id: '05a0d06291f17928a15c142eb33f873c',
      sortOrder: 30,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\catalogSearch\\Pagination.jsx')
    },
    a8101661357fbc5244677bf8f2502541: {
      id: 'a8101661357fbc5244677bf8f2502541',
      sortOrder: 25,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\catalogSearch\\Products.jsx')
    },
    '4546afc4703902fc7980b77d99704b33': {
      id: '4546afc4703902fc7980b77d99704b33',
      sortOrder: 15,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\catalogSearch\\Sorting.jsx')
    }
  },
  footer: {
    '4b1b2cf570338276048ddaa382ffbe31': {
      id: '4b1b2cf570338276048ddaa382ffbe31',
      sortOrder: 10,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Footer.jsx')
    }
  },
  head: {
    ef7ab5dff275c1b3eb6184669b7cba30: {
      id: 'ef7ab5dff275c1b3eb6184669b7cba30',
      sortOrder: 5,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\HeadTags.jsx')
    }
  },
  body: {
    c370930f1b1e574f1feca133fe39c7a2: {
      id: 'c370930f1b1e574f1feca133fe39c7a2',
      sortOrder: 1,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Layout.jsx')
    },
    '907bec39c642dd741230eea7d6a57dcd': {
      id: '907bec39c642dd741230eea7d6a57dcd',
      sortOrder: 10,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Notification.jsx')
    }
  },
  header: {
    '80e4b6b17de186f347a59fca35076b2e': {
      id: '80e4b6b17de186f347a59fca35076b2e',
      sortOrder: 10,
      component: require('C:\\Users\\ajeet\\Downloads\\New folder\\EVERSHOP\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Logo.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );