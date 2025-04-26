// src/App.js
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  // Tarihi gösteren küçük bileşen
  const DateDisplay = () => (
    <div>
      {t('currentDate', {
        date: new Date(),              // Tarih objesi
        format: 'dd/MM/yyyy'           // i18n.js içindeki interpolation.format kullanır
      })}
    </div>
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>

      <DateDisplay />

      <button onClick={() => changeLanguage('tr')}>Türkçe</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default App;
