import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MUIThemeProvider } from './configs/Providers/MUI/MUIThemeProvider.tsx'
import { RTLProvider } from './configs/Providers/RTL/RTLProvider.tsx'
import ReduxProvider from './configs/Providers/Redux/ReduxProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider>
    <MUIThemeProvider>
      <RTLProvider>
          <App />
      </RTLProvider>
    </MUIThemeProvider>,
  </ReduxProvider>
)
