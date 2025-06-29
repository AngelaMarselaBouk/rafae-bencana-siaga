
import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

export const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const handleEmergencyAlert = () => {
    setIsEmergencyActive(true);
    toast({
      title: t('emergencyAlert'),
      description: "Sinyal darurat telah dikirim ke BPBD dan Pemerintah Desa",
      variant: "destructive",
    });
    
    // Simulate sending emergency signal
    setTimeout(() => {
      setIsEmergencyActive(false);
    }, 5000);
  };

  const handleSendLocation = () => {
    toast({
      title: "Lokasi Terkirim",
      description: "Koordinat GPS Anda telah dikirim ke tim bantuan",
    });
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">{t('emergency')}</h1>
        <p className="text-gray-600">Gunakan hanya dalam keadaan darurat</p>
      </div>

      {/* Emergency Alert */}
      <Card className={`shadow-lg ${isEmergencyActive ? 'bg-red-100 border-red-300 animate-pulse' : 'bg-red-50 border-red-200'}`}>
        <CardContent className="p-6 text-center">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <Button
            onClick={handleEmergencyAlert}
            disabled={isEmergencyActive}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-8 mb-4"
          >
            {isEmergencyActive ? 'SINYAL TERKIRIM...' : t('emergencyAlert')}
          </Button>
          <p className="text-sm text-red-700">
            Tekan tombol ini untuk mengirim sinyal darurat ke BPBD dan Pemerintah Desa
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <Button
              onClick={handleSendLocation}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            >
              <MapPin className="mr-2" size={20} />
              {t('sendLocation')}
            </Button>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Kirim koordinat GPS Anda kepada tim bantuan
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
            >
              <Phone className="mr-2" size={20} />
              {t('callHelp')}
            </Button>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Hubungi langsung pusat bantuan darurat
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Kontak Darurat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">BPBD Belu</p>
                <p className="text-sm text-gray-600">Badan Penanggulangan Bencana</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Pemerintah Desa Rafae</p>
                <p className="text-sm text-gray-600">Kepala Desa & Sekretaris Desa</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">PMI Belu</p>
                <p className="text-sm text-gray-600">Palang Merah Indonesia</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Instructions */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Petunjuk Keselamatan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• Tetap tenang dan jangan panik</p>
            <p>• Pindah ke tempat yang lebih tinggi</p>
            <p>• Hindari area yang tergenang air</p>
            <p>• Tunggu bantuan di tempat yang aman</p>
            <p>• Jaga komunikasi dengan keluarga</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
