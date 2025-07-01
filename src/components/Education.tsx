
import React, { useState } from 'react';
import { BookOpen, Shield, Briefcase, Users, Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('preparation');

  const videoUrl = 'https://youtu.be/0SE7Xh5NFAI?si=ItVptXIDKRU3m16m';

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

  const handleVideoClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Edukasi Siaga Banjir</h1>
        <p className="text-gray-600">Pelajari cara bersiap menghadapi bencana banjir</p>
      </div>

      {/* Video Section */}
      <Card className="shadow-lg">
        <CardContent className="p-0">
          <div 
            className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-lg flex items-center justify-center cursor-pointer hover:from-blue-500 hover:to-blue-700 transition-all"
            onClick={handleVideoClick}
          >
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity" />
              <p className="font-medium">Video Panduan Evakuasi Banjir</p>
              <p className="text-sm opacity-80">Durasi: 5 menit</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <ExternalLink size={14} />
                <span className="text-xs">Tonton di YouTube</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleVideoClick}
            >
              <Play size={16} className="mr-2" />
              Tonton Video
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Education Tabs */}
      <Tabs value={selectedTopic} onValueChange={setSelectedTopic}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="preparation">Persiapan</TabsTrigger>
          <TabsTrigger value="evacuation">Evakuasi</TabsTrigger>
          <TabsTrigger value="kit">Kit Darurat</TabsTrigger>
        </TabsList>

        {Object.entries(educationContent).map(([key, content]) => (
          <TabsContent key={key} value={key}>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <content.icon className="text-blue-600" size={20} />
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {content.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Tips */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Tips Penting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-medium text-yellow-800">Jangan Mengemudi di Air</p>
                  <p className="text-sm text-yellow-700">Air setinggi 15cm sudah bisa merusak kendaraan</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium text-blue-800">Jaga Komunikasi</p>
                  <p className="text-sm text-blue-700">Beri tahu keluarga tentang kondisi dan lokasi Anda</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
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
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Nomor Penting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="font-bold text-red-600 text-xl">112</p>
              <p className="text-sm text-red-700">Darurat Nasional</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-bold text-blue-600 text-xl">117</p>
              <p className="text-sm text-blue-700">SAR Nasional</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
