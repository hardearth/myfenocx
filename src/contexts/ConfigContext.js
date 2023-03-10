import PropTypes from 'prop-types';
import { createContext } from 'react';

// project import
import config from 'config';
import useLocalStorage from 'contexts/useLocalStorage';

// initial state
const initialState = {
  ...config,
  onChangeLocalization: () => {}
};

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('mantis-react-ts-config', initialState);

  const onChangeLocalization = (lang) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocalization
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node
};

export { ConfigProvider, ConfigContext };
