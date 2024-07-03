import Overview from '../components/dashboardComps/Overview/Overview';
import Candidates from '../Pages/Candidates/Candidates';
import Jobs from '../components/dashboardComps/Jobs/Jobs';
import Settings from '../components/dashboardComps/Settings/Settings';
import Personal from '../components/dashboardComps/Personal/Personal';
import Teams from '../components/dashboardComps/Teams/Teams';
import Company from '../components/dashboardComps/Company/Company';
import Logout from '../components/dashboardComps/Logout/Logout';

export const TabsData = {
  TabTitle: {
    Employer: [
      {
        id: 'tab1',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='apps'>
              <path
                id='Vector'
                d='M11 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H11C11.5523 12 12 11.5523 12 11V4C12 3.44772 11.5523 3 11 3Z'
                stroke='#303237'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M20.5 16H16.5C16.2239 16 16 16.2239 16 16.5V20.5C16 20.7761 16.2239 21 16.5 21H20.5C20.7761 21 21 20.7761 21 20.5V16.5C21 16.2239 20.7761 16 20.5 16Z'
                stroke='#303237'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M20.5 7H16.5C16.2239 7 16 7.22386 16 7.5V11.5C16 11.7761 16.2239 12 16.5 12H20.5C20.7761 12 21 11.7761 21 11.5V7.5C21 7.22386 20.7761 7 20.5 7Z'
                stroke='#303237'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_4'
                d='M11.5 16H7.5C7.22386 16 7 16.2239 7 16.5V20.5C7 20.7761 7.22386 21 7.5 21H11.5C11.7761 21 12 20.7761 12 20.5V16.5C12 16.2239 11.7761 16 11.5 16Z'
                stroke='#303237'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Dashboard',
      },

      {
        id: 'tab2',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='work-alt-bag'>
              <path
                id='Vector'
                d='M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Jobs',
      },
      {
        id: 'tab3',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='user-group-accounts'>
              <path
                id='Vector'
                d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M16 3C16.8604 3.2203 17.623 3.7207 18.1676 4.42231C18.7122 5.12392 19.0078 5.98683 19.0078 6.875C19.0078 7.76317 18.7122 8.62608 18.1676 9.32769C17.623 10.0293 16.8604 10.5297 16 10.75'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_4'
                d='M19 15H20C21.1046 15 22 15.8954 22 17V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Candidates',
      },
    ],

    Account: [
      {
        id: 'tab4',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='user-account-profile'>
              <path
                id='Vector'
                d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Personal',
      },
      {
        id: 'tab5',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='paper-file-text'>
              <path
                id='Vector'
                d='M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M13 2.5V9H19'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M8 17H15'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_4'
                d='M8 13H15'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_5'
                d='M8 9H9'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Company',
      },
      {
        id: 'tab6',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='user-group-accounts'>
              <path
                id='Vector'
                d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M16 3C16.8604 3.2203 17.623 3.7207 18.1676 4.42231C18.7122 5.12392 19.0078 5.98683 19.0078 6.875C19.0078 7.76317 18.7122 8.62608 18.1676 9.32769C17.623 10.0293 16.8604 10.5297 16 10.75'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_4'
                d='M19 15H20C21.1046 15 22 15.8954 22 17V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Teams',
      },
      {
        id: 'tab7',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='settings-account-more'>
              <path
                id='Vector'
                d='M10.0761 3.16311C10.136 2.50438 10.6883 2 11.3497 2H12.6503C13.3117 2 13.864 2.50438 13.9239 3.16311C13.9731 3.70392 14.3623 4.14543 14.8708 4.336C15.0015 4.38499 15.1307 4.43724 15.2582 4.49263C15.7613 4.71129 16.3531 4.66938 16.7745 4.31818C17.2953 3.8842 18.0611 3.91894 18.5404 4.39829L19.4584 5.31623C19.9154 5.77326 19.9485 6.50338 19.5347 6.99992C19.1901 7.41349 19.158 7.99745 19.3897 8.48341C19.49 8.69386 19.5816 8.90926 19.664 9.12916C19.8546 9.63767 20.2961 10.0269 20.8369 10.0761C21.4956 10.136 22 10.6883 22 11.3497V12.6503C22 13.3117 21.4956 13.864 20.8369 13.9239C20.2961 13.9731 19.8546 14.3623 19.664 14.8708C19.59 15.0682 19.5086 15.262 19.4202 15.4518C19.2053 15.913 19.2401 16.4637 19.5658 16.8546C19.962 17.33 19.9303 18.0291 19.4927 18.4667L18.4667 19.4927C18.0291 19.9303 17.33 19.962 16.8546 19.5658C16.4637 19.2401 15.913 19.2053 15.4518 19.4202C15.262 19.5086 15.0682 19.59 14.8708 19.664C14.3623 19.8546 13.9731 20.2961 13.9239 20.8369C13.864 21.4956 13.3117 22 12.6503 22H11.3497C10.6883 22 10.136 21.4956 10.0761 20.8369C10.0269 20.2961 9.63767 19.8546 9.12917 19.664C8.90927 19.5816 8.69387 19.49 8.48343 19.3897C7.99746 19.158 7.4135 19.1901 6.99992 19.5347C6.50338 19.9485 5.77325 19.9154 5.31622 19.4584L4.39829 18.5404C3.91893 18.0611 3.8842 17.2953 4.31818 16.7745C4.66939 16.3531 4.71129 15.7613 4.49263 15.2582C4.43724 15.1307 4.385 15.0016 4.336 14.8708C4.14544 14.3623 3.70392 13.9731 3.16311 13.9239C2.50438 13.864 2 13.3117 2 12.6503V11.3497C2 10.6883 2.50438 10.136 3.16311 10.0761C3.70393 10.0269 4.14544 9.63768 4.33601 9.12917C4.3936 8.9755 4.45568 8.82402 4.52209 8.67489C4.7571 8.14716 4.71804 7.52257 4.34821 7.07877C3.89722 6.53758 3.93332 5.74179 4.43145 5.24365L5.24364 4.43146C5.74178 3.93332 6.53757 3.89722 7.07876 4.34822C7.52256 4.71805 8.14715 4.7571 8.67488 4.52209C8.82401 4.45568 8.97549 4.3936 9.12916 4.33601C9.63767 4.14544 10.0269 3.70393 10.0761 3.16311Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Settings',
      },
      {
        id: 'tab8',
        icon: (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='logout-exit'>
              <path
                id='Vector'
                d='M4 12H15'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_2'
                d='M8 7L3 12L8 17'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                id='Vector_3'
                d='M21 3V21'
                stroke='#565C69'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        ),
        title: 'Logout',
      },
    ],
  },

  TabContents: [
    { id: 'tab1', comp: <Overview /> },
    { id: 'tab2', comp: <Jobs /> },
    { id: 'tab3', comp: <Candidates /> },
    { id: 'tab4', comp: <Personal /> },
    { id: 'tab5', comp: <Company /> },
    { id: 'tab6', comp: <Teams /> },
    { id: 'tab7', comp: <Settings /> },
    { id: 'tab8', comp: <Logout /> },
  ],
};
