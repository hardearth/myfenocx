import Routes from 'routes';
import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
import { Toaster } from 'react-hot-toast';

const App = () => (
  <ThemeCustomization>
    <Locales>
      <ScrollTop>
        <>
          <Routes />
        </>
      </ScrollTop>
      <Toaster
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#D1A56B',
            color: '#fff'
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black'
            }
          }
        }}
      />
    </Locales>
  </ThemeCustomization>
);

export default App;
