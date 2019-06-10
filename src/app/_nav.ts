export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Dashboard'
  },
  {
    name: 'Main Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',

  },
  {
    title: true,
    name: 'Orders'
  },
  {
    name: 'Manage Orders',
    url: '/product/orders',
    icon: 'icon-drop'
  },
  {
    name: 'Track Orders',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'User',
    url: '/User',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Users',
        url: '/user/users',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add User',
        url: '/user/new-user',
        icon: 'icon-puzzle'
      }
    ]
  },

  {
    name: 'User Group',
    url: '/user-groups',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Groups',
        url: '/user-groups/user-groups',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Group',
        url: '/user-groups/new-user-group',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Permissions',
    url: '/user-group-actions',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Permission',
        url: '/user-group-actions/group-actions',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Permission',
        url: '/user-group-actions/new-group-action',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  }
  ,
  {
    title: true,
    name: 'Storefront'
  },

  {
    name: 'Products',
    url: '/product',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Products',
        url: '/product/products',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Product',
        url: '/product/new-product',
        icon: 'icon-puzzle'
      }
      ,
      {
        name: 'Product Categories',
        url: '/product/categories',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Category',
        url: '/product/new-category',
        icon: 'icon-puzzle'
      },
      {
        name: 'Product Offers',
        url: '/product/offers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Price Qoute',
        url: '/product/qoutes',
        icon: 'icon-puzzle'
      }
      ,
      {
        name: 'Product Orders',
        url: '/product/orders',
        icon: 'icon-puzzle'
      }
    ]
  }
  ,


  {
    name: 'Supplier Type',
    url: '/supplier',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Supplier Types',
        url: '/suppier/list-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Supplier Type',
        url: '/user/add-supplier-type',
        icon: 'icon-puzzle'
      }
    ]
  },

  {
    name: 'Suppliers',
    url: '/supplier',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Suppliers',
        url: '/supplier/list-suppliers',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Supplier',
        url: '/supplier/new-supplier',
        icon: 'icon-puzzle'
      }

    ]
  },



  {
    name: 'Customer',
    url: '/Customer',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Customers',
        url: '/customer/customers',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Customer',
        url: '/customer/new-customer',
        icon: 'icon-puzzle'
      }

    ]
  },



  {
    name: 'Report',
    url: '/report',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Transaction',
        url: '/Report/transactions',
        icon: 'icon-puzzle'
      }

    ]
  },
  {
    divider: true
  }
  ,
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
