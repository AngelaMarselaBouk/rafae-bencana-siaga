
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
      description: "Sinyal darurat telah dikirim ke BPBD Belu dan Pemerintah Kabupaten Belu",
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
      description: "Koordinat GPS Anda di Atambua telah dikirim ke tim bantuan",
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">{t('emergency')}</h1>
        <p className="text-gray-600">Gunakan hanya dalam keadaan darurat - Atambua, Belu</p>
      </div>

      {/* Emergency Alert */}
      <Card className={`shadow-lg ${isEmergencyActive ? 'bg-red-100 border-red-300 animate-pulse' : 'bg-red-50 border-red-200'}`}>
        <CardContent className="p-6 text-center">
          <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-4" />
          <Button
            onClick={handleEmergencyAlert}
            disabled={isEmergencyActive}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-8 mb-4"
          >
            {isEmergencyActive ? 'SINYAL TERKIRIM...' : t('emergencyAlert')}
          </Button>
          <p className="text-sm text-red-700">
            Tekan tombol ini untuk mengirim sinyal darurat ke BPBD Belu dan Pemerintah Kabupaten Belu
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
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">BPBD Kabupaten Belu</p>
                <p className="text-sm text-gray-600">Badan Penanggulangan Bencana Daerah</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Pemerintah Kabupaten Belu</p>
                <p className="text-sm text-gray-600">Bupati & Sekretaris Daerah</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">PMI Cabang Belu</p>
                <p className="text-sm text-gray-600">Palang Merah Indonesia</p>
              </div>
              <Button size="sm" variant="outline">
                <Phone size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Polres Belu</p>
                <p className="text-sm text-gray-600">Kepolisian Resort Belu</p>
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
          <CardTitle className="text-xl">Petunjuk Keselamatan Banjir - Atambua</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div>
              <p>• Tetap tenang dan jangan panik</p>
              <p>• Pindah ke tempat yang lebih tinggi</p>
              <p>• Hindari area yang tergenang air</p>
              <p>• Matikan listrik di rumah</p>
            </div>
            <div>
              <p>• Tunggu bantuan di tempat yang aman</p>
              <p>• Jaga komunikasi dengan keluarga</p>
              <p>• Siapkan dokumen penting</p>
              <p>• Ikuti instruksi petugas berwenang</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
