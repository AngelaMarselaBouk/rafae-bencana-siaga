
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'id' | 'tet' | 'daw';
  setLanguage: (lang: 'id' | 'tet' | 'daw') => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    home: 'Beranda',
    map: 'Peta',
    emergency: 'Darurat',
    report: 'Laporan',
    education: 'Edukasi',
    
    // Dashboard
    floodDetection: 'Deteksi Banjir Rafae',
    weatherStatus: 'Status Cuaca',
    waterLevel: 'Ketinggian Air',
    emergencyButton: 'TOMBOL DARURAT',
    lastReports: 'Laporan Terbaru',
    
    // Weather conditions
    sunny: 'Cerah',
    cloudy: 'Berawan',
    rainy: 'Hujan',
    stormy: 'Badai',
    
    // Water levels
    normal: 'Normal',
    warning: 'Waspada',
    alert: 'Siaga',
    danger: 'Bahaya',
    
    // Emergency
    emergencyAlert: 'PERINGATAN DARURAT',
    sendLocation: 'Kirim Lokasi',
    callHelp: 'Panggil Bantuan',
    
    // Report
    submitReport: 'Kirim Laporan',
    location: 'Lokasi',
    description: 'Deskripsi',
    photo: 'Foto',
    
    // Education
    floodPreparedness: 'Kesiapsiagaan Banjir',
    evacuationGuide: 'Panduan Evakuasi',
    emergencyKit: 'Kit Darurat'
  },
  tet: {
    // Navigation
    home: 'Uma',
    map: 'Mapa',
    emergency: 'Emerjénsia',
    report: 'Relatóriu',
    education: 'Edukasaun',
    
    // Dashboard
    floodDetection: 'Deteksaun Bee-Manas Rafae',
    weatherStatus: 'Estadu Tempo',
    waterLevel: 'Nivel Bee',
    emergencyButton: 'BOTAUN EMERJÉNSIA',
    lastReports: 'Relatóriu Foun',
    
    // Weather conditions
    sunny: 'Mahuur',
    cloudy: 'Duut',
    rainy: 'Udan',
    stormy: 'Anin Boot',
    
    // Water levels
    normal: 'Normál',
    warning: 'Haree',
    alert: 'Prontu',
    danger: 'Perigózu',
    
    // Emergency
    emergencyAlert: 'AVIZU EMERJÉNSIA',
    sendLocation: 'Haruka Fatin',
    callHelp: 'Bolu Ajuda',
    
    // Report
    submitReport: 'Haruka Relatóriu',
    location: 'Fatin',
    description: 'Deskrisaun',
    photo: 'Foto',
    
    // Education
    floodPreparedness: 'Preparasaun Ba Bee-Manas',
    evacuationGuide: 'Gia Evakuasaun',
    emergencyKit: 'Kit Emerjénsia'
  },
  daw: {
    // Navigation (Dawan translations)
    home: 'Ume',
    map: 'Peta',
    emergency: 'Bahaya',
    report: 'Laporan',
    education: 'Sekolah',
    
    // Dashboard
    floodDetection: 'Cari Banjir Rafae',
    weatherStatus: 'Keadaan Cuaca',
    waterLevel: 'Tinggi Air',
    emergencyButton: 'TOMBOL BAHAYA',
    lastReports: 'Laporan Baru',
    
    // Weather conditions
    sunny: 'Panas',
    cloudy: 'Berawan',
    rainy: 'Hujan',
    stormy: 'Angin Besar',
    
    // Water levels
    normal: 'Biasa',
    warning: 'Hati-hati',
    alert: 'Siaga',
    danger: 'Bahaya',
    
    // Emergency
    emergencyAlert: 'PERINGATAN BAHAYA',
    sendLocation: 'Kirim Tempat',
    callHelp: 'Panggil Tolong',
    
    // Report
    submitReport: 'Kirim Laporan',
    location: 'Tempat',
    description: 'Cerita',
    photo: 'Gambar',
    
    // Education
    floodPreparedness: 'Siap Hadapi Banjir',
    evacuationGuide: 'Cara Mengungsi',
    emergencyKit: 'Tas Darurat'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'id' | 'tet' | 'daw'>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
