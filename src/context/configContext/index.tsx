import { createContext, useContext, useState, useEffect, JSX } from 'react';

import { ComponentConfig } from './types';

const ConfigContext = createContext({}); // NOTE: should have default values here

interface ConfigProviderProps {
  children: JSX.Element;
  config?: ComponentConfig | null;
}

export const ConfigProvider = ({
  children,
  config,
}: ConfigProviderProps): JSX.Element => {
  // const finalConfig = useRef<ComponentConfig | object>({});
  const [finalConfig, setFinalConfig] = useState<ComponentConfig | object>({});

  useEffect(() => {
    if (!config) {
      const configFromEnv: ComponentConfig = {
        REACT_APP_STAC_API_URL: process.env.REACT_APP_STAC_API_URL || '',
        REACT_APP_RASTER_API_URL: process.env.REACT_APP_RASTER_API_URL || '',
        REACT_APP_CLOUD_BROWSE_URL:
          process.env.REACT_APP_CLOUD_BROWSE_URL || '',
        PUBLIC_URL: process.env.PUBLIC_URL || '',
        REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN || '',
        REACT_APP_MAPBOX_STYLE_URL:
          process.env.REACT_APP_MAPBOX_STYLE_URL || '',
      };
      setFinalConfig(configFromEnv);
    } else {
      setFinalConfig(config);
    }
  }, [children, config]);

  return (
    <ConfigContext.Provider value={{ config: finalConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): { config: ComponentConfig } =>
  useContext(ConfigContext) as { config: ComponentConfig };
