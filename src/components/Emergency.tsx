
import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Send, Zap, Shield, Users, Hospital, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { NotificationService } from '../utils/notificationService';

export const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const handleEmergencyAlert = () => {
    setIsEmergencyActive(true);
    toast({
      title: t('emergencyAlert'),
      description: "Sinyal darurat telah dikirim ke BPBD Belu dan Pemerintah Kabupaten Belu",
      variant: "destructive",
    });
    
    // Simulate sending emergency signal
    setTimeout(() => {
      setIsEmergencyActive(false);
    }, 5000);
  };

  const handleSOSAlert = async () => {
    setSosActive(true);
    const service = NotificationService.getInstance();
    await service.sendSOSAlert();
    
    toast({
      title: t('sosAlert'),
      description: "Sinyal S.O.S darurat telah dikirim ke semua unit penyelamat di Kabupaten Belu",
      variant: "destructive",
    });
    
    // Simulate sending SOS signal
    setTimeout(() => {
      setSosActive(false);
    }, 8000);
  };

  const handleSendLocation = () => {
    toast({
      title: "Lokasi Terkirim",
      description: "Koordinat GPS Anda di Atambua telah dikirim ke tim bantuan",
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">{t('emergency')}</h1>
        <p className="text-gray-600">Gunakan hanya dalam keadaan darurat - Atambua, Belu</p>
      </div>

      {/* S.O.S Emergency Button - Most prominent */}
      <Card className={`shadow-xl mb-6 ${sosActive ? 'bg-red-600 animate-pulse border-red-400' : 'bg-red-500 border-red-400'}`}>
        <CardContent className="p-6 text-center">
          <Zap className="w-24 h-24 text-white mx-auto mb-4" />
          <Button
            onClick={handleSOSAlert}
            disabled={sosActive}
            className="w-full bg-red-700 hover:bg-red-800 text-white text-3xl font-bold py-8 mb-4 border-4 border-white shadow-2xl"
          >
            {sosActive ? 'SINYAL S.O.S TERKIRIM...' : t('sosAlert')}
          </Button>
          <p className="text-lg text-white/95 font-medium">
            {sosActive ? 
              '🚨 Tim penyelamat BPBD Belu, PMI, dan Polres sedang menuju lokasi Anda!' : 
              'Tekan untuk mengirim sinyal darurat S.O.S ke semua unit penyelamat'
            }
          </p>
        </CardContent>
      </Card>

      {/* Regular Emergency Alert */}
      <Card className={`shadow-lg ${isEmergencyActive ? 'bg-orange-100 border-orange-300 animate-pulse' : 'bg-orange-50 border-orange-200'}`}>
        <CardContent className="p-6 text-center">
          <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <Button
            onClick={handleEmergencyAlert}
            disabled={isEmergencyActive}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-6 mb-4"
          >
            {isEmergencyActive ? 'SINYAL TERKIRIM...' : t('emergencyAlert')}
          </Button>
          <p className="text-sm text-orange-700">
            Tekan tombol ini untuk mengirim peringatan ke BPBD Belu dan Pemerintah Kabupaten Belu
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <Button
              onClick={handleSendLocation}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 text-xl"
            >
              <MapPin className="mr-2" size={24} />
              {t('sendLocation')}
            </Button>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Kirim koordinat GPS Atambua Anda kepada tim bantuan
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-8 text-xl"
            >
              <Phone className="mr-2" size={24} />
              {t('callHelp')}
            </Button>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Hubungi langsung pusat bantuan darurat Kabupaten Belu
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Kontak Darurat - Atambua</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-3">
                <Shield className="text-red-500" size={20} />
                <div>
                  <p className="font-medium">BPBD Kabupaten Belu</p>
                  <p className="text-sm text-gray-600">Badan Penanggulangan Bencana Daerah</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-red-300 text-red-600">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <Home className="text-blue-500" size={20} />
                <div>
                  <p className="font-medium">Pemerintah Kabupaten Belu</p>
                  <p className="text-sm text-gray-600">Bupati & Sekretaris Daerah</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-blue-300 text-blue-600">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <Users className="text-green-500" size={20} />
                <div>
                  <p className="font-medium">PMI Cabang Belu</p>
                  <p className="text-sm text-gray-600">Palang Merah Indonesia</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-green-300 text-green-600">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <Hospital className="text-purple-500" size={20} />
                <div>
                  <p className="font-medium">Polres & Puskesmas Belu</p>
                  <p className="text-sm text-gray-600">Kepolisian & Kesehatan</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-purple-300 text-purple-600">
                <Phone size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Instructions */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Petunjuk Keselamatan Banjir - Atambua</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 text-sm md:grid-cols-2">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Tetap tenang dan jangan panik
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Pindah ke tempat yang lebih tinggi
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Hindari area yang tergenang air
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Matikan listrik di rumah
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tunggu bantuan di tempat yang aman
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Jaga komunikasi dengan keluarga
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Siapkan dokumen penting
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Ikuti instruksi petugas berwenang
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
