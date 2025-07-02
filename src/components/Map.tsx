
import React from 'react';
import { ArrowLeft, Info, Phone, MapPin, Clock, AlertTriangle, Navigation, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Map: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Peta Lokasi Atambua</h1>
        </div>

        {/* Google Maps Container */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <MapPin size={20} />
              Lokasi Atambua, Kabupaten Belu
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-80 rounded-lg overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.234567890123!2d125.0941!3d-9.1058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c57bb7c0c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sAtambua%2C%20Belu%20Regency%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1640995200000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Atambua"
              ></iframe>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://g.co/kgs/DjrwNv6', '_blank')}
              >
                <ExternalLink size={16} className="mr-2" />
                Buka di Google Maps
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-green-600 border-green-600 hover:bg-green-50"
                onClick={() => window.open('https://images.app.goo.gl/jEZpdgbsHfJWRT6y7', '_blank')}
              >
                <MapPin size={16} className="mr-2" />
                Peta Pos Pengamatan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="space-y-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Info size={20} />
                Informasi Wilayah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={16} />
                <div>
                  <p className="font-medium text-gray-800">Lokasi</p>
                  <p className="text-sm text-gray-600">Atambua, Kabupaten Belu, Nusa Tenggara Timur</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-orange-500 mt-1" size={16} />
                <div>
                  <p className="font-medium text-gray-800">Status Sistem Otomatis</p>
                  <p className="text-sm text-gray-600">Sistem pemantauan banjir terintegrasi dengan pos pengamatan manual</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Phone size={20} />
                Kontak Darurat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <p className="font-bold text-red-600 text-lg">112</p>
                  <p className="text-xs text-red-700">Darurat Nasional</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="font-bold text-blue-600 text-lg">117</p>
                  <p className="text-xs text-blue-700">SAR Nasional</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">BPBD Kabupaten Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21234</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Polres Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21110</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">PMI Kabupaten Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21500</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Clock size={20} />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Pusat Informasi</span>
                  <span className="text-sm font-medium">24 Jam</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">BPBD Kabupaten</span>
                  <span className="text-sm font-medium">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Pos Keamanan</span>
                  <span className="text-sm font-medium">24 Jam</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Wave Pattern */}
        <div className="relative h-20 mt-8">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
