import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import CommonLayout from 'layout/CommonLayout';
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/forgot-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/check-mail')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/reset-password')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/code-verification')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const DashboardReferrals = Loadable(lazy(() => import('pages/dashboard/referrals')));
const DashboardCommissions = Loadable(lazy(() => import('pages/dashboard/commissions')));
const DashboardRank = Loadable(lazy(() => import('pages/dashboard/rank')));
const DashboardWithdrawals = Loadable(lazy(() => import('pages/dashboard/withdrawals')));
const DashboardDeposits = Loadable(lazy(() => import('pages/dashboard/deposits')));

// render - Funding
const FundingReal = Loadable(lazy(() => import('pages/funding/funding')));

// render - copy
const TradingCopy = Loadable(lazy(() => import('pages/trading/copy')));

// render - pips
const PipsBinary = Loadable(lazy(() => import('pages/pips/binary')));
const PipsCryptos = Loadable(lazy(() => import('pages/pips/cryptos')));
const PipsForex = Loadable(lazy(() => import('pages/pips/forex')));
const PipsSynthetic = Loadable(lazy(() => import('pages/pips/synthetic')));

// render - academy
const AcademyFinance = Loadable(lazy(() => import('pages/academy/finance')));
const AcademyTrading = Loadable(lazy(() => import('pages/academy/trading')));
const AcademyHealth = Loadable(lazy(() => import('pages/health/health')));

// table lives
const LivesLives = Loadable(lazy(() => import('pages/lives/lives')));

// pages e-commerce
const ECommerceMarketing = Loadable(lazy(() => import('pages/eCommerce/marketing')));
const ECommerceWebsites = Loadable(lazy(() => import('pages/eCommerce/websites')));
const ECommerceDesign = Loadable(lazy(() => import('pages/eCommerce/design')));

// render - documentation
const DocumentationPublicity = Loadable(lazy(() => import('pages/documentation/publicity')));

// render - support
const SupportSupport = Loadable(lazy(() => import('pages/support/support')));

// render - profile
const ProfileEdit = Loadable(lazy(() => import('pages/profile/profile')));
const ProfilePassword = Loadable(lazy(() => import('pages/profile/password')));
const ProfileVerification = Loadable(lazy(() => import('pages/profile/verification')));

// maintenance and auth
const AuthChangePassword = Loadable(lazy(() => import('pages/auth/change-password')));
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing/landing')));

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <CommonLayout layout="landing" />,
      children: [
        {
          path: '/',
          element: <PagesLanding />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <CommonLayout />,
          children: [
            {
              path: 'login',
              element: <AuthLogin />
            },
            {
              path: 'register',
              element: <AuthRegister />
            },
            {
              path: 'forgot-password',
              element: <AuthForgotPassword />
            },
            {
              path: 'check-mail',
              element: <AuthCheckMail />
            },
            {
              path: 'reset-password',
              element: <AuthResetPassword />
            },
            {
              path: 'code-verification',
              element: <AuthCodeVerification />
            }
          ]
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              path: 'dashboard',
              children: [
                {
                  path: 'default',
                  element: <DashboardDefault />
                },
                {
                  path: 'referrals',
                  element: <DashboardReferrals />
                },
                {
                  path: 'commissions',
                  element: <DashboardCommissions />
                },
                {
                  path: 'rank',
                  element: <DashboardRank />
                },
                {
                  path: 'withdrawals',
                  element: <DashboardWithdrawals />
                },
                {
                  path: 'deposits',
                  element: <DashboardDeposits />
                }
              ]
            },
            {
              path: 'funding',
              children: [
                {
                  path: 'funding',
                  element: <FundingReal />
                }
              ]
            },
            {
              path: 'trading',
              children: [
                {
                  path: 'copy',
                  element: <TradingCopy />
                }
              ]
            },
            {
              path: 'pips',
              children: [
                {
                  path: 'binary',
                  element: <PipsBinary />
                },
                {
                  path: 'cryptos',
                  element: <PipsCryptos />
                },
                {
                  path: 'forex',
                  element: <PipsForex />
                },
                {
                  path: 'synthetic',
                  element: <PipsSynthetic />
                }
              ]
            },
            {
              path: 'academy',
              children: [
                {
                  path: 'finance',
                  element: <AcademyFinance />
                },
                {
                  path: 'trading',
                  element: <AcademyTrading />
                }
              ]
            },
            {
              path: 'health',
              children: [
                {
                  path: 'health',
                  element: <AcademyHealth />
                }
              ]
            },
            {
              path: 'lives',
              children: [
                {
                  path: 'lives',
                  element: <LivesLives />
                }
              ]
            },
            {
              path: 'eCommerce',
              children: [
                {
                  path: 'marketing',
                  element: <ECommerceMarketing />
                },
                {
                  path: 'websites',
                  element: <ECommerceWebsites />
                },
                {
                  path: 'design',
                  element: <ECommerceDesign />
                }
              ]
            },
            {
              path: 'documentation',
              children: [
                {
                  path: 'publicity',
                  element: <DocumentationPublicity />
                }
              ]
            },
            {
              path: 'support',
              children: [
                {
                  path: 'support',
                  element: <SupportSupport />
                }
              ]
            },
            {
              path: 'profile',
              children: [
                {
                  path: 'edit',
                  element: <ProfileEdit />
                },
                {
                  path: 'password',
                  element: <ProfilePassword />
                },
                {
                  path: 'verification',
                  element: <ProfileVerification />
                },
                {
                  path: 'change-password',
                  element: <AuthChangePassword />
                }
              ]
            }
          ]
        },
        {
          path: '/maintenance',
          element: <CommonLayout />,
          children: [
            {
              path: '404',
              element: <MaintenanceError />
            },
            {
              path: '500',
              element: <MaintenanceError500 />
            },
            {
              path: 'under-construction',
              element: <MaintenanceUnderConstruction />
            },
            {
              path: 'coming-soon',
              element: <MaintenanceComingSoon />
            }
          ]
        }
      ]
    }
  ]);
}
