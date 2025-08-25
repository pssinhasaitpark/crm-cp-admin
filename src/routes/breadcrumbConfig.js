export const breadcrumbConfig = {
    '/': [
      { label: 'Dashboard', link: '/' }
    ],
    '/employees': [
      { label: 'Dashboard', link: '/' },
      { label: 'Employee Management' }
    ],
    '/employees/:id': (name = 'Employee Details') => [
      { label: 'Dashboard', link: '/' },
      { label: 'Employee Management', link: '/employees' },
      { label: name }
    ]
  };
  