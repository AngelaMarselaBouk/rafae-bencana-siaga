
import React, { useState } from 'react';
import { BookOpen, Shield, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('preparation');

  const educationContent = {
    preparation: {
      title: 'Persiapan Sebelum Banjir',
      icon: Shield,
      content: [
        'Kenali area rawan banjir di sekitar rumah',
        'Siapkan tas darurat dengan dokumen penting',
        'Tentukan jalur evakuasi ke tempat yang aman',
        'Simpan nomor kontak darurat',
        'Pastikan alat komunikasi selalu terisi daya'
      ]
    },
    evacuation: {
      title: 'Panduan Evakuasi',
      icon: Users,
      content: [
        'Tetap tenang dan jangan panik',
        'Matikan listrik dan gas sebelum keluar',
        'Bawa tas darurat dan dokumen penting',
        'Ikuti jalur evakuasi yang telah ditentukan',
        'Berkumpul di titik kumpul terdekat',
        'Tunggu instruksi dari petugas'
      ]
    },
    kit: {
      title: 'Kit Darurat',
      icon: Briefcase,
      content: [
        'Air minum untuk 3 hari (3 liter per orang)',
        'Makanan kaleng dan biskuit tahan lama',
        'Obat-obatan pribadi dan P3K',
        'Dokumen penting dalam plastik kedap air',
        'Pakaian ganti dan selimut',
        'Senter, radio, dan baterai',
        'Uang tunai secukupnya'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Edukasi Siaga Banjir</h1>
        <p className="text-gray-600">Pelajari cara bersiap menghadapi bencana banjir</p>
      </div>

      {/* Education Tabs */}
      <Tabs value={selectedTopic} onValueChange={setSelectedTopic}>
        <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
          <TabsTrigger value="preparation">Persiapan</TabsTrigger>
          <TabsTrigger value="evacuation">Evakuasi</TabsTrigger>
          <TabsTrigger value="kit">Kit Darurat</TabsTrigger>
        </TabsList>

        {Object.entries(educationContent).map(([key, content]) => (
          <TabsContent key={key} value={key}>
            <Card className="shadow-md bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <content.icon className="text-blue-600" size={20} />
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {content.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Tips */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardTitle className="text-lg">Tips Penting</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-medium text-yellow-800">Jangan Mengemudi di Air</p>
                  <p className="text-sm text-yellow-700">Air setinggi 15cm sudah bisa merusak kendaraan</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium text-blue-800">Jaga Komunikasi</p>
                  <p className="text-sm text-blue-700">Beri tahu keluarga tentang kondisi dan lokasi Anda</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="font-medium text-green-800">Cari Tempat Tinggi</p>
                  <p className="text-sm text-green-700">Naik ke lantai atas atau bukit terdekat saat air naik</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts Card */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
          <CardTitle className="text-lg">Nomor Penting</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-sm">
              <p className="font-bold text-red-600 text-xl">112</p>
              <p className="text-sm text-red-700">Darurat Nasional</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm">
              <p className="font-bold text-blue-600 text-xl">117</p>
              <p className="text-sm text-blue-700">SAR Nasional</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
